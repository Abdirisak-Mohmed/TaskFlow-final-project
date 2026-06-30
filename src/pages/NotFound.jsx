import { Link, useLocation } from "react-router-dom";

// This page renders whenever the URL doesn't match any defined <Route>.
// It's wired up in App.jsx with <Route path="*" element={<NotFound />} />
export default function NotFound() {
  const location = useLocation();

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-4">
      <p className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">
        404
      </p>
      <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
        Page not found
      </h1>
      <p className="text-slate-500 dark:text-slate-400">
        There's nothing here at{" "}
        <code className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">
          {location.pathname}
        </code>
      </p>
      <Link
        to="/"
        className="inline-block mt-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
