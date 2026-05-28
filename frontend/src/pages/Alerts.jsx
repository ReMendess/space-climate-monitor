import { useEffect, useState } from "react";
import AlertCard from "../components/AlertCard";
import { api } from "../services/api";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    api
      .get("/alerts")
      .then((res) => {
        const data = res.data;
        const normalized = Array.isArray(data) ? data : (data?.alerts ?? []);
        setAlerts(normalized);
      })
      .catch((e) => {
        console.error(e);
        setError("Não foi possível carregar os alertas.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-6">
        <h1 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight">
          Alertas
        </h1>
        <p className="text-slate-200/80 mt-2">
          Eventos e riscos detectados a partir dos dados atuais.
        </p>
      </div>

      {loading && <p className="text-cyan-300">Carregando...</p>}
      {error && (
        <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl text-red-200">
          {error}
        </div>
      )}

      {!loading && !error && alerts.length === 0 && (
        <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl text-slate-200/80">
          Nenhum alerta no momento.
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {alerts.map((a, idx) => (
          <AlertCard key={idx} message={String(a?.message ?? a)} />
        ))}
      </div>
    </div>
  );
}

