export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white">About TaskFlow</h1>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        TaskFlow is a small task management app built as a React final
        project. It demonstrates components, props, hooks (useState,
        useEffect, useContext, and a custom useLocalStorage hook), React
        Router navigation, and Tailwind CSS styling — including a
        light/dark theme toggle — all in one lightweight app.
      </p>
      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
        Tasks and your theme preference are saved to your browser's local
        storage, so they'll still be there the next time you visit.
      </p>
    </div>
  );
}
