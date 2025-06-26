import React from 'react';
import { Calendar, MapPin, Star, Bell, TrendingUp, Leaf } from 'lucide-react';
import { mockUser, mockPickupSchedule, mockMonthlySummary, mockNotifications } from '../../utils/mockData';

const HomePage: React.FC = () => {
  const nextPickup = mockPickupSchedule;
  const assignedWorker = nextPickup.worker;
  const summary = mockMonthlySummary;
  const recentNotifications = mockNotifications.slice(0, 3);

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Welcome back, {mockUser.name}! 👋</h1>
            <p className="text-green-100">Together, we're making Bangalore cleaner and greener</p>
          </div>
          <div className="hidden md:block">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <Leaf size={48} className="text-white opacity-80" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Next Pickup</p>
              <p className="text-2xl font-bold text-gray-900">{nextPickup.time}</p>
              <p className="text-sm text-gray-500">{nextPickup.date}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">{summary.totalWasteCollected}kg</p>
              <p className="text-sm text-green-600">Waste Collected</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Impact Score</p>
              <p className="text-2xl font-bold text-gray-900">{summary.ecozoImpactScore}</p>
              <p className="text-sm text-orange-600">Eco Points</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Star className="text-orange-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next Pickup Details */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Next Pickup Details</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-800 capitalize">{nextPickup.type} Waste</p>
                  <p className="text-sm text-gray-600">{nextPickup.date} at {nextPickup.time}</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                {nextPickup.status}
              </span>
            </div>

            {/* Assigned Worker */}
            <div className="border-t pt-4">
              <h3 className="text-sm font-medium text-gray-600 mb-3">Your Assigned Ecozo Worker</h3>
              <div className="flex items-center space-x-4">
                <img
                  src={assignedWorker.photo}
                  alt={assignedWorker.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{assignedWorker.name}</p>
                  <p className="text-sm text-gray-600">{assignedWorker.routeArea}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{assignedWorker.rating}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  View Profile
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex space-x-3 pt-4 border-t">
              <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                <MapPin size={18} />
                <span className="text-sm font-medium">View Map</span>
              </button>
              <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg transition-colors">
                <Bell size={18} />
                <span className="text-sm font-medium">Set Reminder</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Notifications & Monthly Summary */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Updates</h2>
            <div className="space-y-3">
              {recentNotifications.map((notification) => (
                <div key={notification.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${notification.read ? 'bg-gray-300' : 'bg-blue-500'}`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{notification.title}</p>
                    <p className="text-sm text-gray-600">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {new Date(notification.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 transition-colors">
              View All Notifications
            </button>
          </div>

          {/* Monthly Summary Preview */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">This Month's Impact</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Wet Waste</span>
                <span className="font-medium">{summary.wetWaste}kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Dry Waste</span>
                <span className="font-medium">{summary.dryWaste}kg</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Recyclable</span>
                <span className="font-medium">{summary.recyclableWaste}kg</span>
              </div>
              <div className="pt-3 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">Carbon Saved</span>
                  <span className="font-bold text-green-600">{summary.carbonFootprintSaved}kg CO₂</span>
                </div>
              </div>
            </div>
            <button className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              View Full Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;