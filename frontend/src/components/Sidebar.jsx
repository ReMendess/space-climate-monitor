import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const items = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Imagens de Satélite", to: "/satellite-images" },
    { label: "Assistente (IA)", to: "/ai-assistant" },
    { label: "Alertas", to: "/alerts" }
  ];

  return (
    <div className="w-64 bg-[#0B1026]/30 min-h-screen p-4 border-r border-white/10 backdrop-blur-md relative z-20">

      <div className="space-y-4 mt-8">

        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                "block transition-colors px-3 py-2 rounded-xl",
                "text-slate-200/90 hover:text-cyan-200 hover:bg-white/5",
                isActive ? "bg-white/8 border border-white/10 text-white" : ""
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
        ))}

      </div>

    </div>
  );
}