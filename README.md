
# Front Computer Vision

SPA para classificação de doenças cardíacas em imagens de Raio-X do tórax (PA), utilizando um modelo de visão computacional criado por [DiogoBotton](https://github.com/DiogoBotton/Computer_Vision_Medicine).


## Contexto do projeto

Projeto de estudos voltado ao tema de **visão computacional aplicada à medicina**.  
O foco principal foi a integração com uma API de Machine Learning, além do desenvolvimento de uma boa UI/UX com atenção à acessibilidade.


## Funcionalidades principais

- Upload de imagens via clique ou drag-and-drop
- Preview da imagem enviada
- Envio da imagem para API de classificação
- Exibição dos resultados em gráfico horizontal
- Tratamento de estados de loading e erros
- Scroll automático para a seção de resultados


## Tecnologias utilizadas
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="24" /> **React.js**

<img width="24" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />**Tailwind CSS**  

<img src="https://www.chartjs.org/media/logo-title.svg" width="24" /> **Chart.js**

## Próximos passos / melhorias futuras

- Validação automática se a imagem enviada é um Raio-X do tipo PA
- Refatoração da lógica para hooks customizados
- Extração do preview da imagem para um componente dedicado
- Substituição do uso de `getElementById` por `useRef`

## Aprendizados

- Uso de `FormData` para envio de arquivos
- Manipulação de arquivos no React
- Preview de imagens utilizando `URL.createObjectURL`
- Controle de estados assíncronos no React
- Integração com API de Machine Learning