import Logo from '../assets/Logo.svg';

function LeftBar() {
  const [count, setCount] = useState(0)

  return (
    <div className='SideBar'>
      <img src={Logo} alt="Logo of the web site , a computer" />
    </div>
  )
}

export default LeftBar
