import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import { MainPage } from "pages/MainPage/";
import { AboutPage } from "pages/AboutPage/";
import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/";
import "./styles/index.scss";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Сменить тему</button>
            </div>
            <Link to={"/"}>main page</Link>
            <Link to={"/about"}>about page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"/about"} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
