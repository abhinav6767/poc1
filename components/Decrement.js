import React from 'react'
import { useDispatch } from 'react-redux'
import {decrement } from '../slice/counterSlice'


function Decrement() {
    const dispatch = useDispatch();
    return ( <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
    )
}

export default Decrement