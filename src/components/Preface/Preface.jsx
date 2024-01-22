import "./Preface.css";

const Preface = ({ setGameStarted }) => {
    return (
        <div className="preface-container">
            <p>
                Get ready for the quiz! You'll be presented with 5 questions,
                each with a time limit of 30 seconds. Test your knowledge and
                see how many you can get right. Good luck!
            </p>
            <h3>Rules:</h3>
            <ul>
                <li>Each question has a time limit of 30 seconds.</li>
                <li>The game consists of 5 questions in total.</li>
                <li>
                    Answer as many questions correctly as you can to score
                    points.
                </li>
                <li>No cheating or use of external resources.</li>
            </ul>
            <div className="begin-btn-container">
                <button onClick={() => setGameStarted(true)}>Begin</button>
            </div>
        </div>
    );
};

export default Preface;
