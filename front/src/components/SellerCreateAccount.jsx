import { useState } from 'react'
import Logo from '../assets/img/logoV1.png';

function Login(props) {
  const [Name, SetName] = useState("");
  const [Surname, SetSurname] = useState("");
  const [Mail, SetMail] = useState("");
  const [PSW1, SetPassWord1] = useState("");
  return (
    <div className='CreateAccount-back'>
      <img className='CreateAccount-img' src={Logo} alt="white logo" />
      <section className='CreateAccount-Middle'>
        <h1 className='CreateAccount-title'>Vendeur</h1>
        <section2 className='Create-forms'>
          <p>Email</p>
          <input type="email" placeholder='Entrer votre Email' onChange={(e) => SetMail(e.target.value)}/>
          <p>Prénom</p>
          <input type="text" placeholder='Entrer votre Prénom'onChange={(e) => SetSurname(e.target.value)}/>
          <p>Nom</p>
          <input type="text" placeholder='Entrer votre Nom' onChange={(e) => SetName(e.target.value)}/>
          <p>Mot de passe </p>
          <input type="password" placeholder='Entrer votre Mot de passe ' onChange={(e) => SetPassWord1(e.target.value)}/>
          <form><button className='Create-Button' onClick={() => props.IntoSite(Surname,Name,Mail,PSW1)}>Crée un compte</button> </form>
          <form><button className='Create-RedirecteButton' onClick={() => props.IntoCustomer()}>Crée un compte client</button> </form>
          <form><button className='Create-RedirecteButton' onClick={() => props.IntoConnection()}>Se connecter</button> </form>
        </section2>
      </section>
    </div>
  )
}

export default Login
