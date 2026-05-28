export default function MetricCard({
  title,
  value,
  status
}) {

  return (
    <div className="relative bg-white/5 rounded-3xl p-7 min-h-[140px] border border-white/10 backdrop-blur-md overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_70px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_100px_rgba(0,212,255,0.18)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.25),transparent_45%)]" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 bg-[radial-gradient(circle,rgba(170,59,255,0.6),transparent_60%)] blur-2xl opacity-60" />

      <div className="relative">
        <h2 className="text-slate-300/80 text-xs uppercase tracking-widest">
          {title}
        </h2>

        <h1 className="text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight break-words">
          {value}
        </h1>

        <p className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-cyan-400/10 border border-cyan-400/20 text-cyan-200">
          {status}
        </p>
      </div>
    </div>
  );
}