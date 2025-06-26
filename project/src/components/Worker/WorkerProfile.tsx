import React, { useState } from 'react';
import { Star, MapPin, Clock, Phone, Heart, Award, Calendar, TrendingUp } from 'lucide-react';
import { mockWorkers } from '../../utils/mockData';

const WorkerProfile: React.FC = () => {
  const [selectedWorker, setSelectedWorker] = useState(mockWorkers[0]);
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  const handleRating = (value: number) => {
    setRating(value);
  };

  const submitFeedback = () => {
    // Here you would typically send the feedback to your backend
    setShowFeedback(false);
    setRating(0);
    setFeedbackText('');
    alert('Thank you for your feedback!');
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Meet Your Ecozo Worker</h1>
        <p className="text-gray-600">Building trust through transparency and recognizing our environmental heroes</p>
      </div>

      {/* Worker Selection */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Area Workers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockWorkers.map((worker) => (
            <div
              key={worker.id}
              onClick={() => setSelectedWorker(worker)}
              className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedWorker.id === worker.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <img
                  src={worker.photo}
                  alt={worker.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{worker.name}</p>
                  <p className="text-sm text-gray-600">{worker.routeArea}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm text-gray-600">{worker.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Worker Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Main Profile Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <img
                src={selectedWorker.photo}
                alt={selectedWorker.name}
                className="w-32 h-32 rounded-lg object-cover mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedWorker.name}</h2>
                    <p className="text-gray-600">{selectedWorker.ward}</p>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-1 mt-2 md:mt-0">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`${
                          star <= Math.floor(selectedWorker.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                        size={20}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {selectedWorker.rating} ({selectedWorker.totalRatings} reviews)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-green-600" size={16} />
                    <span className="text-gray-700">{selectedWorker.routeArea}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-blue-600" size={16} />
                    <span className="text-gray-700">{selectedWorker.shiftTimings}</span>
                  </div>
                  {selectedWorker.contactInfo && (
                    <div className="flex items-center space-x-2">
                      <Phone className="text-purple-600" size={16} />
                      <span className="text-gray-700">{selectedWorker.contactInfo}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-medium text-gray-800 mb-2">Daily Route</h3>
                  <p className="text-sm text-gray-600">{selectedWorker.dailyRoute}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Worker Bio */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">About {selectedWorker.name}</h3>
            <p className="text-gray-700 leading-relaxed">{selectedWorker.bio}</p>
            <div className="mt-4 flex items-center space-x-2 text-sm text-green-600">
              <Award size={16} />
              <span>Certified Ecozo Guardian</span>
            </div>
          </div>

          {/* Performance Stats (Admin View) */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <TrendingUp className="text-green-600 mx-auto mb-2" size={24} />
                <p className="text-2xl font-bold text-green-600">98%</p>
                <p className="text-sm text-gray-600">Attendance Rate</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Calendar className="text-blue-600 mx-auto mb-2" size={24} />
                <p className="text-2xl font-bold text-blue-600">156</p>
                <p className="text-sm text-gray-600">Pickups This Month</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Heart className="text-purple-600 mx-auto mb-2" size={24} />
                <p className="text-2xl font-bold text-purple-600">24</p>
                <p className="text-sm text-gray-600">Community Thanks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="space-y-6">
          {/* Quick Feedback */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Share Your Feedback</h3>
            
            {!showFeedback ? (
              <div className="space-y-3">
                <button
                  onClick={() => setShowFeedback(true)}
                  className="w-full flex items-center justify-center space-x-2 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Star size={18} />
                  <span>Rate Service</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 py-3 bg-pink-100 text-pink-700 rounded-lg hover:bg-pink-200 transition-colors">
                  <Heart size={18} />
                  <span>Say Thanks</span>
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Rate the service:</p>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        className={`p-1 ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        } hover:text-yellow-400 transition-colors`}
                      >
                        <Star className="fill-current" size={24} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Share your experience (optional)"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                    rows={3}
                  />
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={submitFeedback}
                    disabled={rating === 0}
                    className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => setShowFeedback(false)}
                    className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Worker Recognition */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recognition</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <Award className="text-yellow-600" size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-800">Worker of the Month</p>
                  <p className="text-xs text-gray-600">December 2024</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Star className="text-green-600" size={20} />
                <div>
                  <p className="text-sm font-medium text-gray-800">5-Star Service</p>
                  <p className="text-xs text-gray-600">Consistent quality</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Emergency */}
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Need Help?</h3>
            <div className="space-y-3">
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Report Issue
              </button>
              <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                Contact Supervisor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfile;