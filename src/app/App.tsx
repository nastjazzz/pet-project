import { Link } from "react-router-dom";

import { AppRouter } from "app/providers/router/";
import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared/";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";

const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <div>
                <button onClick={toggleTheme}>Сменить тему</button>
            </div>
            <Navbar />
            <AppRouter />
        </div>
    );
};

export default App;
