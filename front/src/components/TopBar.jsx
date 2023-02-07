import Logo from '../assets/Logoblack.svg';
import Loupe from '../assets/loupe.png';
import PP from '../assets/pp.svg';
import HomePage from '../views/HomePage';
import ProfilePage from '../views/ProfilePage';
import {useNavigate} from 'react-router-dom'




function TopBar(){
    const navigate = useNavigate()

    const ReturnButton = () => {
        return(
            navigate('/HomePage')
        )
    }

    const goProfile = () => {
        return(
            navigate('/ProfilePage')
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
          

            <form><button className='Top-Profile' onClick={() => goProfile()}><img src={PP} alt="Logo" /></button></form>

        </section>
    )

   
}

export default TopBar