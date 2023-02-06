import Login from './views/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Ways() {


return ( 
  <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
)
}
export default Ways

