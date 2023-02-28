import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { mockServer } from './services/MockServer'
import MyButton from './components/MyButton'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'

function App() {
  mockServer()
  const NativeXMLHttpRequest = window.XMLHttpRequest;
  // window.XMLHttpRequest = function XMLHttpRequest() {
  //   // const request = new NativeXMLHttpRequest(arguments);
  //   const request :XMLHttpRequest = new NativeXMLHttpRequest();
  //   delete request.onloadend;
  //   return request;
  // };

  const [count, setCount] = useState(0)

  return (
    // <div className="App">
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src="/vite.svg" className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://reactjs.org" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </div>
    <MyButton></MyButton>
  )
}

export default App
