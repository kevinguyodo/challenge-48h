import LeftTopIMG from '../assets/LeftTopCornerimg.png';
import Logo from '../assets/Logo.svg';

const  MainpageComp = (props) => {

  return (

    <div className="MainPage-Flex">
      <div className='MainPage-BlackSquare'>
        <img className='MainPage-LeftTopIMG' src={LeftTopIMG} alt="Image with a empty container who drop objects" />
        <img className='MainPage-Logo' src={Logo} alt="Image with a empty container who drop objects" />
        <section className='MainPage-Txt'>
          <p className='MainPage-SiteName'>YMazone</p>
          <p className='MainPage-paragraf'>Vos produits en un clic</p>
        </section>
        <form><button  className='MainPage-FirstButton' type="submit" onClick={() => props.ToCustomerCreateAccount()}>Inscription Client</button></form>
        <form><button  className='MainPage-SecondButton' type="submit" onClick={() => props.ToSellerCreateAccount()}>Inscription Vendeur</button></form>
      </div>
      <div className='MainPage-WhiteSquare'>
        <p className='MainPage-WhitePartTxt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non, dolor a repellat placeat quae accusantium molestias itaque natus quod dolores soluta voluptates alias eveniet iusto! Eligendi, unde? Quas, expedita.</p>
      <form><button className='MainPage-Button' type="submit" onClick={() => props.ToLogin()}>Se connecter</button></form>
      </div>
    </div>

  )
}

export default MainpageComp
