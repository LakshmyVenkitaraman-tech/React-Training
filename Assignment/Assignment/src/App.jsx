import { useState } from 'react'


function App() {
  const[value,setValue]=useState("");
  
  const checkInput=({value})=>
  {
    if(value.length!==NULL)
    {

    }

  }
  const handleReset=()=>
  {
     
  }
  const handleSubmit=(e)=>
  {
    e.preventDefault();
    alert("submitted successfully");
  }
  return (
    <div className=" text-blue-300 bg-gray-100" >
      <div className="border-6 border-color-red rounded max-w-xl items-align justify-center ">
      <div className="flex flex-row px-3 py-3 m-4 gap-5 items-align justify-center font-bold text-bold ">
        <input type="number" maxLength={1} onInvalid={alert("fill the box")}><div className='border-2 border-color-red rounded'> </div></input>
        <input type="number" maxLength={1} onInvalid={alert("fill the box")}><div className='border-2 border-color-green rounded'> </div></input>
        <input type="number" maxLength={1} onInvalid={alert("fill the box")}><div className='border-2 border-color-blue rounded'></div></input>
        <input type="number" maxLength={1} onInvalid={alert("fill the box")}><div className='border-2 border-color-red rounded'> </div></input>
        <input type="number"maxLength={1} onInvalid={alert("fill the box")}><div className='border-2 border-color-green rounded'> </div></input>
        <input type="number"maxLength={1} onInvalid={alert("fill the box")}><div className='border-2 border-color-blue rounded'> </div></input>
      </div>

      <button className=' bg-blue-200 text-black hover:bg-blue-500 p-4 m-4 gap-5 align-items justify-center'>Reset</button>
      <button className='bg-green-200 text-black hover:bg-green-500 p-4 m-4 gap-5 align-items justify-center' value={handleSubmit}>Submit</button>
      </div>

    </div>
  )
}

export default App
