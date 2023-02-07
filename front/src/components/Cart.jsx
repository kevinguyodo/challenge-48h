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
                        <p1>MON PANIER :</p1>
                        <section className="Cart-Center">
                                <div className="Cart-Center-Left">

                                </div>
                                <div className="Cart-Center-Right">
                                        <div className="Cart-Center-Top"></div>
                                        <div className="Cart-Center-Bottom"></div>

                                </div>
                        </section>
                </div>
        )
}
export default Cart