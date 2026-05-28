import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function WorldMap() {

  return (
    <div className="relative bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md overflow-hidden shadow-lg">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(170,59,255,0.12),transparent_50%)]" />

      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{
          height: "430px",
          width: "100%"
        }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[-15, -55]}>
          <Popup>
            Fire Risk Detected
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}