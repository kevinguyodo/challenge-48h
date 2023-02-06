import { useState } from 'react'
import Logo from '../assets/img/logoV1.png';

function Login() {
  const [Name, SetName] = useState("");
  const [Surname, SetSurname] = useState("");
  const [Mail, SetMail] = useState("");
  const [PSW1, SetPassWord1] = useState("");

  return (
    <div className='CreateAccount-back'>
      <img className='CreateAccount-img' src={Logo} alt="white logo" />
      <section className='CreateAccount-Middle'>
        <h1 className='CreateAccount-title'>Client</h1>
        <section2 className='Create-forms'>
          <p>Email</p>
          <input type="email" placeholder='Entrer votre Email' onChange={(e) => SetMail(e.target.value)}/>
          <p className='Create-right'>Prénom</p>
          <input type="text" placeholder='Entrer votre Prénom' className='Create-right' onChange={(e) => SetSurname(e.target.value)}/>
          <p className='Create-left'>Nom</p>
          <input type="text" placeholder='Entrer votre Nom'className='Create-left' onChange={(e) => SetName(e.target.value)}/>
          <p>Mot de passe </p>
          <input type="password" placeholder='Entrer votre Mot de passe ' onChange={(e) => SetPassWord1(e.target.value)}/>
          <input type="password" placeholder='Entrer votre Mot de passe ' onChange={(e) => SetPassWord1(e.target.value)}/>
          <form><button className='' onClick={console.log("hi")}></button> </form>
          <form><button className='' onClick={console.log("hi")}></button> </form>
          <form><button className='' onClick={console.log("hi")}></button> </form>
        </section2>
      </section>
    </div>
  )
}

export default Login
