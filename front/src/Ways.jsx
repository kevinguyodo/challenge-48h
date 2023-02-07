import Login from './views/Login'
import Main from './views/Mainpage'
import CustomerCreateAccount from './views/CustomerCreateAccount'
import SellerCreateAccount from './views/SellerCreateAccount'
import HomePage from './views/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './views/Cart'


function Ways() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    getData("company").then((company) => setTest(company.data));
  }, []);

  console.log(test);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index={true} element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/CustomerCreateAccount' element={<CustomerCreateAccount />} />
          <Route path='/SellerCreateAccount' element={<SellerCreateAccount />} />
          <Route path='/HomePage' element={<HomePage />} />
          <Route path='/Cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Ways;
