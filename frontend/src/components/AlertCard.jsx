export default function AlertCard({
  type = "Desconhecido",
  severity = "medium",
  title = "Alerta",
  description = "Nenhuma descrição disponível.",
  timestamp = new Date().toISOString(),
  location = "Não especificado",
  recommendation = "Monitore a situação.",
  affectedSystem = "Sistema geral",
}) {
  const severityConfig = {
    low: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
      icon: "🟡",
      label: "Baixa",
      labelColor: "text-yellow-300",
      badgeBg: "bg-yellow-500/20",
    },
    medium: {
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
      icon: "🟠",
      label: "Média",
      labelColor: "text-orange-300",
      badgeBg: "bg-orange-500/20",
    },
    high: {
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      icon: "🔴",
      label: "Alta",
      labelColor: "text-red-300",
      badgeBg: "bg-red-500/20",
    },
    critical: {
      bg: "bg-purple-600/10",
      border: "border-purple-600/30",
      icon: "🟣",
      label: "Crítica",
      labelColor: "text-purple-300",
      badgeBg: "bg-purple-600/20",
    },
  };

  const config = severityConfig[severity] ?? severityConfig.medium;

  const formattedDate = new Date(timestamp).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "America/Sao_Paulo",
  });

  return (
    <div
      className={`${config.bg} ${config.border} border backdrop-blur-md rounded-2xl p-5 flex flex-col gap-3`}
    >
      {/* Cabeçalho */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl" role="img" aria-label={config.label}>
            {config.icon}
          </span>
          <div>
            <h3 className="text-white font-semibold text-lg leading-tight">
              {title}
            </h3>
            <span
              className={`inline-block mt-1 text-xs font-medium px-2.5 py-0.5 rounded-full ${config.badgeBg} ${config.labelColor}`}
            >
              {config.label}
            </span>
          </div>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-400 uppercase tracking-wider">
            Tipo
          </p>
          <p className="text-slate-200 text-sm font-medium">{type}</p>
        </div>
      </div>

      {/* Descrição */}
      <p className="text-slate-200/90 text-sm leading-relaxed">{description}</p>

      {/* Detalhes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs uppercase tracking-wider min-w-[5rem]">
            Data/Hora
          </span>
          <span className="text-slate-200 text-sm">{formattedDate}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs uppercase tracking-wider min-w-[5rem]">
            Localização
          </span>
          <span className="text-slate-200 text-sm">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs uppercase tracking-wider min-w-[5rem]">
            Sistema Afetado
          </span>
          <span className="text-slate-200 text-sm">{affectedSystem}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs uppercase tracking-wider min-w-[5rem]">
            Recomendação
          </span>
          <span className="text-slate-200 text-sm">{recommendation}</span>
        </div>
      </div>
    </div>
  );
}