import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.body.classList.add("light");
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.classList.replace("light", "dark");
        } else {
            setTheme("light");
            document.body.classList.replace("dark", "light");
        }
    };

    return (
        <>
            <Navbar toggleTheme={toggleTheme} />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="quiz" element={<QuizPage />} />
            </Routes>
        </>
    );
}

export default App;
