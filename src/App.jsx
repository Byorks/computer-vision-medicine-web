import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

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

          <div className="w-full flex flex-col gap-8">
            <h1 className="text-center">Computer Vision Medicine</h1>

            <div className="">
              <h2>Classificação de doenças cardíacas</h2>
              <p>
                Realiza classificação de doenças cardíacas em Raio X do tórax
                com perspectiva frontal do tipo PA.{" "}
              </p>
              <p className="text-sm">
                PA — Posteroanterior: O feixe entra pelas costas e sai pelo
                peito.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <form method="post" action="flex flex-col gap-4">
                <label htmlFor="x-ray">Envie uma imagem para analise:</label>
                <input
                  className="w-full bg-primary cursor-pointer"
                  type="file"
                  id="x-ray"
                  name="x-ray"
                  accept="image/png, image/jpeg, image/jpg"
                />
                <button>Submit</button>
              </form>
            </div>

            {/* preview */}
            <div className="bg-blue-900 rounded">
              <p>future file preview</p>
            </div>
          </div>
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
