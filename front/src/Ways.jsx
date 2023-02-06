import Login from './views/Login'
import Main from './views/Mainpage'
import CustomerCreateAccount from './views/CustomerCreateAccount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Ways() {


return ( 
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/CustomerCreateAccount' element={<CustomerCreateAccount />} />
        </Routes>
      </BrowserRouter>
    </>
)
}
export default Ways

