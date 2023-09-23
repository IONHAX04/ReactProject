import React from 'react'
import { useState } from 'react'


export default function UseState() {

    const [value, setValue] = useState(0);

    const increment = () => {
        setValue(value+1);
    }

    return (
        <div>
            <p>Count : {value}</p>
            <button className='btn' onClick={increment}>Increase Count</button>

            <ul>
                <li>rfc</li>
                <li>declare variables and values --- p tag, count, button</li>
                <li>onClick - button functions</li>
                <li>setValue(value+1)</li>
            </ul>
        </div>
    )
}
