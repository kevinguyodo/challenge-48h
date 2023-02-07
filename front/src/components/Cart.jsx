import Logo from '../assets/Logoblack.svg';
import Loupe from '../assets/loupe.png';
const Cart = () => {

        const data = {
                nom: "souris",
                price: 10,
                Constructor: "logitech",
        }
        return (
                <div className="Cart-page">
                        <section className="Cart-Top">
                                <img src={Logo} alt="Logo" className="Cart-Logo" />
                                <p>YMazone</p>
                                <form><button className='Cart-AddButton'>+</button></form>
                                <div className='Cart-RechercheBar'>
                                        <img src={Loupe} alt="loupe logo" />
                                </div>
                        </section>
                        <p class="MyCart">MON PANIER :</p>
                        <section className="Cart-Center">
                                <div className="Cart-Center-Left">

                                </div>
                                <div className="Cart-Center-Right">
                                        <div className="Cart-Center-Top">
                                        <div className="Button">
                                                <p class="Products">PRODUITS   .............................13.00€</p>
                                                <p class="Livraison">LIVRAISON   .............................2.00€</p>
                                                <p class="Underscores">_________________________</p>
                                                <p class="Total">TOTAL   ........................15.00€</p>
                                                   <form><button className='button1' onClick={() => props.ReceiveData(Email,psw)}><p>VALIDER</p></button></form>
                                        </div>
                                        </div>
                                        <div className="Cart-Center-Bottom">
                                                <p class="Details">Details : <br/><br/><br/>
                                                    Details : <br/><br/><br/>  
                                                    Details :</p>
                                        </div>

                                </div>
                        </section>
                </div>
        )
}
export default Cart