import { useState } from 'react'
import Card from './Card.jsx'
function App() {
  

  return (
    <>
      <div className="bg-blue-200 items-center justify-center">
    <input placeholder="over here" className="m-4 p-6"> <button className="bg-green-500 text-white max-w-xl" >Send</button>
      </input>
      <Card/>
      </div>
      </>
  )
}

export default App


