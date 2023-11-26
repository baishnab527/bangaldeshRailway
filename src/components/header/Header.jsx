import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
     
     <header className="Header shadow">
        <div className="container header-container">

           <div className="logo-content">
            <img src="https://eticket.railway.gov.bd/v2/assets/img/home/bangladesh-railway.png" alt="Railway logo" />
            <h1>Bangladesh Railway</h1>
           </div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/information">Train Infromation</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
     </header>

    </>
  );
}

export default Header;