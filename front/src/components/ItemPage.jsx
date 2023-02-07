import PP from '../assets/pp.svg';

const ItemPage = (props) => {
    console.log(props)
    return(
        <section className="ItemPage-Bloc">
            <div className='ItemPage-LeftBloc'></div>
            <div className='ItemPage-RightBloc'>
                <div className='dis'>
                    <div className='ItemPage-RightBloc-left'></div>
                    <div className='ItemPage-RightBloc-rig'></div>  
                </div>
                <div className='ItemPage-RightBloc-bot'></div>
                

            </div>
        </section>
    )
}

export default ItemPage