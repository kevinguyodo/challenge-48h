import Login from '../components/Login'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const ReceiveData = (mail,psw) =>{
    console.log(mail)
    console.log(psw)
  }
  
  const IntoCustomerAccount = () => {
    navigate('/')
  }

  return (
      <Login ReceiveData={ReceiveData} IntoCustomerAccount={IntoCustomerAccount}/>
  )
}

export default LoginPage

