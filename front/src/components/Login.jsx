import { useState } from 'react'

function Login(props) {
  const [Email, setEmail] = useState("");
  const [psw, setPSW] = useState("");
  return (
    <form>
    <div className='white'>
      <div className='Texte'>
        <p1>MAIL :</p1>
        <input className='texte-mail' type="email" placeholder='entrer votre mail' onChange={(e) => setEmail(e.target.value)}/>
        <p1>MOT DE PASSE :</p1>
        <input className='texte-mdp' type="password" placeholder='entrer votre mdp' onChange={(e) => setPSW(e.target.value)}/>
          <div className='Button'>
            <button className='button1' onClick={() => props.ReceiveData(Email,psw)}><p>Connexion</p></button>
            <button className='button2' onClick={() => props.IntoCustomerAccount}><p>Inscription</p></button>
              <div className='Logo'>
          </div>      
        </div>
      </div>
    </div>
    </form>
  )
}

export default Login
