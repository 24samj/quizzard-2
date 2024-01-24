import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ toggleTheme }) => {
    const navigate = useNavigate();
    return (
        <div className="navbar-container">
            <h1 className="logo-text" onClick={() => navigate("/")}>
                Quizzard
            </h1>
            <h1 className="theme-btn" onClick={() => toggleTheme()}>
                ☼
            </h1>
        </div>
    );
};

export default Navbar;
