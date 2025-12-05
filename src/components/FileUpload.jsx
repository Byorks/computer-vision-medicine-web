// Lucide Icons
import { ImageUp } from "lucide-react";
import { useState } from "react";
// ChartJS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['No finding', 'Enlarged Cardiomediastinum', 'Cardiomegaly', 'Lung Opacity', 'Lung Lesion', 'Edema', 'Consolidation', 'Pneumonia'];

// To-do configurar os dados com base na resposta
 

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Pega o arquivo
  const handleFileChange = async (e) => {
    console.log("evento", e);
    // Aparentemente só pega o primeiro
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);

      setFile(e.target.files[0]);
      setError(null); // Limpa erros
      setResponse(null);
      // Aqui ele vai estar vazio porque o React ainda não atualizou o estado aaaaaa
      console.log("Var file => ", file);
    }
  };

  // Envia para a API
  const handleSubmit = async (e) => {
    // Não deixa zerar o arquivo caso n dê certo
    e.preventDefault();

    if (!file) {
      setError("Por favor, selecione um arquivo.");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();

    formData.append("file", file); // Precisa ser file porque é requerido na API no request body

    try {
      const res = await fetch("http://localhost/predict", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Falha ao enviar o arquivo");

      const data = await res.json();
      setResponse(data);

      console.log("Sucesso", data);
    } catch (err) {
      console.log(err);
      setError("Erro ao conectar ao servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <h2>Classificação de doenças cardíacas</h2>
        <p>
          Realiza classificação de doenças cardíacas em Raio X do tórax com
          perspectiva frontal do tipo PA.
        </p>
        <p className="text-sm">
          PA — Posteroanterior: O feixe entra pelas costas e sai pelo peito.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <button className={`flex gap-4 ${file ? "border-green-300" : ""}`}>
            <label htmlFor="x-ray">Envie uma imagem para analise</label>
            <ImageUp />
          </button>

          <input
            className="w-full bg-primary cursor-pointer hidden"
            type="file"
            id="x-ray"
            name="x-ray"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleFileChange}
          />
          <button
            type="submit"
            disabled={!file || isLoading}
            className="disabled:cursor-not-allowed"
          >
            {isLoading ? "Enviando..." : "Fazer Upload"}
          </button>
        </form>
      </div>

      {/* preview */}
      <div className="bg-blue-900 p-2 rounded-2xl">
        {file && (
          <div>
            Detalhes do arquivo
            <ul>
              <li>Nome: {file.name}</li>
              <li>Tipo: {file.type}</li>
              <li>Size: {file.size} bytes</li>
            </ul>
          </div>
        )}
      </div>

      {/* Erros */}
      {error && (
        <div role="alert" className="bg-error p-2 rounded-2xl">
          <p>Teste de erro em tela</p>
          {error}
        </div>
      )}

      {/* Preview response */}
      {response && (
        <div className="bg-green-600 p-2 rounded-2xl">
          <p>Teste de erro em tela</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}


      {/* Preview response Graphs */}
      {response && (
        <Bar options={options} data={data} />
      )}
    </>
  );
}
