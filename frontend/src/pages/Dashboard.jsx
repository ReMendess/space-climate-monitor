import { useEffect, useState } from "react";

import MetricCard from "../components/MetricCard";
import ClimateChart from "../components/ClimateChart";
import WorldMap from "../components/WorldMap";
import NewsCard from "../components/NewsCard";

import { api } from "../services/api";

export default function Dashboard() {

  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);

  useEffect(() => {

    api.get("/news")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch news:", error);
        setNews([]);
      })
      .finally(() => {
        setNewsLoading(false);
      });

  }, []);

  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            <MetricCard
              title="Solar Activity"
              value="Moderate"
              status="+12%"
            />

            <MetricCard
              title="Global Temp"
              value="34°C"
              status="+2%"
            />

            <MetricCard
              title="Fire Alerts"
              value="18"
              status="Warning"
            />

            <MetricCard
              title="Satellite Status"
              value="Online"
              status="Operational"
            />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <ClimateChart />

            <WorldMap />

          </div>

          <div>
            <h1 className="text-white text-2xl lg:text-3xl mb-6 font-semibold tracking-tight">
              Space News
            </h1>

            {newsLoading ? (
              <p className="text-gray-400 text-sm">Loading news...</p>
            ) : news.length === 0 ? (
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                <p className="text-gray-400 text-sm">
                  No space news available at the moment. News articles are fetched from space.com — the site may have changed its layout.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {news.map((item, index) => (
                  <NewsCard
                    key={index}
                    title={item.title}
                  />
                ))}

              </div>
            )}

          </div>
    </div>
  );
}