// Lucide Icons
import { ImageUp } from "lucide-react";
import { useState } from "react";
import HorizontalChart from "./HorizontalChart";
import { useEffect } from "react";

// Chart Labels
const labels = [
  "No finding",
  "Enlarged Cardiomediastinum",
  "Cardiomegaly",
  "Lung Opacity",
  "Lung Lesion",
  "Edema",
  "Consolidation",
  "Pneumonia",
  "Atelectasis",
  "Pneumothorax",
  "Pleural_effusion",
  "Pleural_other",
  "Fracture",
  "Support_devices",
];

// To-do configurar os dados com base na resposta

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState({ datasets: [] });
  const [isDragging, setIsDragging] = useState(false);
  const [imgPreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (!file) {
      setImagePreview(null);
      return;
    }

    // Cria uma URL temporária para passarmos o caminho da imagem
    const objectUrl = URL.createObjectURL(file);
    setImagePreview(objectUrl);

    // Limpa a memória quando o arquivo mudar ou o componente sumir
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

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

  const onDragOver = (e) => {
    e.preventDefault(); // Impede o navegador de abrir a imagem numa nova aba
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    // Pega o arquivo que foi solto
    const droppedFiles = e.dataTransfer.files;

    if (droppedFiles && droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];

      // Validação se é imagem
      if (!droppedFile.type.startsWith("image/")) {
        setError("Apenas imagens são permitidas.");
        return;
      }

      setFile(droppedFile);
      setError(null);
      setResponse(null);
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

      // Transformando objetos em arrays
      // const labels = Object.keys(data);
      const values = Object.values(data);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Classificação",
            data: values,
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            // backgroundColor: ['#ff0000', '#00ff00'] // Se quiser uma cor por barra
            borderRadius: 6,
            borderSkipped: "start",
            // barThickness: 30, // largura fixa em pixels
            // ou porcentagem pra responsividade
            barPercentage: 0.8,
            categoryPercentage: 0.9,
          },
        ],
      });

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
    <div className="w-full flex flex-col gap-10 bg-background-2  border rounded-2xl p-6">
      <div
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className="flex flex-col gap-4"
      >
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
          className="flex flex-col justify-center items-center gap-6 pt-10"
        >
          {/* Area de drag and drop */}
          <label
            htmlFor="x-ray"
            onDrop={onDrop}
            className={`h-24 flex justify-center items-center px-6 gap-4 rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-light ${
              isDragging ? "hover:border-primary scale-[1.02]" : ""
            } ${
              file
                ? " border-2 border-green-500 bg-green-50 dark:bg-green-800/10"
                : "border border-primary hover:border hover:border-secondary"
            }`}
          >
            <ImageUp />

            {isDragging ? (
              <div>
                <span className="font-semibold text-secondary">
                  Solte a imagem <span>aqui</span>
                </span>
              </div>
            ) : (
              <div>
                <span className="font-semibold text-secondary">
                  Clique para enviar
                </span>{" "}
                ou arraste e solte
              </div>
            )}
          </label>

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
            className="disabled:cursor-not-allowed bg-primary text-text-2 disabled:bg-background disabled:text-neutral-400 disabled:hover:border-transparent font-semibold"
          >
            {isLoading ? "Enviando..." : "Fazer Upload"}
          </button>
        </form>
      </div>

      {/* preview */}
      {file && (
        <div className="flex flex-col justify-between bg-background p-6 rounded-2xl border-2 border-green-500  ">
          <div className="w-full">
            <h2 className="text-lg pb-2 font-semibold">Detalhes do arquivo</h2>
          </div>
          <div className="flex w-full">
            <div className="w-1/2">
              <ul>
                <li>Nome: {file.name}</li>
                <li>Tipo: {file.type}</li>
                <li>Size: {file.size} bytes</li>
              </ul>
            </div>

            <div className="w-1/2">
              <p className="pb-2">Image preview</p>
              <div className="">
                <img
                  className="w-full h-auto rounded-md"
                  src={imgPreview}
                  alt="preview do Raio X"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Erros */}
      {error && (
        <div role="alert" className="bg-error p-6 rounded-2xl">
          <p>Teste de erro em tela</p>
          {error}
        </div>
      )}

      {/* Preview response Graphs */}
      {response && (
        <div className="w-full h-[600px] bg-background-2 p-6 rounded-2xl">
          {chartData?.labels ? (
            <HorizontalChart data={chartData} />
          ) : (
            <p>Sem dados para exibir</p>
          )}
        </div>
      )}

      {/* Preview response */}
      {response && (
        <div className="bg-green-600 p-6 rounded-2xl">
          <p>Resposta recebida da API</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
