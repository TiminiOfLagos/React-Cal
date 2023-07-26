import React from 'react'
import Input from './Components/Input'
import Button from './Components/Button'
import Button2 from './Components/Buttons2'
import Button3 from './Components/Button3'
import Button4 from './Components/Button4'
import Button5 from './Components/Button5'

const App = () => {
  return (
    <div className=' bg-orange-500 w-screen h-screen grid place-items-center'>
      <div className=' bg-amber-900 h-[50%] w-[20%] border-8 rounded-2xl p-4'>
      <Input/>
      <Button/>
      <Button2/>
      <Button3/>
      <Button4/>
      <Button5/>
      </div>
    </div>
  )
}

export default App
