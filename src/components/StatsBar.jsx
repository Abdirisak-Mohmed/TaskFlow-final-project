import {
  AlertTriangle,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
} from "lucide-react";

export default function StatsBar({ total, done, pending, overdue, upcoming }) {
  const stats = [
    {
      label: "Total tasks",
      value: total,
      icon: ClipboardList,
      color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    },
    {
      label: "Completed",
      value: done,
      icon: CheckCircle2,
      color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    },
    {
      label: "Pending",
      value: pending,
      icon: CalendarClock,
      color: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    },
    {
      label: "Overdue",
      value: overdue,
      icon: AlertTriangle,
      color: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800"
          >
            <div className={`inline-flex rounded-xl p-2 ${stat.color}`}>
              <Icon size={18} />
            </div>
            <p className="mt-4 text-2xl font-semibold text-slate-800 dark:text-slate-100">
              {stat.value}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
