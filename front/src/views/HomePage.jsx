import HomePage from '../components/HomePage';
import TopBar from '../components/TopBar';
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const IntoItemPage = (Data) => {
        console.log(Data)
        navigate('/ItemPage', { state : {Data : Data}})
    }
        return (
            <div>
            <TopBar/>
            <HomePage IntoItemPage={IntoItemPage}/>
            </div>
        )
}
export default Home 