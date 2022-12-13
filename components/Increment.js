import React from 'react'
import { useDispatch } from 'react-redux'
import {increment } from '../slice/counterSlice'


function Increment() {
    const dispatch = useDispatch();
    return ( <div>
        <button onClick={()=>dispatch(increment())}>+</button>
    </div>
    )
}

export default Increment