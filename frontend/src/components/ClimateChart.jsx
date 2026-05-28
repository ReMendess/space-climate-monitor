import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { day: "Mon", temp: 32 },
  { day: "Tue", temp: 35 },
  { day: "Wed", temp: 33 },
  { day: "Thu", temp: 36 },
  { day: "Fri", temp: 39 },
];

export default function ClimateChart() {

  return (
    <div className="relative bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden shadow-lg">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(170,59,255,0.16),transparent_50%)]" />
      <h2 className="text-white mb-5 text-xl font-semibold">
        Climate Activity
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={data}>

          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="temp"
            stroke="#00D4FF"
            strokeWidth={3}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}