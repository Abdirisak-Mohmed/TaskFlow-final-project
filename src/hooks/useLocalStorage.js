import { useState, useEffect } from "react";

// CUSTOM HOOK: wraps useState + useEffect into one reusable hook.
// Any component/context can call useLocalStorage("key", defaultValue)
// and get back state that automatically persists.
export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
