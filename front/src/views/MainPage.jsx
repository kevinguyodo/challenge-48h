import Page from '../components/MainPage'
import { useNavigate } from 'react-router-dom';
function Mainpage() {
  const navigate = useNavigate()

  const ToLogin = () => {
    navigate('/login')
  }
  const ToSellerCreateAccount = () => {
    navigate('CustomerCreateAccount')
  }
  const ToCustomerCreateAccount = () => {
    navigate('CustomerCreateAccount')
  }

  return (
      <Page ToLogin={ToLogin} ToSellerCreateAccount={ToSellerCreateAccount} ToCustomerCreateAccount={ToCustomerCreateAccount}/>
  )
}

export default Mainpage

