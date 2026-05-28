import { useState } from "react";
import { api, API_BASE_URL } from "../services/api";

export default function ImageUpload() {

  const [file, setFile] = useState(null);

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) {
      setError("Selecione uma imagem antes de analisar.");
      return;
    }

    setError("");

    const formData = new FormData();

    formData.append("file", file);

    try {
      const response = await api.post("/cv/analyze", formData);
      setResult(response.data);
    } catch (e) {
      console.error(e);
      setError("Falha ao analisar a imagem.");
    }
  };

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-slate-800">

      <h1 className="text-white text-2xl mb-4">
        Satellite Image Analysis
      </h1>

      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
        className="text-white"
      />

      <button
        onClick={handleUpload}
        className="bg-cyan-500 text-black px-4 py-2 rounded-xl mt-4"
      >
        Analyze
      </button>

      {error && <p className="text-red-300 mt-4">{error}</p>}

      {result && (

        <div className="mt-6 text-white">

          <p>
            Vegetation Pixels:
            {result.vegetation_pixels}
          </p>

          <p>
            Water Pixels:
            {result.water_pixels}
          </p>

          <p>
            Fire Pixels:
            {result.fire_pixels}
          </p>

          <img
            src={`${API_BASE_URL}/uploads/${result.processed_image.split("/").pop()}`}
            alt="Processed"
            className="mt-4 rounded-xl"
          />

        </div>

      )}

    </div>
  );
}