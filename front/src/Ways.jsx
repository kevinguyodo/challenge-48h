import Login from './views/Login'
import AddProductPage from './views/AddProductPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Ways() {


return ( 
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/AddProduct' element={<AddProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
)
}
export default Ways

