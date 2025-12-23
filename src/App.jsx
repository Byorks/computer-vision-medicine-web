import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Lucide Icons
import { ImageUp } from "lucide-react";

// CSS Style
import "./App.css";

import FileUpload from "./components/FileUpload";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <main className="w-full">
      <section className="w-full max-w-6xl flex flex-col gap-6 sm:gap-8">
        <div className="w-full">
          <ThemeToggle></ThemeToggle>
        </div>

        <div className="w-full flex justify-center mb-4">
          <h1 className="text-center logo loader-scan"><span>Computer Vision Medicine</span></h1>
        </div>

        <FileUpload></FileUpload>
      </section>
    </main>
  );
}
// ** To-do **
// Fazer funcionalidade de drag-and-drop - aprimorar
// Fazer uma barra de progresso?
// Fazer tutorial demonstrativo?
// Fazer uma detecção se de fato é um Raio-x torax pa?

export default App;
