import PP from '../assets/pp.svg';

const ItemPage = (props) => {
    return(
        <section className="ItemPage-Bloc">
            <div className='ItemPage-LeftBloc'>
                <img className='Item-img' src={PP} alt="v" />
            </div>
            <div className='ItemPage-RightBloc'>
                <div className='dis'>
                    <div className='ItemPage-RightBloc-left'>{props.data.description}</div>
                    <div className='ItemPage-RightBloc-rig'></div>  
                </div>
                <div className='ItemPage-RightBloc-bot'>
                <div className='dis'>
                    <div className='ItemPage-coloms Item-twoToRight'>
                            <h1>Temps de livraison : .......</h1>
                            <div className='dis'>
                                <p className='Item-green'>{props.data.price}€</p>
                                <p className='Item-green'>En stock</p>
                            </div>
                    </div>
                    <div className='ItemPage-coloms'>
                        <button>Ajouter au panier</button>
                        <button>Achetez maintenant</button>
                    </div>
                </div>
                    
                </div>
            </div>
        </section>
    )
}

export default ItemPage