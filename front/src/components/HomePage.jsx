import Logo from '../assets/Logoblack.svg';
import Loupe from '../assets/loupe.png';
import PP from '../assets/pp.svg';
import Item from './Item';
const HomePage = (props) => {
        const IntoViews = (Data) => {
                props.IntoItemPage(Data)
        }
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
                        <input type="checkbox" className='HomePage-CheckBox'/>
                        <h2>DERNIERS PRODUITS</h2>
                        <section className="HomePage-Products">
                            <Item data={data} IntoViews={IntoViews}/>
                            <Item data={data} IntoViews={IntoViews}/>
                            <Item data={data} IntoViews={IntoViews}/>
                            <Item data={data} IntoViews={IntoViews}/>
                            <Item data={data} IntoViews={IntoViews}/>
                        </section>
                        <h2>NOS VENDEURS</h2>
                </div>
        )
}
export default HomePage
//{data.map((tweet) => <Tweet auteur= {tweet.pseudo} adresse = {tweet.adresse} text = {tweet.text} lien = {tweet.lien} image = {tweet.image} date = {tweet.date}/>)}    