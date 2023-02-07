import Logo from '../assets/Logoblack.svg';
import Loupe from '../assets/loupe.png';
import PP from '../assets/pp.svg';
import Item from './Item';
const HomePage = () => {

        //todo introduire l'api et faire une requete pour recuperer les produits
        //todo faire une boucle pour afficher les produits
        const data = {
                nom: "souris",
                price: 10,
                Constructor: "logitech",
                image : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.20minutes.fr%2Fsociete%2F3321527-20220706-panda-o-vient-rumeur-selon-laquelle-animal-existerait&psig=AOvVaw2Nu3xdFrrXDrHxxijVG4NN&ust=1675834987696000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjjlPvZgv0CFQAAAAAdAAAAABAE"
        }
        return (
                <div className="HomePage-page">
                        {/* <section className="HomePage-Top">
                                <img src={Logo} alt="Logo" className="HomePage-Logo" />
                                <p>YMazone</p>
                                <form><button className='HomePage-AddButton'>+</button></form>
                                <div className='HomePage-RechercheBar'>
                                        <img src={Loupe} alt="loupe logo" />
                                        <input type="text" className='HomePage-SearchBar'/>
                                </div>
                                <img src={PP} alt="profile image" /> 
                        </section> */}
                        <input type="checkbox" className='HomePage-CheckBox'/>
                        <h2>DERNIERS PRODUITS</h2>
                        <section className="HomePage-Products">
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                            <Item data={data}/>
                        </section>
                        <h2>NOS VENDEURS</h2>
                </div>
        )
}
export default HomePage
//{data.map((tweet) => <Tweet auteur= {tweet.pseudo} adresse = {tweet.adresse} text = {tweet.text} lien = {tweet.lien} image = {tweet.image} date = {tweet.date}/>)}    