import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/clients">Clientes</Link>
    </nav>
);

export default Navbar;
