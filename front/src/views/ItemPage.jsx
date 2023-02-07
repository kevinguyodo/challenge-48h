import Item from '../components/ItemPage'
import TopBar from '../components/TopBar'
import { useLocation } from 'react-router-dom';
const ItemPage = () => {
  const {state} = useLocation()
  return (
    <div>
      <TopBar/>
      <Item data={state.Data}/>
    </div>  
  )
}

export default ItemPage

