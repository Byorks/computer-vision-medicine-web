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
      <button
        className="p-2 rounded-lg  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={theme === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"}
        onClick={toggleTheme}
        title={theme === "dark" ? "Tema claro" : "Tema escuro"}
      >
        {theme === "dark" ? (
          <Sun aria-hidden="true" />
        ) : (
          <Moon aria-hidden="true" />
        )}
      </button>
    </>
  );
}
