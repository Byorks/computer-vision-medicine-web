import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

export default function ThemeToggle() {
  // Definindo o valor inicial do theme
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-colors-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <button className="" onClick={toggleTheme} aria-label="Alterar tema">
        {theme === "dark" ? <Sun></Sun> : <Moon></Moon>}
      </button>
    </>
  );
}
