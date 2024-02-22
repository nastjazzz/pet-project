import { Link, Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";

import { MainPageLazy } from "./pages/MainPage/MainPage.lazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";

import { classNames } from "./helpers/classNames/classNames";

import "./styles/index.scss";

enum Themes {
    light = "light",
    dark = "dark",
}

const App = () => {
    const [theme, setTheme] = useState<Themes>(Themes.light);

    const toggleTheme = () => {
        setTheme(theme === Themes.light ? Themes.dark : Themes.light);
    };

    return (
        <div className={classNames("app", {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Сменить тему</button>
            </div>
            <Link to={"/"}>main page</Link>
            <Link to={"/about"}>about page</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={"/"} element={<MainPageLazy />} />
                    <Route path={"/about"} element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
