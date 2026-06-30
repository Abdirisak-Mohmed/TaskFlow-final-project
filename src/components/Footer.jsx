export default function Footer({ year }) {
  return (
    <footer className="mt-10 py-6 border-t border-slate-200 dark:border-slate-700 text-center text-slate-400 dark:text-slate-500 text-sm transition-colors">
      © {year} TaskFlow — built with React & Tailwind
    </footer>
  );
}
