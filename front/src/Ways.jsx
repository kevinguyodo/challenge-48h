import Login from './views/Login'
import UserConnectionPage from './views/UserConnectionPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Ways() {


return ( 
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
          <Route path='/ClientConnection' element={<UserConnectionPage />} />
        </Routes>
      </BrowserRouter>
    </>
)
}
export default Ways

