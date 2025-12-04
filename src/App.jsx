import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Lucide Icons
import { ImageUp } from "lucide-react";

// CSS Style
import "./App.css";

import FileUpload from "./components/FileUpload";

function App() {
  return (
    <>
      <main>
        <section>
          <div className="w-full flex justify-center">
            {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
            <a href="https://react.dev" className="" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>

          <FileUpload></FileUpload>
        </section>
      </main>
    </>
  );
}
// ** To-do **
// Preciso transformar em gráficos
// // {
//   "no_finding": 62.38,
//   "enlarged_cardiomediastinum": 3.08,
//   "cardiomegaly": 5.85,
//   "lung_opacity": 9.05,
//   "lung_lesion": 1.34,
//   "edema": 3.2,
//   "consolidation": 0.83,
//   "pneumonia": 5.41,
//   "atelectasis": 1.2,
//   "pneumothorax": 0.8,
//   "pleural_effusion": 1.37,
//   "pleural_other": 0.47,
//   "fracture": 2.57,
//   "support_devices": 12.91
// }
// Fazer funcionalidade de drag-and-drop
// Fazer uma barra de progresso?

export default App;
