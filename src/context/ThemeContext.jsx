import { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = createContext();

// useContext: lets any component read/toggle theme without prop drilling
export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  // custom hook again: theme state persists across reloads
  const [theme, setTheme] = useLocalStorage("taskflow-theme", "light");

  // useEffect: whenever theme changes, add/remove Tailwind's "dark" class
  // on <html>, which is what `darkMode: "class"` in tailwind.config.js reads
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
