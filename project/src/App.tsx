import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Layout/Navigation';
import Header from './components/Layout/Header';
import HomePage from './components/Dashboard/HomeWr';
import MapPage from './components/Map/Map';
import WorkerProfile from './components/Worker/WorkerProfile';
import HealthInsurance from './components/Insurance/HealthInsurance';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
    <div
  id="google_translate_element"
  style={{
    position: 'fixed',
    top: 10,
    height: 1,
    right: 10,
    zIndex: 9999,
  }}
></div>

      <div className="min-h-screen bg-gray-50">
        <Navigation isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        <div className="lg:ml-64 flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/worker-profile" element={<WorkerProfile />} />
              <Route path="/Map" element={<MapPage />} />
              <Route path="/insurance" element={<HealthInsurance />} />
              <Route path="/map" element={<div className="p-6"><div className="bg-white rounded-lg p-12 text-center shadow-sm border border-gray-200"><h2 className="text-2xl font-bold text-gray-800 mb-4">🗺️ Waste Location Map</h2><p className="text-gray-600">Interactive map feature coming soon...</p></div></div>} />
              <Route path="/pickup" element={<div className="p-6"><div className="bg-white rounded-lg p-12 text-center shadow-sm border border-gray-200"><h2 className="text-2xl font-bold text-gray-800 mb-4">📥 Pickup Request</h2><p className="text-gray-600">Pickup request feature coming soon...</p></div></div>} />
              <Route path="/ngo" element={<div className="p-6"><div className="bg-white rounded-lg p-12 text-center shadow-sm border border-gray-200"><h2 className="text-2xl font-bold text-gray-800 mb-4">❤️ NGO & Community Support</h2><p className="text-gray-600">NGO support feature coming soon...</p></div></div>} />
              <Route path="/summary" element={<div className="p-6"><div className="bg-white rounded-lg p-12 text-center shadow-sm border border-gray-200"><h2 className="text-2xl font-bold text-gray-800 mb-4">📊 Monthly Summary</h2><p className="text-gray-600">Monthly summary feature coming soon...</p></div></div>} />
              <Route path="/digital-id" element={<div className="p-6"><div className="bg-white rounded-lg p-12 text-center shadow-sm border border-gray-200"><h2 className="text-2xl font-bold text-gray-800 mb-4">🪪 Digital ID Cards</h2><p className="text-gray-600">Digital ID feature coming soon...</p></div></div>} />
            </Routes>
          </main>
        </div>
      </div>
      
    </Router>
  );
}

export default App;