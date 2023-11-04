import '../App/App.css'
import React from 'react'
import MyAccount from '../MyAccount/index'
import MyOrder from '../MyOrder/index'
import MyOrders from '../MyOrders/index'
import SignUp from '../SignUp/index'
import NotFound from '../NotFound/index'
import Home from '../Home/index'


function App() {

  return (
    <>
      <div className='text-3xl font-bold underline bg-red-900'>
       folders
      </div>
      <Home/>
      <MyOrder/>
      <MyOrders/>
      <SignUp/>
      <MyAccount/>
      <NotFound/>
    </>
  )
}

export default App
