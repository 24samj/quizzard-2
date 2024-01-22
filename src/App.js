import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes className="App">
                <Route path="/" element={<HomePage />} />
                <Route path="quiz" element={<QuizPage />} />
            </Routes>
        </>
    );
}

export default App;
