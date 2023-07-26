import React from 'react'

const Button = () => {
  return (
     <div className=' grid grid-flow-col gap-2 mt-10'>
        <input className=' mt-4 w-[100%] h-12 bg-slate-400 outline-none text-2xl' type="button" value="7" onclick="result.value += `7`" id="one"></input>
        <input className=' mt-4 w-[100%] h-12 bg-slate-400 outline-none text-2xl' type="button" value="8" onclick="result.value += `8`"></input>
        <input className=' mt-4 w-[100%] h-12 bg-slate-400 outline-none text-2xl' type="button" value="9" onclick="result.value += `9`"></input>
        <input className=' mt-4 w-[100%] h-12 bg-slate-400 outline-none text-2xl' type="button" value="÷" onclick="result.value += `÷`"></input>
     </div>
    
  )
}


export default Button