import { ArrowRight, Sparkles } from "lucide-react";
import { useTasks } from "../context/TaskContext";
import StatsBar from "../components/StatsBar";

const parseDueDate = (value) => {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const formatDate = (value) => {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en", {
    month: "short",
    day: "numeric",
  });
};

export default function Home() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const done = tasks.filter((task) => task.done).length;
  const pending = total - done;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const overdue = tasks.filter((task) => {
    const dueValue = parseDueDate(task.dueDate);
    return !task.done && dueValue && dueValue < today;
  }).length;

  const nextTasks = [...tasks]
    .filter((task) => !task.done && task.dueDate)
    .sort((a, b) => {
      const aDate = parseDueDate(a.dueDate);
      const bDate = parseDueDate(b.dueDate);
      if (!aDate || !bDate) return 0;
      return aDate - bDate;
    })
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800/90">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              <Sparkles size={16} />
              Study planner dashboard
            </div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Keep your semester organized.
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
              Track assignments, deadlines, and priorities without losing sight of what matters most.
            </p>
          </div>

          <a
            href="/tasks"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
          >
            Open task board
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="mt-6">
        <StatsBar total={total} done={done} pending={pending} overdue={overdue} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Upcoming deadlines
          </h2>
          {nextTasks.length === 0 ? (
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              No upcoming deadlines yet. Add a task to get started.
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              {nextTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-3 dark:border-slate-700"
                >
                  <div>
                    <p className="font-medium text-slate-800 dark:text-slate-100">
                      {task.title}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {task.subject} • {formatDate(task.dueDate)}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-indigo-600 dark:text-indigo-300">
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            Productivity tip
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Group your work by subject and priority so your week feels more manageable. The most important thing is to tackle deadlines before they become overdue.
          </p>
          <div className="mt-4 rounded-xl bg-slate-50 p-4 text-sm text-slate-600 dark:bg-slate-700 dark:text-slate-300">
            <p className="font-medium text-slate-800 dark:text-slate-100">
              Suggested habit:
            </p>
            <p className="mt-1">
              Review your deadlines every morning and mark the top 3 tasks for the day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
