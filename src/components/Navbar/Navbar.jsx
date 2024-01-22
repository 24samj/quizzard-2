import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar-container">
            <h1 className="logo-text" onClick={() => navigate("/")}>
                Quizzard
            </h1>
        </div>
    );
};

export default Navbar;
