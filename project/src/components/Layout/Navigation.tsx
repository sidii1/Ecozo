import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  User, 
  Shield, 
  Map, 
  Truck,
  Heart, 
  BarChart3, 
  CreditCard,
  Menu,
  X
} from 'lucide-react';

interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onToggle }) => {
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/worker-profile', icon: User, label: 'Worker Profile' },
    { path: '/insurance', icon: Shield, label: 'Insurance' },
    { path: '/map', icon: Map, label: 'Waste Map' },
    { path: '/pickup', icon: Truck, label: 'Pickup Request' },
    { path: '/ngo', icon: Heart, label: 'NGO Support' },
    { path: '/summary', icon: BarChart3, label: 'Monthly Summary' },
    { path: '/digital-id', icon: CreditCard, label: 'Digital ID' },
{ path: '/worker-form', icon: CreditCard, label: 'Worker Form' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-green-600 text-white rounded-md shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onToggle}
        />
      )}

      {/* Navigation Sidebar */}
      <nav className={`
        fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Ecozo</h1>
          </div>
        </div>

        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onToggle}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'bg-green-100 text-green-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;