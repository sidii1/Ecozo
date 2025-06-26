export interface User {
  id: string;
  name: string;
  email: string;
  role: 'citizen' | 'worker' | 'admin';
  avatar?: string;
}

export interface Worker {
  id: string;
  name: string;
  photo: string;
  routeArea: string;
  ward: string;
  shiftTimings: string;
  dailyRoute: string;
  bio: string;
  rating: number;
  totalRatings: number;
  contactInfo?: string;
  attendanceLog?: AttendanceRecord[];
  performanceLog?: PerformanceRecord[];
}

export interface AttendanceRecord {
  date: string;
  status: 'present' | 'absent' | 'late';
  checkIn?: string;
  checkOut?: string;
}

export interface PerformanceRecord {
  date: string;
  pickupsCompleted: number;
  complaintsResolved: number;
  rating: number;
}

export interface PickupSchedule {
  id: string;
  date: string;
  type: 'wet' | 'dry' | 'recyclable' | 'bulk';
  time: string;
  status: 'scheduled' | 'completed' | 'missed';
  worker: Worker;
}

export interface WasteLocation {
  id: string;
  lat: number;
  lng: number;
  type: 'pickup' | 'overflow' | 'dropoff' | 'toilet' | 'bulk';
  status: 'pending' | 'cleared' | 'in-progress';
  description: string;
  photo?: string;
  reportedBy?: string;
  reportedAt: string;
}

export interface PickupRequest {
  id: string;
  citizenId: string;
  type: 'bulk' | 'electronic' | 'furniture';
  description: string;
  photo?: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  status: 'pending' | 'assigned' | 'picked' | 'completed';
  fee?: number;
  assignedWorker?: Worker;
}

export interface InsurancePolicy {
  id: string;
  workerId: string;
  policyName: string;
  provider: string;
  coverage: string;
  premium: number;
  startDate: string;
  endDate: string;
  status: 'active' | 'pending' | 'expired';
  claimsHistory: Claim[];
}

export interface Claim {
  id: string;
  policyId: string;
  amount: number;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
}

export interface NGOPartner {
  id: string;
  name: string;
  type: 'health' | 'legal' | 'education' | 'financial';
  services: string[];
  contact: string;
  address: string;
  logo?: string;
}

export interface MonthlySummary {
  totalWasteCollected: number;
  wetWaste: number;
  dryWaste: number;
  recyclableWaste: number;
  pickupsCompleted: number;
  pickupsMissed: number;
  ecozoImpactScore: number;
  carbonFootprintSaved: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'pickup' | 'payment' | 'worker' | 'system';
  read: boolean;
  createdAt: string;
}