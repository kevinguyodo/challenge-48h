import CustomerCreateAccount from '../components/CustomerCreateAccount'
import {useNavigate} from 'react-router-dom'
function CreateAccount() {
  const navigate = useNavigate()
  const IntoConnection = () =>{
    navigate('login')
  }
  const IntoSeller = () =>{
    navigate('/')
  }
  const IntoSite = () =>{
    navigate('HomePage')
  }
  return (
      <div>
        <CustomerCreateAccount IntoConnection={IntoConnection} IntoSeller={IntoSeller} IntoSite={IntoSite}/>
      </div>
  )
}

export default CreateAccount

