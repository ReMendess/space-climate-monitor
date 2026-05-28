export default function NewsCard({ title }) {

  return (
    <div className="relative bg-white/5 p-6 rounded-3xl min-h-[140px] border border-white/10 backdrop-blur-md overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-400/30">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,212,255,0.18),transparent_55%),linear-gradient(315deg,rgba(170,59,255,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-cyan-400/60 via-purple-500/50 to-fuchsia-500/60 opacity-70" />

      <div className="relative">
        <h2 className="text-white text-sm sm:text-base font-semibold leading-snug">
          {title}
        </h2>

        <div className="mt-10 h-1.5 rounded-full bg-gradient-to-r from-cyan-400/40 via-purple-500/35 to-fuchsia-500/35 opacity-60" />
      </div>
    </div>
  );
}
