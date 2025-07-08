import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapPage: React.FC = () => {
  const position: [number, number] = [12.9716, 77.5946]; // Bangalore default

  // Mock data points
  const scheduledPickups = [
    { id: 1, lat: 12.97, lng: 77.59, status: 'Pending' },
    { id: 2, lat: 12.98, lng: 77.60, status: 'Cleared' },
  ];

  const spillageReports = [
    { id: 1, lat: 12.965, lng: 77.58, status: 'Pending' },
  ];

  const dropOffCenters = [
    { id: 1, lat: 12.975, lng: 77.602, type: 'e-Waste' },
    { id: 2, lat: 12.965, lng: 77.612, type: 'Dry Waste' },
  ];

  const publicToilets = [
    { id: 1, lat: 12.972, lng: 77.598 },
    { id: 2, lat: 12.968, lng: 77.582 },
  ];

  const sevakLocations = [
    { id: 1, lat: 12.974, lng: 77.61 },
    { id: 2, lat: 12.962, lng: 77.606 },
  ];

  const bulkPending = [
    { id: 1, lat: 12.963, lng: 77.601 },
  ];

  const [photo, setPhoto] = useState<File | null>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0]);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🗺️ Waste Location Map</h1>

      <MapContainer center={position} zoom={13} style={{ height: '600px', borderRadius: '12px' }}>
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl position="topright">

          {/* Scheduled Pickups */}
          <LayersControl.Overlay checked name="🏠 Scheduled Pickups">
            <LayerGroup>
              {scheduledPickups.map(pickup => (
                <Marker key={pickup.id} position={[pickup.lat, pickup.lng]}>
                  <Popup>
                    Pickup: {pickup.status}
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          {/* Spillage Reports */}
          <LayersControl.Overlay name="🗑️ Overflow/Spillage Reports">
            <LayerGroup>
              {spillageReports.map(site => (
                <Marker key={site.id} position={[site.lat, site.lng]}>
                  <Popup>
                    Spillage Report<br />
                    Status: {site.status}
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          {/* Drop-off Centers */}
          <LayersControl.Overlay name="📍 Drop-off Centers">
            <LayerGroup>
              {dropOffCenters.map(center => (
                <Marker key={center.id} position={[center.lat, center.lng]}>
                  <Popup>
                    Drop-off Center<br />
                    Type: {center.type}
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          {/* Public Toilets */}
          <LayersControl.Overlay name="🚻 Public Toilets">
            <LayerGroup>
              {publicToilets.map(toilet => (
                <Marker key={toilet.id} position={[toilet.lat, toilet.lng]}>
                  <Popup>Public Toilet</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          {/* Sevak Locations */}
          <LayersControl.Overlay name="🧑‍🤝‍🧑 Ecozo Sevaks (Live)">
            <LayerGroup>
              {sevakLocations.map(sevak => (
                <Marker key={sevak.id} position={[sevak.lat, sevak.lng]}>
                  <Popup>Ecozo Sevak (Anonymized)</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

          {/* Bulk Pickup */}
          <LayersControl.Overlay name="📦 Bulk Pickup Pending">
            <LayerGroup>
              {bulkPending.map(bulk => (
                <Marker key={bulk.id} position={[bulk.lat, bulk.lng]}>
                  <Popup>Bulk Waste - Pending</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>

        </LayersControl>
      </MapContainer>

      {/* 📸 Report Form */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow max-w-xl">
        <h2 className="text-xl font-semibold mb-4">📸 Report a Site</h2>
        <label className="block mb-2 font-medium">Upload Photo:</label>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} className="mb-4" />

        <label className="block mb-2 font-medium">GPS Coordinates (auto-filled/mock):</label>
        <input type="text" value="12.9716, 77.5946" disabled className="mb-4 px-2 py-1 border rounded w-full" />

        <label className="block mb-2 font-medium">Status:</label>
        <select className="mb-4 px-2 py-1 border rounded w-full">
          <option value="pending">Pending</option>
          <option value="cleared">Cleared</option>
        </select>

        <button className="bg-green-600 text-white px-4 py-2 rounded shadow">
          Submit Report
        </button>
      </div>
    </div>
  );
};

export default MapPage;
