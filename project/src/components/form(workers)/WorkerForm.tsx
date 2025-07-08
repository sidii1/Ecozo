import React, { useState } from 'react';
import { addWorker } from '../../mockDataML';
import { WorkerData } from '../../mockDataML';
// import { v4 as uuidv4 } from 'uuid';

const WorkerForm: React.FC = () => {
  const [formData, setFormData] = useState<Omit<WorkerData, 'id'>>({
    name: '',
    age: 0,
    gender: '',
    location: '',
    workType: '',
    workHoursPerDay: 0,
    daysPerWeek: 0,
    nightShift: false,
    ppeUsage: false,
    protectiveGearCondition: '',
    exposureLevel: '',
    hasHealthInsurance: false,
    lastCheckupDate: '',
    knownConditions: [],
    airQualityIndex: 0,
    incomeLevel: '',
    accessToCleanWater: false,
    healthRiskCategory: 'Low',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleKnownConditionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const conditions = e.target.value.split(',').map((c) => c.trim());
    setFormData((prev) => ({
      ...prev,
      knownConditions: conditions,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newWorker: WorkerData = {
      id: uuidv4(),
      ...formData,
      age: Number(formData.age),
      workHoursPerDay: Number(formData.workHoursPerDay),
      daysPerWeek: Number(formData.daysPerWeek),
      airQualityIndex: Number(formData.airQualityIndex),
    };

    addWorker(newWorker);
    alert('Worker added!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded shadow-md">
      <input name="name" placeholder="Name" onChange={handleChange} className="p-2 border rounded w-full" />
      <input name="age" type="number" placeholder="Age" onChange={handleChange} className="p-2 border rounded w-full" />
      <select name="gender" onChange={handleChange} className="p-2 border rounded w-full">
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
      <input name="location" placeholder="Location" onChange={handleChange} className="p-2 border rounded w-full" />
      <select name="workType" onChange={handleChange} className="p-2 border rounded w-full">
        <option value="">Select Work Type</option>
        <option>Sewage Cleaner</option>
        <option>Dry Waste Picker</option>
        <option>Wet Waste Picker</option>
        <option>Drain Cleaner</option>
        <option>River Cleaner</option>
        <option>Biomedical Waste Collector</option>
        <option>Electronic Waste Handler</option>
        <option>Street Sweeper</option>
      </select>
      <input name="workHoursPerDay" type="number" placeholder="Work Hours Per Day" onChange={handleChange} className="p-2 border rounded w-full" />
      <input name="daysPerWeek" type="number" placeholder="Days Per Week" onChange={handleChange} className="p-2 border rounded w-full" />
      <label className="flex items-center space-x-2">
        <input name="nightShift" type="checkbox" onChange={handleChange} />
        <span>Night Shift</span>
      </label>
      <label className="flex items-center space-x-2">
        <input name="ppeUsage" type="checkbox" onChange={handleChange} />
        <span>PPE Used</span>
      </label>
      <input name="protectiveGearCondition" placeholder="Gear Condition (e.g. Good, Fair, None)" onChange={handleChange} className="p-2 border rounded w-full" />
      <input name="exposureLevel" placeholder="Exposure Level (e.g. Low, Medium, High)" onChange={handleChange} className="p-2 border rounded w-full" />
      <label className="flex items-center space-x-2">
        <input name="hasHealthInsurance" type="checkbox" onChange={handleChange} />
        <span>Has Health Insurance</span>
      </label>
      <input name="lastCheckupDate" type="date" onChange={handleChange} className="p-2 border rounded w-full" />
      <input name="knownConditions" placeholder="Known Conditions (comma-separated)" onChange={handleKnownConditionsChange} className="p-2 border rounded w-full" />
      <input name="airQualityIndex" type="number" placeholder="Air Quality Index" onChange={handleChange} className="p-2 border rounded w-full" />
      <select name="incomeLevel" onChange={handleChange} className="p-2 border rounded w-full">
        <option value="">Select Income Level</option>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <label className="flex items-center space-x-2">
        <input name="accessToCleanWater" type="checkbox" onChange={handleChange} />
        <span>Access to Clean Water</span>
      </label>
      <select name="healthRiskCategory" onChange={handleChange} className="p-2 border rounded w-full">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default WorkerForm;
