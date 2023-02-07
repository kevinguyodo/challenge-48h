import SellerCreateAccount from '../components/SellerCreateAccount'
import {useNavigate} from 'react-router-dom'
function CreateAccount() {
  const navigate = useNavigate()
  const IntoConnection = () =>{
    navigate('/login')
  }
  const IntoCustomer = () =>{
    navigate('/CustomerCreateAccount')
  }
  const IntoSite = (Surname,Name,Email,PSW) =>{
    //todo api check
    navigate('/HomePage')
  }
  return (
      <div>
        <SellerCreateAccount IntoConnection={IntoConnection} IntoCustomer={IntoCustomer} IntoSite={IntoSite}/>
      </div>
  )
}

export default CreateAccount

