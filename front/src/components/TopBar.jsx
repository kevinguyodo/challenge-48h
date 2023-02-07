import Logo from '../assets/logoblack.svg';
import Loupe from '../assets/loupe.png';
import PP from '../assets/pp.svg';
import HomePage from '../views/HomePage';
import {useNavigate} from 'react-router-dom'
function TopBar(){
    const ReturnButton = () => {
        return(
            <HomePage/>
        )
    }
    return (
        <section className="TopBar-Top">
           <form><button className='Top-ReveniraLacceuillButton' onClick={() => ReturnButton()}><img src={Logo} alt="Logo" className="TopBar-Logo" /></button></form>
            <p>YMazone</p>
            <form><button className='TopBar-AddButton'>+</button></form>    
            <div className='TopBar-RechercheBar'>
                <img src={Loupe} alt="loupe logo" />
                <input type="text" className='TopBar-SearchBar'/>
            </div>
            <img src={PP} alt="profile image" /> 
        </section>
    )
}

export default TopBar