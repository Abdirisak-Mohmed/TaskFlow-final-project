import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

const parseDueDate = (value) => {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

export default function Tasks() {
  const { tasks, addTask, toggleTask, deleteTask } = useTasks();
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("dueDate");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isOverdue = (task) => {
    const dueValue = parseDueDate(task.dueDate);
    return !task.done && dueValue && dueValue < today;
  };

  const sortedTasks = [...tasks]
    .filter((task) => {
      if (filter === "done") return task.done;
      if (filter === "pending") return !task.done;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "priority") {
        const priorityOrder = { High: 3, Medium: 2, Low: 1 };
        return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
      }

      if (sortBy === "createdAt") {
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
      }

      const aOverdue = isOverdue(a);
      const bOverdue = isOverdue(b);

      if (aOverdue !== bOverdue) return aOverdue ? -1 : 1;

      const aDate = parseDueDate(a.dueDate);
      const bDate = parseDueDate(b.dueDate);

      if (!aDate && !bDate) return 0;
      if (!aDate) return 1;
      if (!bDate) return -1;
      return aDate - bDate;
    });

  const filterBtn = (key, label) => (
    <button
      onClick={() => setFilter(key)}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${filter === key
          ? "bg-indigo-600 text-white"
          : "border border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Your task board
        </h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          Manage academic tasks with due dates, priorities, and notes.
        </p>
      </div>

      <TaskForm onAdd={addTask} />

      <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filterBtn("all", "All")}
          {filterBtn("pending", "Pending")}
          {filterBtn("done", "Completed")}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
        >
          <option value="dueDate">Sort by due date</option>
          <option value="priority">Sort by priority</option>
          <option value="createdAt">Sort by newest</option>
        </select>
      </div>

      <div className="mt-6 space-y-3">
        {sortedTasks.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
            Nothing here yet. Add your first university task.
          </p>
        ) : (
          sortedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}
