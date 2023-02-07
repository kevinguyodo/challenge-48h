import Login from '../components/Login'
import {useNavigate} from 'react-router-dom'
import { getData, postData } from '../CRUD/generic'

function LoginPage() {
  const navigate = useNavigate()

  const ReceiveData = (mail,psw) =>{
    console.log(mail,psw)
    //Todo faire la requete pour verifier si le mail et le mdp sont correct
    id = postData('login',JSON.stringify({mail, psw}))
    console.log(id)

    navigate('/HomePage')
  }
  
  const IntoCustomerAccount = () => {
    navigate('/CustomerCreateAccount')
  }

  return (
      <Login ReceiveData={ReceiveData} IntoCustomerAccount={IntoCustomerAccount}/>
  )
}
export default LoginPage

