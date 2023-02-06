import LeftTopIMG from '../assets/LeftTopCornerimg.png';
import Logo from '../assets/Logo.svg';

function MainpageComp() {

  return (
    <div className="MainPage-Flex">
      <div className='MainPage-BlackSquare'>
        <img className='MainPage-LeftTopIMG' src={LeftTopIMG} alt="Image with a empty container who drop objects" />
        <img className='MainPage-Logo' src={Logo} alt="Image with a empty container who drop objects" />
        <section className='MainPage-Txt'>
          <p className='MainPage-SiteName'>YMazone</p>
          <p className='MainPage-paragraf'>Vos produits en un clic</p>
        </section>
        <button  className='MainPage-FirstButton'>Inscription Client</button>
        <button  className='MainPage-SecondButton'>Inscription Vendeur</button>
      </div>
      <div className='MainPage-WhiteSquare'>
        <p className='MainPage-WhitePartTxt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum non, dolor a repellat placeat quae accusantium molestias itaque natus quod dolores soluta voluptates alias eveniet iusto! Eligendi, unde? Quas, expedita.</p>
      <button className='MainPage-Button'>Se connecter</button>
      </div>
    </div>
    

  )
}

export default MainpageComp
