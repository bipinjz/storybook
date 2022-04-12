import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './slice'

export const StoreComp = () => {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const increase = () => {
        console.log('i');
        // state fn
        dispatch(increment())
    }

    const decrease = () => {
        console.log('d');
        dispatch(decrement())
    }
    
    return(
        <div>
            {count}
            <button onClick={increase}>+ </button>
            <button onClick={decrease}>- </button>
        </div>
    )
}