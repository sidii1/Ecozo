import React, { useState } from 'react';
import { Shield, Calendar, IndianRupee, FileText, AlertCircle, CheckCircle, Clock, Phone } from 'lucide-react';
import { mockInsurancePolicy } from '../../utils/mockData';

const HealthInsurance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'claims' | 'documents'>('overview');
  const policy = mockInsurancePolicy;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'expired': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRenewalDaysLeft = () => {
    const endDate = new Date(policy.endDate);
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const renewalDays = getRenewalDaysLeft();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Health Insurance</h1>
            <p className="text-gray-600">Protecting our Ecozo workers with comprehensive health coverage</p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
              <Shield className="text-blue-600" size={32} />
            </div>
          </div>
        </div>
      </div>

      {/* Policy Status Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Shield className="text-blue-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{policy.policyName}</h2>
              <p className="text-gray-600">{policy.provider}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getStatusColor(policy.status)}`}>
              {policy.status}
            </span>
            {renewalDays <= 30 && renewalDays > 0 && (
              <div className="flex items-center space-x-1 text-orange-600">
                <AlertCircle size={16} />
                <span className="text-sm font-medium">Renews in {renewalDays} days</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <IndianRupee className="text-green-600" size={16} />
              <span className="text-sm text-gray-600">Coverage</span>
            </div>
            <p className="font-semibold text-gray-800">₹2,00,000</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <IndianRupee className="text-blue-600" size={16} />
              <span className="text-sm text-gray-600">Premium</span>
            </div>
            <p className="font-semibold text-gray-800">₹{policy.premium}/year</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Calendar className="text-purple-600" size={16} />
              <span className="text-sm text-gray-600">Start Date</span>
            </div>
            <p className="font-semibold text-gray-800">{new Date(policy.startDate).toLocaleDateString()}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-1">
              <Calendar className="text-red-600" size={16} />
              <span className="text-sm text-gray-600">End Date</span>
            </div>
            <p className="font-semibold text-gray-800">{new Date(policy.endDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'overview', label: 'Coverage Overview' },
              { id: 'claims', label: 'Claims History' },
              { id: 'documents', label: 'Documents' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Coverage Details */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Coverage Details</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 mb-4">{policy.coverage}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800">Covered Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Hospitalization expenses</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Pre & post hospitalization</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Emergency medical care</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Ambulance charges</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-800">Key Benefits:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Cashless treatment at network hospitals</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>24/7 claim assistance</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Annual health checkup</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>No waiting period for accidents</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="flex items-center justify-center space-x-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                    <FileText className="text-blue-600" size={20} />
                    <span className="font-medium text-blue-600">File New Claim</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                    <Phone className="text-green-600" size={20} />
                    <span className="font-medium text-green-600">Contact Support</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                    <Calendar className="text-purple-600" size={20} />
                    <span className="font-medium text-purple-600">Schedule Checkup</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'claims' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Claims History</h3>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  New Claim
                </button>
              </div>

              {policy.claimsHistory.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <FileText className="text-gray-400" size={32} />
                  </div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">No Claims Yet</h3>
                  <p className="text-gray-600 mb-6">Great! No medical claims have been filed.</p>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    File Your First Claim
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {policy.claimsHistory.map((claim) => (
                    <div key={claim.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className={`w-3 h-3 rounded-full ${
                            claim.status === 'approved' ? 'bg-green-500' :
                            claim.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                          }`} />
                          <span className="font-medium text-gray-800">₹{claim.amount}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                          claim.status === 'approved' ? 'bg-green-100 text-green-600' :
                          claim.status === 'pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {claim.status}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{claim.reason}</p>
                      <p className="text-gray-400 text-xs mt-1">
                        Submitted on {new Date(claim.submittedAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Insurance Documents</h3>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Upload Document
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Policy Certificate', type: 'PDF', date: '2024-04-01', status: 'verified' },
                  { name: 'ID Proof', type: 'PDF', date: '2024-04-01', status: 'verified' },
                  { name: 'Address Proof', type: 'PDF', date: '2024-04-01', status: 'pending' },
                  { name: 'Medical History', type: 'PDF', date: '2024-04-01', status: 'verified' }
                ].map((doc, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <FileText className="text-blue-600" size={20} />
                        <span className="font-medium text-gray-800">{doc.name}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        doc.status === 'verified' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{doc.type}</span>
                      <span>{doc.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-center space-x-3 mb-4">
          <AlertCircle className="text-red-600" size={24} />
          <h3 className="text-lg font-semibold text-red-800">Emergency Medical Assistance</h3>
        </div>
        <p className="text-red-700 mb-4">For medical emergencies, contact our 24/7 helpline immediately.</p>
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
            <Phone size={18} />
            <span>Call Emergency: 1800-XXX-XXXX</span>
          </button>
          <button className="px-6 py-3 border border-red-300 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
            Find Nearest Hospital
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;