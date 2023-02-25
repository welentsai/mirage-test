import React from 'react'
import renderer from 'react-test-renderer'
import { afterAll, describe, expect, test , beforeEach, it, afterEach} from 'vitest'
import { getUsers } from '../src/services/UserService'
import Pretender from 'pretender'

interface LocalTestContext {
    originalXMLHttpRequest: any
    pretender: Pretender
}

beforeEach<LocalTestContext>(async (context) => {
    context.originalXMLHttpRequest = window.XMLHttpRequest
    context.pretender = new Pretender()
})

afterEach<LocalTestContext>(async (context) => {
    context.pretender.shutdown()
    window.XMLHttpRequest = context.originalXMLHttpRequest
})

// it<LocalTestContext>('should work 1',  async({originalXMLHttpRequest, pretender}) => {
//     const result = await getUsers()
//     console.log(result)
//     expect(result._tag).toBe('Left')
// })

// it<LocalTestContext>('should work 2',  async({originalXMLHttpRequest, pretender}) => {
    
//     const result = await getUsers()
//     console.log(result)

//     const PASS_THROUGH_URL = 'https://reqres.in/api/users?page=1'
//     pretender.get(PASS_THROUGH_URL, pretender.passthrough)

//     const onEvents = {
//         load: false,
//         progress: false,
//         readystatechange: false,
//         loadend: false // new
//     };

//     const listenerEvents = {
//         load: false,
//         progress: false,
//         readystatechange: false,
//         loadend: false // new
//     };

//     const xhr = new window.XMLHttpRequest();
//     xhr.open('GET', PASS_THROUGH_URL);

//     xhr.addEventListener('progress', function _progress() {
//       listenerEvents.progress = true;
//     });

//     xhr.onprogress = function _onprogress() {
//       onEvents.progress = true;
//     };

//     xhr.addEventListener('load', function _load() {
//       listenerEvents.load = true;
//       finishNext();
//     });

//     xhr.onload = function _onload() {
//       onEvents.load = true;
//       finishNext();
//     };

//     xhr.addEventListener('readystatechange', function _load() {
//       if (xhr.readyState == 4) {
//         listenerEvents.readystatechange = true;
//         finishNext();
//       }
//     });

//     xhr.onreadystatechange = function _onload() {
//       if (xhr.readyState == 4) {
//         onEvents.readystatechange = true;
//         finishNext();
//       }
//     };

//     //-- new - start
//     xhr.addEventListener('loadend', function _loadend() {
//         listenerEvents.loadend = true;
//         finishNext();
//     });
  
//     xhr.onloadend = function _onloadend() {
//         onEvents.loadend = true;
//         finishNext();
//     };
//     //-- new - end

//     xhr.send();

//     // call `finish` in next tick to ensure both load event handlers
//     // have a chance to fire.
//     function finishNext() {
//         setTimeout(finishOnce, 1);
//     }

//     var finished = false;
//     function finishOnce() {
//       if (!finished) {
//         finished = true;

//         // assert.ok(onEvents.load, 'onload called');
//         // assert.ok(onEvents.progress, 'onprogress called');
//         // assert.ok(onEvents.readystatechange, 'onreadystate called');

//         // assert.ok(listenerEvents.load, 'load listener called');
//         // assert.ok(listenerEvents.progress, 'progress listener called');
//         // assert.ok(
//         //   listenerEvents.readystatechange,
//         //   'readystate listener called'
//         // );

//         // done();
//       }
//     }

//     expect(1).toBe(1)
// })

it<LocalTestContext>('should work 3',  async({originalXMLHttpRequest, pretender}) => {

    const PASS_THROUGH_URL = 'https://reqres.in/api/users?page=1'
    // pretender.get(PASS_THROUGH_URL, pretender.passthrough)

    // pretender.get(PASS_THROUGH_URL, request => {
    //     return [200, {"Content-Type": "application/json"}, 'test']
    // })

    // FIX -->
    // const NativeXMLHttpRequest = window.XMLHttpRequest;
    // const custom_request = new NativeXMLHttpRequest();
    // delete custom_request.onloadend;
    // window.XMLHttpRequest = custom_request


    pretender.unhandledRequest = function(verb, path, request) {
        console.warn(`Incoming Unhandle request) ${verb.toUpperCase()} : ${path}`);

        const xhr = request.passthrough(); // <-- A native, sent xhr is returned

        // xhr.onloadend = (ev) => {
        //     console.warn(`onloadend !! Response for ${path}`, {
        //       verb,
        //       path,
        //       request,
        //       responseEvent: ev,
        //     })
        // };

        // xhr.onreadystatechange = (ev) => {
        //     console.warn(`onreadystatechange !! Response for ${path}`, {
        //       verb,
        //       path,
        //       request,
        //       responseEvent: ev,
        //     })
        // };
    }

    const result = await getUsers()
    console.log(result)
    expect(result._tag).toBe('Right')
})