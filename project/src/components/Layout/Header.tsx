import React from 'react';
import { Bell, Search } from 'lucide-react';
import { mockUser, mockNotifications } from '../../utils/mockData';

const Header: React.FC = () => {
  const unreadCount = mockNotifications.filter(n => !n.read).length;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell size={20} />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">{mockUser.name}</p>
              <p className="text-xs text-gray-500 capitalize">{mockUser.role}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;