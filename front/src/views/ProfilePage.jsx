import ProfilePage from '../components/ProfilePage'
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
function profilePage() {
  const navigate = useNavigate()


  return (
    <div>
    <TopBar/>
    <ProfilePage/>
    </div>
  )
}

export default profilePage

