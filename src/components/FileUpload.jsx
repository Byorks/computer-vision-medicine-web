// Lucide Icons
import { ImageUp } from "lucide-react";
const handleSubmit = async (e) => {
    // Não deixa zerar o arquivo caso n dê certo
    e.preventDefault();
}

export default function FileUpload () {
    return (
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
              <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4" method="post" action="">
                <button className="flex gap-4">
                <label htmlFor="x-ray">Envie uma imagem para analise</label>
                <ImageUp/>
                </button>
                <input
                  className="w-full bg-primary cursor-pointer hidden"
                  type="file"
                  id="x-ray"
                  name="x-ray"
                  accept="image/png, image/jpeg, image/jpg"
                  stt
                />
                <button>Submit</button>
              </form>
            </div>

            {/* preview */}
            <div className="bg-blue-900 rounded">
              <p>future file preview</p>
            </div>
          </div>
    )
}