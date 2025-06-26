import { Worker, PickupSchedule, WasteLocation, PickupRequest, InsurancePolicy, NGOPartner, MonthlySummary, Notification, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Priya Sharma',
  email: 'priya.sharma@email.com',
  role: 'citizen',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
};

export const mockWorkers: Worker[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    routeArea: 'Koramangala Block 5',
    ward: 'Ward 87',
    shiftTimings: '6:00 AM - 2:00 PM',
    dailyRoute: 'Koramangala 5th Block → 6th Block → Commercial Street',
    bio: 'Dedicated waste warrior with 8 years of experience. Believes in keeping Bangalore clean and green.',
    rating: 4.8,
    totalRatings: 156,
    contactInfo: '+91 98765 43210'
  },
  {
    id: '2',
    name: 'Lakshmi Devi',
    photo: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    routeArea: 'Indiranagar',
    ward: 'Ward 84',
    shiftTimings: '7:00 AM - 3:00 PM',
    dailyRoute: 'Indiranagar 12th Main → CMH Road → Old Airport Road',
    bio: 'Community champion who takes pride in maintaining cleanliness. Known for her friendly approach.',
    rating: 4.9,
    totalRatings: 203
  }
];

export const mockPickupSchedule: PickupSchedule = {
  id: '1',
  date: '2025-01-15',
  type: 'wet',
  time: '8:30 AM',
  status: 'scheduled',
  worker: mockWorkers[0]
};

export const mockWasteLocations: WasteLocation[] = [
  {
    id: '1',
    lat: 12.9352,
    lng: 77.6245,
    type: 'pickup',
    status: 'pending',
    description: 'Regular pickup scheduled',
    reportedAt: '2025-01-14T08:00:00Z'
  },
  {
    id: '2',
    lat: 12.9716,
    lng: 77.5946,
    type: 'overflow',
    status: 'pending',
    description: 'Overflow reported at garbage collection point',
    photo: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg',
    reportedBy: 'Citizen',
    reportedAt: '2025-01-14T10:30:00Z'
  }
];

export const mockPickupRequests: PickupRequest[] = [
  {
    id: '1',
    citizenId: '1',
    type: 'furniture',
    description: 'Old sofa and dining table',
    preferredDate: '2025-01-16',
    preferredTime: '10:00 AM',
    address: '123 Koramangala 5th Block, Bangalore',
    status: 'pending',
    fee: 200
  }
];

export const mockInsurancePolicy: InsurancePolicy = {
  id: '1',
  workerId: '1',
  policyName: 'Ecozo Health Shield',
  provider: 'Star Health Insurance',
  coverage: 'Medical expenses up to ₹2,00,000',
  premium: 1200,
  startDate: '2024-04-01',
  endDate: '2025-03-31',
  status: 'active',
  claimsHistory: []
};

export const mockNGOPartners: NGOPartner[] = [
  {
    id: '1',
    name: 'Bangalore Health Foundation',
    type: 'health',
    services: ['Health Checkups', 'Medical Camps', 'Emergency Care'],
    contact: '+91 80 2345 6789',
    address: 'MG Road, Bangalore',
    logo: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg'
  },
  {
    id: '2',
    name: 'Legal Aid Society',
    type: 'legal',
    services: ['Legal Consultation', 'Document Assistance', 'Rights Awareness'],
    contact: '+91 80 3456 7890',
    address: 'Vidhana Soudha, Bangalore'
  }
];

export const mockMonthlySummary: MonthlySummary = {
  totalWasteCollected: 145,
  wetWaste: 85,
  dryWaste: 45,
  recyclableWaste: 15,
  pickupsCompleted: 28,
  pickupsMissed: 2,
  ecozoImpactScore: 92,
  carbonFootprintSaved: 32.5
};

export const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Pickup Scheduled',
    message: 'Your wet waste pickup is scheduled for tomorrow at 8:30 AM',
    type: 'pickup',
    read: false,
    createdAt: '2025-01-14T15:30:00Z'
  },
  {
    id: '2',
    title: 'Worker Update',
    message: 'Rajesh Kumar has completed your area cleanup',
    type: 'worker',
    read: false,
    createdAt: '2025-01-14T12:00:00Z'
  }
];