import Login from './views/Login'
import Main from './views/MainPage'
import CustomerCreateAccount from './views/CustomerCreateAccount'
import SellerCreateAccount from './views/SellerCreateAccount'
import HomePage from './views/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";


function Ways() {
  

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/CustomerCreateAccount' element={<CustomerCreateAccount />} />
          <Route path='/SellerCreateAccount' element={<SellerCreateAccount />} />
          <Route path='/HomePage' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
