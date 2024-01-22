import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="homepage-container">
            <div className="intro-container">
                <h2>Welcome to Quizzard</h2>
                <p>
                    Welcome to Quizzard, your go-to platform for fun and
                    engaging quizzes. Our app, built with React, offers a wide
                    range of quizzes on various topics. Whether you're looking
                    to test your knowledge or simply pass the time, Quizzard has
                    something for everyone. So why wait? Click 'Play a Quiz' and
                    start your quizzing journey today!
                </p>
                <div className="btn-container">
                    <button
                        className="play-btn"
                        onClick={() => navigate("/quiz")}>
                        Play a Quiz
                    </button>
                    <button className="inf0-btn">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
