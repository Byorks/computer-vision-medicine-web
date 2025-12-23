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
export default App;
