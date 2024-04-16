import Logo from '../Assets/Logo.png'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent text-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} style={{ marginLeft: '2rem' }} alt="Carbex Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Footprint Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/marketplace">Market Place</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/details">Blog</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
