import Login from './views/Login'
import Main from './views/Mainpage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Ways() {


return ( 
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Main />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
)
}
export default Ways

