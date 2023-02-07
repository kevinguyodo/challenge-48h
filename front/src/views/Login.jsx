import Login from '../components/Login'
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()
  const ReceiveData = (mail,psw) =>{
    //Todo faire la requete pour verifier si le mail et le mdp sont correct
    navigate('/ProductCreation')
  }
  
  const IntoCustomerAccount = () => {
    navigate('/CustomerCreateAccount')
  }

  return (
      <Login ReceiveData={ReceiveData} IntoCustomerAccount={IntoCustomerAccount}/>
  )
}

export default LoginPage

