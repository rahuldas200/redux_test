import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment } from '../redux/slices/counterSlics';

const Counter = () => {

    const count = useSelector ( (state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div className='flex gap-16 p-9 border border-r-zinc-300 rounded-md max-sm:flex-col items-center max-sm:border-b max-sm:border-b-zinc-300'>
        <button onClick={ () => dispatch(incriment())} 
            className='border-r border-r-zinc-300  p-5'>
            Incriment
        </button>
        <div>
            {count}
        </div>
        <button onClick={ () => dispatch(decriment())}
            className='border-l border-l-zinc-300 p-5 '>
            Decriment
        </button>

    </div>
  )
}

export default Counter
