import { useState } from 'react'
import axios from 'axios'

const PASS_THROUGH_URL = 'https://reqres.in/api/users?page=1'

function MyButton() {
    const [count, setCount] = useState(0)

    const handleClick = async () => {
        setCount((count) => count + 1)
        const resp = await axios.get(PASS_THROUGH_URL)
        console.log(resp.data)
    }

    return (
        <div className="MyButton">
            <div className="card">
                <button onClick={handleClick}> count is {count}</button>
            </div>
        </div>
    )
}

export default MyButton