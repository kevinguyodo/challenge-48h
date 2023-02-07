import Logo from '../assets/img/logoV1.png';
import { useState } from 'react'
      // {/* <img src="../assets/img/logoV1.png"></img> */}

function AddProductPage() {
  // const [count, setCount] = useState(0)

  return (
    <div className='AddProduct-back'>
       <img className='AddProduct-img' src={Logo} alt="white logo" />
       <form><button className='' onClick={console.log("hi")}>Ajouter ce produit au marché</button> </form>
       <input className='AddProduct-EnterName' type="text" placeholder='Entrer votre nom de produit'/>
    </div>
  )
}

export default AddProductPage
