import React from 'react'
import renderer from 'react-test-renderer'
import { afterAll, describe, expect, test , beforeEach, it, afterEach} from 'vitest'
import { getUsers } from '../src/services/UserService'
import Pretender from 'pretender'
import {createServer} from 'miragejs'
import axios from 'axios'

const PASS_THROUGH_URL = 'https://reqres.in/api/users?page=1'

interface LocalTestContext {
}

beforeEach<LocalTestContext>(async (context) => {
})

afterEach<LocalTestContext>(async (context) => {
})

it<LocalTestContext>('should work 1',  async(ctx) => {

    createServer({
        routes() {
            this.passthrough(PASS_THROUGH_URL, ['get'])

            this.passthrough(request => {
                console.warn(`Incoming Unhandle request) ${request.url}`);
                return true;
            })

            this.get('/api/hello', () => ({
                remiders: []
            }))

            // this.get('/api/users', () => getUsers() )
        }
    })
    
    const resp = await axios.get(PASS_THROUGH_URL)
    console.log(resp.data)

    // expect(1).toBe(2)
})