import { useState } from "react";
import {
  BookOpen,
  CalendarDays,
  Clock3,
  Flag,
  Plus,
  Sparkles,
} from "lucide-react";

const initialForm = {
  title: "",
  description: "",
  subject: "General",
  priority: "Medium",
  dueDate: "",
  time: "",
};

export default function TaskForm({ onAdd }) {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onAdd({
      title: formData.title,
      description: formData.description,
      subject: formData.subject,
      priority: formData.priority,
      dueDate: formData.dueDate,
      time: formData.time,
    });

    setFormData(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-xl bg-indigo-100 p-2 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
          <Sparkles size={18} />
        </div>
        <div>
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            New university task
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Add coursework, deadlines, and study notes in one place.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Task title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Submit calculus assignment"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>

        <div className="lg:col-span-2">
          <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Add details, notes, or what needs to be done..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <BookOpen size={16} />
            Subject / course
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Computer Science"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Flag size={16} />
            Priority
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <CalendarDays size={16} />
            Due date
          </label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>

        <div>
          <label className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <Clock3 size={16} />
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
        >
          <Plus size={18} />
          Add task
        </button>
      </div>
    </form>
  );
}
