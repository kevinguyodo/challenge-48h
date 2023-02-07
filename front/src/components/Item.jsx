import PP from '../assets/pp.svg';
const Item = (props) => {

    return(
        <form><button className='Item-Button' onClick={() => props.IntoViews(props.data)}><section className="Item-Bloc">
            <img href={PP} alt="" />
            <p className='Item-Name'>{props.data.nom}</p>
            <p className='Item-Constructor'>{props.data.Constructor}</p>
            <p className='Item-Price'>{props.data.price + " € "}</p>
        </section></button></form>
    )
}

export default Item