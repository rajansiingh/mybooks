import { Link } from 'react-router-dom';
import logo from '../assets/MyBook.png';
const Header = () => (
  <header className="fixed-header">
      <Link to='/'><img src={logo} alt="MyBooks" /></Link>
  </header>
)
export default Header;