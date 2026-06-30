import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// Reusable component: link style logic below is reused for every NavLink.
export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  const linkClasses = ({ isActive }) =>
    `px-3 py-2 rounded-lg font-medium transition-colors ${isActive
      ? "bg-white text-indigo-700"
      : "text-white hover:bg-indigo-500"
    }`;

  return (
    <nav className="bg-indigo-600 dark:bg-indigo-900 shadow-md transition-colors">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="TaskFlow logo" className="h-9 w-9 rounded-lg" />
          <span className="text-white text-xl font-bold">TaskFlow</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <NavLink to="/" end className={linkClasses}>
            Home
          </NavLink>
          <NavLink to="/tasks" className={linkClasses}>
            Tasks
          </NavLink>
          <NavLink to="/about" className={linkClasses}>
            About
          </NavLink>
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="ml-1 px-3 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}
