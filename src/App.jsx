import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col transition-colors">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer year={new Date().getFullYear()} />
          </div>
        </BrowserRouter>
      </TaskProvider>
    </ThemeProvider>
  );
}
