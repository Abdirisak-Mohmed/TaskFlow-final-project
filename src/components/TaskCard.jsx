import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  Trash2,
} from "lucide-react";

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
    year: "numeric",
  });
};

const priorityStyles = {
  High: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  Medium: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Low: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
};

export default function TaskCard({ task, onToggle, onDelete }) {
  const dueValue = parseDueDate(task.dueDate);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isOverdue = !task.done && dueValue && dueValue < today;

  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm transition-all ${task.done
          ? "border-emerald-200 bg-emerald-50/70 dark:border-emerald-900/50 dark:bg-emerald-950/30"
          : isOverdue
            ? "border-rose-200 bg-rose-50/70 dark:border-rose-900/50 dark:bg-rose-950/20"
            : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800"
        }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className="mt-1 shrink-0 text-indigo-600"
          aria-label="Toggle task"
        >
          {task.done ? <CheckCircle2 size={20} /> : <Circle size={20} />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={`font-semibold ${task.done
                  ? "text-slate-500 line-through dark:text-slate-400"
                  : "text-slate-800 dark:text-slate-100"
                }`}
            >
              {task.title}
            </h3>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityStyles[task.priority] || priorityStyles.Medium}`}
            >
              {task.priority || "Medium"}
            </span>
            {isOverdue && (
              <span className="rounded-full bg-rose-100 px-2.5 py-1 text-xs font-medium text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
                Overdue
              </span>
            )}
          </div>

          {task.description && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              {task.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400">
            {task.subject && (
              <span className="inline-flex items-center gap-1">
                <BookOpen size={14} />
                {task.subject}
              </span>
            )}
            {task.dueDate && (
              <span className="inline-flex items-center gap-1">
                <CalendarDays size={14} />
                {formatDate(task.dueDate)}
              </span>
            )}
            {task.time && (
              <span className="inline-flex items-center gap-1">
                <Clock3 size={14} />
                {task.time}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => onDelete(task.id)}
          className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-rose-500 dark:hover:bg-slate-700"
          aria-label="Delete task"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}
