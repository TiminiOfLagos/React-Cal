import React from 'react'

const Button = () => {
  return (
     <div className=' grid grid-flow-col gap-2'>
        <input className=' mt-4 w-[100%] h-12 bg-slate-400 outline-none text-2xl' type="button" value="AC" onclick="result.value += `7`" id="one"></input>
        <input className=' mt-4 w-[100%] h-12 bg-slate-400 outline-none text-2xl' type="button" value="DEL" onclick="result.value += `8`"></input>
     </div>
    
  )
}


export default Button