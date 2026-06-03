import { useEffect, useState } from "react";
import AlertCard from "../components/AlertCard";
import { api } from "../services/api";

// Dados mockados realistas para simular alertas espaciais/climáticos
const MOCK_ALERTS = [
  {
    id: 1,
    type: "Tempestade Solar",
    severity: "high",
    title: "Ejeção de Massa Coronal (CME) detectada",
    description:
      "Uma ejeção de massa coronal classe X1.2 foi detectada pelo satélite GOES-16. A nuvem de partículas solares deve atingir a magnetosfera terrestre nas próximas 24–48 horas, com potencial para causar tempestades geomagnéticas de nível G2 a G3.",
    timestamp: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(), // +2h
    location: "Região Ativa AR3876 — Superfície Solar",
    recommendation:
      "Equipes de operação de satélites devem se preparar para possíveis anomalias. Redes elétricas em altas latitudes devem ficar em alerta.",
    affectedSystem: "Satélites de comunicação / Redes elétricas",
  },
  {
    id: 2,
    type: "Radiação Espacial",
    severity: "critical",
    title: "Pico de radiação no cinturão de Van Allen",
    description:
      "Sensor a bordo da estação espacial registrou aumento de 340% nos níveis de radiação no cinturão interno de Van Allen. Isso representa risco elevado para equipamentos eletrônicos e astronautas em atividades extraveiculares (EVAs).",
    timestamp: new Date(Date.now() + 1000 * 60 * 30).toISOString(), // +30min
    location: "Cinturão de Van Allen Interno — Órbita Baixa (LEO)",
    recommendation:
      "Suspender EVAs programadas. Reagendar janelas de lançamento. Ativar blindagens reforçadas em módulos críticos.",
    affectedSystem: "Estação Espacial / Carga útil de satélites científicos",
  },
  {
    id: 3,
    type: "Mudança Climática",
    severity: "medium",
    title: "Anomalia térmica no Oceano Atlântico Sul",
    description:
      "Dados de sensoriamento remoto indicam um aquecimento anômalo de 2,8°C acima da média histórica em uma faixa de 500 km² no Atlântico Sul. O fenômeno pode estar associado ao enfraquecimento dos ventos alísios e alterações na corrente do Brasil.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(), // -4h
    location: "Oceano Atlântico Sul — 28°S 42°W",
    recommendation:
      "Monitorar formação de ciclones subtropicais. Alertar defesa civil das regiões costeiras do Sul e Sudeste.",
    affectedSystem: "Sistemas meteorológicos costeiros / Defesa civil",
  },
  {
    id: 4,
    type: "Detritos Espaciais",
    severity: "low",
    title: "Aproximação de detrito orbital (COSMOS-2251)",
    description:
      "Fragmento catalogado #38245 (proveniente do satélite COSMOS-2251) fará aproximação de aproximadamente 3,2 km do telescópio espacial Hubble. Probabilidade de colisão estimada em 0,003%.",
    timestamp: new Date(Date.now() + 1000 * 60 * 60 * 12).toISOString(), // +12h
    location: "Órbita Baixa Terrestre — 550 km de altitude",
    recommendation:
      "Nenhuma ação necessária no momento. A trajetória será reavaliada em 6 horas para refinar a estimativa.",
    affectedSystem: "Telescópio Espacial Hubble",
  },
  {
    id: 5,
    type: "Clima Espacial",
    severity: "medium",
    title: "Vento solar ultrapassa 700 km/s",
    description:
      "A velocidade do vento solar medida pelo satélite DSCOVR atingiu 720 km/s, acompanhada de um aumento na densidade de partículas (18 prótons/cm³). Campo magnético interplanetário com componente Bz negativa de -12 nT.",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // -30min
    location: "Ponto L1 Lagrange — 1.5 milhões de km da Terra",
    recommendation:
      "Preparar sistemas de navegação e comunicação para possíveis interferências. Aurora boreal pode ser visível em latitudes mais baixas que o normal.",
    affectedSystem: "GPS / Comunicações de rádio HF / Redes elétricas",
  },
];

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState("");

  useEffect(() => {
    let cancelled = false;

    api
      .get("/alerts")
      .then((res) => {
        if (cancelled) return;
        const data = res.data;
        const normalized = Array.isArray(data) ? data : data?.alerts ?? [];

        // Se a API retornou dados reais, mapeamos para o formato do AlertCard
        if (normalized.length > 0) {
          const mapped = normalized.map((a) => ({
            id: a.id ?? Math.random(),
            type: a.type ?? "Alerta Espacial",
            severity: a.severity ?? "medium",
            title: a.title ?? String(a?.message ?? a),
            description:
              a.description ?? "Detalhes adicionais não fornecidos.",
            timestamp: a.timestamp ?? new Date().toISOString(),
            location: a.location ?? "Não especificado",
            recommendation:
              a.recommendation ?? "Monitore a situação.",
            affectedSystem: a.affectedSystem ?? "Sistema geral",
          }));
          setAlerts(mapped);
        } else {
          // API funcionou mas não retornou alertas — usamos mock
          setAlerts(MOCK_ALERTS);
        }
      })
      .catch((e) => {
        console.error("API /alerts indisponível — usando dados simulados:", e);
        // Se a API falhar, usamos os dados mockados
        setAlerts(MOCK_ALERTS);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
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
        {alerts.length > 0 && alerts === MOCK_ALERTS && (
          <p className="text-xs text-cyan-400/60 mt-1 italic">
            * Dados simulados para demonstração (API indisponível ou sem
            retorno)
          </p>
        )}
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-cyan-300 text-sm">Carregando alertas...</p>
          </div>
        </div>
      )}

      {/* Error inesperado */}
      {!loading && error && (
        <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-2xl text-red-200">
          {error}
        </div>
      )}

      {/* Sem alertas */}
      {!loading && !error && alerts.length === 0 && (
        <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-3xl text-slate-200/80 text-center">
          <span className="text-3xl block mb-2">✅</span>
          Nenhum alerta no momento. Todos os sistemas operam dentro da
          normalidade.
        </div>
      )}

      {/* Lista de alertas */}
      {!loading && alerts.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {alerts.map((a) => (
            <AlertCard
              key={a.id}
              type={a.type}
              severity={a.severity}
              title={a.title}
              description={a.description}
              timestamp={a.timestamp}
              location={a.location}
              recommendation={a.recommendation}
              affectedSystem={a.affectedSystem}
            />
          ))}
        </div>
      )}
    </div>
  );
}