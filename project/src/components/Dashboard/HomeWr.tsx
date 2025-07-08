import React, { useState } from 'react';
import {
  FaUserShield,
  FaMapMarkedAlt,
  FaCheckCircle,
  FaBell,
  FaClock,
  FaCalendarAlt,
} from 'react-icons/fa';

const WorkerDashboard: React.FC = () => {
  const assignedArea = 'Koramangala Block 5';
  const shiftTime = '7:00 AM – 3:00 PM';

  const [tasks, setTasks] = useState([
    { id: 1, type: 'Wet Waste', time: '8:30 AM', status: 'Pending' },
    { id: 2, type: 'Dry Waste', time: '11:00 AM', status: 'Pending' },
  ]);

  const [checkedIn, setCheckedIn] = useState(false);

  const handleComplete = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, status: 'Completed' } : task
      )
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-green-600 text-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-2xl font-semibold">Welcome back, Rajesh!</h2>
        <p className="text-sm mt-1">Let’s make Bangalore cleaner and greener 🌱</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h4 className="text-gray-500 text-sm">Assigned Area</h4>
          <p className="text-lg font-semibold">{assignedArea}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <h4 className="text-gray-500 text-sm">Today’s Pickups</h4>
          <p className="text-lg font-semibold">{tasks.length}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <h4 className="text-gray-500 text-sm">Completed</h4>
          <p className="text-lg font-semibold">
            {tasks.filter(task => task.status === 'Completed').length}
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow flex items-center justify-between">
          <div>
            <h4 className="text-gray-500 text-sm">Shift</h4>
            <p className="text-lg font-semibold">{shiftTime}</p>
          </div>
          <FaClock className="text-green-600 text-xl" />
        </div>
      </div>

      {/* Attendance */}
      <div className="bg-white p-5 rounded-lg shadow mb-6 flex justify-between items-center">
        <div>
          <h4 className="text-gray-600">Attendance</h4>
          <p className="text-sm text-gray-500">
            {checkedIn ? 'Checked in for today' : 'Not checked in'}
          </p>
        </div>
        <button
          onClick={() => setCheckedIn(!checkedIn)}
          className={`px-4 py-2 rounded-md text-white font-semibold ${
            checkedIn ? 'bg-red-500' : 'bg-green-600'
          }`}
        >
          {checkedIn ? 'Check Out' : 'Check In'}
        </button>
      </div>

      {/* Tasks */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-bold mb-4">Today's Tasks</h3>
        <div className="space-y-3">
          {tasks.map(task => (
            <div
              key={task.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-md"
            >
              <div>
                <p className="font-medium">{task.type}</p>
                <p className="text-sm text-gray-500">Time: {task.time}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm px-2 py-1 rounded-full ${
                    task.status === 'Completed'
                      ? 'bg-green-200 text-green-700'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {task.status}
                </span>
                {task.status === 'Pending' && (
                  <button
                    onClick={() => handleComplete(task.id)}
                    className="text-sm px-3 py-1 bg-green-600 text-white rounded shadow"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications & Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FaBell /> Notifications
          </h3>
          <ul className="text-sm space-y-2">
            <li>🟢 Admin: New safety gear distribution tomorrow.</li>
            <li>🔔 Reminder: Training on hygiene protocol at 4 PM.</li>
            <li>✅ You completed 8 pickups yesterday!</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-4">
          <button className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded shadow">
            <FaMapMarkedAlt />
            View Pickup Map
          </button>
          <button className="flex items-center justify-center gap-2 bg-white border border-green-500 text-green-700 font-semibold py-3 px-6 rounded shadow">
            <FaUserShield />
            Digital Worker ID
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;
