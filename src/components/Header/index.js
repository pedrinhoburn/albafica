import Logo from '../Logo';
import Menu from '../Menu';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Logo />
            <Menu />
        </div>
    );
}

export default Header