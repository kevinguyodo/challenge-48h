import CustomerCreateAccount from '../components/CustomerCreateAccount'
import {useNavigate} from 'react-router-dom'
function CreateAccount() {
  const navigate = useNavigate()
  const IntoConnection = () =>{
    navigate('/login')
  }
  const IntoSeller = () =>{
    navigate('/SellerCreateAccount')
  }
  const IntoSite = (Surname,Name,Email,PSW) =>{
    //todo api check
    navigate('/HomePage')
  }
  return (
      <div>
        <CustomerCreateAccount IntoConnection={IntoConnection} IntoSeller={IntoSeller} IntoSite={IntoSite}/>
      </div>
  )
}

export default CreateAccount

