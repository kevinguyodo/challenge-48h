import ProfilePage from '../components/ProfilePage'
import { useNavigate } from 'react-router-dom';
function profilePage() {
  const navigate = useNavigate()


  return (
      <ProfilePage />
  )
}

export default profilePage

