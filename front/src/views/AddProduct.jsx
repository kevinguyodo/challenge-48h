import AddProduct from '../components/AddProduct'

import { useNavigate } from 'react-router-dom';
function addProduct() {
  const navigate = useNavigate()

  const navHome = () =>{
    //Todo faire la requete pour verifier si le mail et le mdp sont correct
    navigate('/HomePage')
  }




  return (
    <AddProduct navHome={navHome}/>
)

 



}

export default addProduct