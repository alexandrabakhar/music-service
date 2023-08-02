import { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
    // с помощью хука будем хранить данные о текущей теме
    const currentTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(currentTheme || dark);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
