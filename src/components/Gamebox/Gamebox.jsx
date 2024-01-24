import "./Gamebox.css";

const Gamebox = ({
    currentQuestionNumber,
    questionSet,
    selectedOption,
    setSelectedOption,
    handleQuestionChange,
    timeLeft,
}) => {
    return (
        <div className="game-container">
            <div className="current-question">
                Q{currentQuestionNumber + 1}.{" "}
                {questionSet.questions[currentQuestionNumber].question}
            </div>
            <h2>Options:</h2>
            <div className="options-container" key={currentQuestionNumber}>
                {questionSet.questions[currentQuestionNumber].options.map(
                    (option, index) => (
                        <label
                            className={
                                selectedOption === `option${index + 1}`
                                    ? "selected"
                                    : ""
                            }>
                            <input
                                name="option"
                                type="radio"
                                value={`option${index + 1}`}
                                onChange={(e) =>
                                    setSelectedOption(e.target.value)
                                }
                            />
                            <span>{option}</span>
                        </label>
                    )
                )}
            </div>
            <div className="game-footer">
                <button onClick={handleQuestionChange}>
                    {currentQuestionNumber < 4 ? "Next" : "Submit"}
                </button>
                <h3>{currentQuestionNumber + 1}/5</h3>
            </div>
            <div
                className="timebar"
                style={{ width: `${(timeLeft / 30000) * 100}%` }}></div>
        </div>
    );
};

export default Gamebox;
