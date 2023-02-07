import Login from './views/Login'
import Main from './views/Mainpage'
import CustomerCreateAccount from './views/CustomerCreateAccount'
import SellerCreateAccount from './views/SellerCreateAccount'
import HomePage from './views/HomePage'
import AddProductPage from './components/AddProductPage'
import ItemPage from './views/ItemPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Ways() {


return ( 
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/AddProduct' element={<AddProductPage />} />
          <Route path='/' index={true} element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/CustomerCreateAccount' element={<CustomerCreateAccount />} />
          <Route path='/SellerCreateAccount' element={<SellerCreateAccount />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/ItemPage' element={<ItemPage />} />
        </Routes>
      </BrowserRouter>
  </>
)
}
export default Ways

