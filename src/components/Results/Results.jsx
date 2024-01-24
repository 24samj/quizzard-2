import { useNavigate } from "react-router-dom";
import "./Results.css";

const Results = ({
    currentScore,
    setCurrentScore,
    setCurrentQuestionNumber,
    setQuizSubmitted,
    setGameStarted,
}) => {
    const navigate = useNavigate();
    const handleReset = () => {
        setCurrentQuestionNumber(0);
        setCurrentScore(0);
        setQuizSubmitted(false);
        setGameStarted(true);
    };
    return (
        <div className="results-container">
            <h1 className="results-header">Results</h1>
            <h3>
                {currentScore < 3
                    ? "Better luck next time!"
                    : currentScore > 3
                    ? "Well Done!"
                    : "Nice try!"}
            </h3>
            <div className="score-container">
                <span>Your Score:</span>
                <h1>{currentScore}/5</h1>
            </div>
            <div className="btns-container">
                <button onClick={() => handleReset()}>Play Again</button>
                <button onClick={() => navigate("/")}>Go Back Home</button>
            </div>
        </div>
    );
};

export default Results;
