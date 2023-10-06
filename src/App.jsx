import React from 'react'
import Counter from './Components/Counter'

const App = () => {
  return (
    <div className='bg-slate-900 text-white w-screen h-screen flex justify-center items-center flex-col gap-5'>
      <div className='text-center'>
        Counter App Using Redux toolkit
      </div>
      <div>
        <Counter/>
      </div>
    </div>
  )
}

export default App

