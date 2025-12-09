// ChartJS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { color } from "chart.js/helpers";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 24,
        color: "#FFFFFF",
        font: { size: 14 },
      },
    },
    title: {
      display: true,
      text: "Classificação de doenças cardíacas",
      color: "#FFFFFF",
      font: { size: 16, family: "'Lato', 'Inter'" },
    },
    tooltip: {
      backgroundColor: "#1e293b", // Fundo escuro (Slate-800)
      padding: 12,
      titleFont: { size: 14, weight: "bold" },
      bodyFont: { size: 13 },
      cornerRadius: 8, // Arredondamento do tooltip
      displayColors: false, // Remove o quadradinho de cor de dentro do tooltip
    },
  },
  scales: {
    x: {
      grid: {
        display: true, // linhas verticais
        drawerBorder: false, // linha da borda do eixo
      },
      ticks: {
        color: "#FFFFFF",
        font: { size: 14, family: "'Lato', 'Inter'" },
      },
    },
    y: {
      border: { display: false }, // Remove linha da borda lateral
      /* The `grid` property in the `scales` configuration of a ChartJS chart is used to customize the
     grid lines on the chart. In this specific case: */
      grid: {
        display: false, // Sem linhas horizontais (fica mais limpo em bar chart horizontal)
      },
      //   grid: {
      //     color: "#12355B", // Cor da linha
      //     borderDash: [5, 5], // Linha tracejada (5px linha, 5px espaço)
      //   },
      ticks: {
        color: "#FFFFFF",
        font: { size: 14, family: "'Lato', 'Inter'", weight: "bold" },
      },
    },
  },
};

export default function HorizontalChart({ data }) {
  return (
    <>
      <Bar data={data} options={options}></Bar>
    </>
  );
}
