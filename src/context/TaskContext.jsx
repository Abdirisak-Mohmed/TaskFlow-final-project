import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

export function useTasks() {
  return useContext(TaskContext);
}

function createTask(taskInput) {
  return {
    id: Date.now(),
    title: taskInput.title.trim(),
    description: taskInput.description?.trim() || "",
    subject: taskInput.subject?.trim() || "General",
    priority: taskInput.priority || "Medium",
    dueDate: taskInput.dueDate || "",
    time: taskInput.time || "",
    done: false,
    createdAt: new Date().toISOString(),
  };
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("taskflow-tasks", []);

  const addTask = (taskInput) => {
    const newTask = createTask(taskInput);
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const value = { tasks, addTask, toggleTask, deleteTask };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
