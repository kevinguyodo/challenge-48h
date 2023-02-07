import { useState } from 'react'
import Logo from '../assets/img/logoV1.png';

function Login(props) {
  const [Name, SetName] = useState("");
  const [Surname, SetSurname] = useState("");
  const [Mail, SetMail] = useState("");
  const [PSW1, SetPassWord1] = useState("");
  const [PSW2, SetPassWord2] = useState("");
  console.log("peingpkjengpoier bpiengio^erpigrzkjgioêrgjrbg)àergpiue'rçà=gjneirghp")
  const style = 'Create-Red'
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
          <p>Nom</p>
          <input type="text" placeholder='Entrer votre Nom' onChange={(e) => SetName(e.target.value)}/>
          <p>Mot de passe </p>
          <input type="password" placeholder='Entrer votre Mot de passe ' className={style} onChange={(e) => SetPassWord1(e.target.value)}/>
          <input type="password" placeholder='Confirmer votre mot de passe' className={style} onChange={(e) => SetPassWord2(e.target.value)}/>
          <form><button className='' onClick={() => props.IntoSite()}>Crée un compte</button> </form>
          <form><button className='' onClick={() => props.IntoSeller()}>Proffesionel ? venez un compte de vendeur</button> </form>
          <form><button className='' onClick={() => props.IntoConnection()}>Se connecter</button> </form>
        </section2>
      </section>
    </div>
  )
}

export default Login
