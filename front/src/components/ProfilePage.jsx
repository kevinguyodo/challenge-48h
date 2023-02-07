import { useState } from "react";


function ProfilePage(props) {
  //todo recup info from database
  /* nom = "nom"; 
   mail = "mail"; 
   prenom = "prenom";
   adresse = "adresse";*/
  
  return (
  

    <div className='Profile-page'>
      <div className='info'>


        <div className="info-profile">
          <div className="texte">          
            <p>INFO PROFILE : </p>
            <div className="sous-texte">

            <p>lemail@gmail.com </p>
            <p>nom </p>
            <p>prenom </p>
            <p>l'adresse </p> 


            </div>
            
          </div>

        </div>
  
   <form><button className='profilepage-button1' /**TODO : aller vers la page panier  */><p>Votre panier</p></button></form>
   
   
   </div>
     </div>
       
          
    
 
  )
}

export default ProfilePage;
