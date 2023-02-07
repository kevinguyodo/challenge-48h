import PP from '../assets/pp.svg';
const Item = (props) => {
    return(
        <section className="Item-Bloc">
            <img src={PP} alt="" />
            <p className='Item-Name'>{props.data.nom}</p>
            <p className='Item-Constructor'>{props.data.Constructor}</p>
            <p className='Item-Price'>{props.data.price + " € "}</p>
        </section>
    )
}

export default Item