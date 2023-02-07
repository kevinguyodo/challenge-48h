import Logo from "../assets/Logoblack.svg";
import Loupe from "../assets/loupe.png";
import PP from "../assets/pp.svg";
import Item from "./Item";
const HomePage = (props) => {
  const IntoViews = (Data) => {
    props.IntoItemPage(Data);
  };
  //todo introduire l'api et faire une requete pour recuperer les produits
  //todo faire une boucle pour afficher les produits
  const data = {
    nom: "souris",
    price: 10,
    Constructor: "logitech",
    description:
      "sàjjgjàgniodo)doni^jdergjeo)=gnz oozefn pizçf bz àizepfà çzuio zçà=fhjzeuç_zbefipuzuy_çefbuipuiznfiupzuefzneifuzfnzeoijf ipzeuf çàzefio ziejr oizeujioécjçrz'hioczunipufhidçàg hbdkjvi ebgpçdjhg jlhsçà fhbspiof jhzboufhjpdhg àrhbbkjm rj gà$dgnkmelrigdnrlg oirekjgjerp gjerôj",
  };
  return (
    <div className="HomePage-page">
      <input type="checkbox" className="HomePage-CheckBox" />
      <h2>DERNIERS PRODUITS</h2>
      <section className="HomePage-Products">
        <Item data={data} IntoViews={IntoViews} />
      </section>
      <h2>NOS VENDEURS</h2>
    </div>
  );
};
export default HomePage;
