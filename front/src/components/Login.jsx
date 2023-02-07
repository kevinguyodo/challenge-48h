import { useState } from "react";

function Login(props) {
  const [Email, setEmail] = useState("");
  const [psw, setPSW] = useState("");
  return (
    <div className='white'>
      <div className='Texte'>
        <p1>MAIL :</p1>
        <input className='texte-mail' type="email" placeholder='entrer votre mail' onChange={(e) => setEmail(e.target.value)}/>
        <p1>MOT DE PASSE :</p1>
        <input className='texte-mdp' type="password" placeholder='entrer votre mdp' onChange={(e) => setPSW(e.target.value)}/>
          <div className='Button'>
            <form><button className='button1' onClick={() => props.ReceiveData(Email,psw)}><p>Connexion</p></button></form>
            <form><button className='button2' onClick={() => props.IntoCustomerAccount()}><p>Inscription</p></button></form>
              <div className='Logo'>
          </div>      
        </div>
      </div>
    </div>
    );
  } 
export default Login;
