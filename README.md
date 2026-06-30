# TaskFlow

A simple task manager built with React, React Router, and Tailwind CSS.

## Features (mapped to requirements)
- **5 components**: Navbar, TaskCard, TaskForm, StatsBar, Footer
- **Props**: TaskCard/TaskForm/StatsBar/Footer all receive and use props
- **useState**: task form inputs, filter state, tasks array, theme value
- **useEffect**: persists tasks/theme to localStorage, toggles the `dark` class on `<html>`
- **useContext**: `TaskContext` (tasks) and `ThemeContext` (light/dark) share data across pages with zero prop drilling
- **Custom hook**: `useLocalStorage` (in `src/hooks`) wraps useState+useEffect into reusable persisted state, used by both contexts
- **React Router**: Home `/`, Tasks `/tasks`, About `/about`, nav via `NavLink`
- **Tailwind CSS**: all styling, fully responsive, with a light/dark theme toggle in the Navbar

## Run locally
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```

## Deploy (free options)
- **Vercel**: `npm i -g vercel` then `vercel` in this folder, or import the GitHub repo at vercel.com
- **Netlify**: drag the `dist/` folder onto app.netlify.com/drop, or connect the GitHub repo
- **GitHub Pages**: install `gh-pages` package, add a `deploy` script, run `npm run deploy`

## Push to GitHub
```bash
git init
git add .
git commit -m "TaskFlow final project"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
