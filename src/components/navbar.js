import Logo from '../Assets/Logo.png'
import {Link} from "react-router-dom"

const Navbar = (props) => {

    const {where} = props

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={Logo} style={{ marginLeft: '2rem',display:`${where?'none':''}` }} alt="Carbex Logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{margin:`${where?'auto':''}`,alignItems:'center'}}>
                            <li className="nav-item" >
                                <Link className="nav-link" style={{color:`${where?'#3BED96':'white'}`,fontWeight:'bold'}} aria-current="page" to="/">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:`${where?'#3BED96':'white'}`,fontWeight:'bold'}} to="/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:`${where?'#3BED96':'white'}`,fontWeight:'bold'}} to="/">Footprint Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:`${where?'#3BED96':'white'}`,fontWeight:'bold'}} to="/marketplace">Market Place</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{color:`${where?'#3BED96':'white'}`,fontWeight:'bold'}} to="/details">Blog</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
