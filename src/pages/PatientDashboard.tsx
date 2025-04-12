// components/PatientDashboard.js
import React, { useState, useEffect } from 'react';
import { getCompletedVaccinations, getScheduledVaccinations } from '../api/services/patientService';
import { Vaccination } from '../types/index';
import { IPatientVaccinationResponse } from '../types';
import { toast } from 'react-toastify';
import VaccinationCard from '../components/core/VaccinationCard';
import Button from '../components/reusable/Button';

const PatientDashboard: React.FC = () => {
  const [vaccinations, setVaccinations] = useState<Vaccination[]>([]);
  const [tab, setTab] = useState<'scheduled' | 'completed'>('scheduled');

  useEffect(() => {
    const fetchVaccinations = async () => {
      let response: IPatientVaccinationResponse;
      if (tab === 'scheduled') {
        response = await getScheduledVaccinations();
      } else {
        response = await getCompletedVaccinations();
      }
      const data: Vaccination[] = response.data;
      if (!data) {
        toast.error(response.message);
      } else {
        toast.success(response.message);
        setVaccinations(data);
      }
    };
    fetchVaccinations();
  }, [tab]);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="flex gap-4 mb-4 justify-evenly">
        <Button
          text='Scheduled'
          style={`px-4 py-2 ${tab === 'scheduled' ? 'bg-blue-600 text-white' : 'bg-transparent text-black'}`}
          onClick={() => setTab('scheduled')}
        />
        <Button
          text='Completed'
          style={`px-4 py-2 ${tab === 'completed' ? 'bg-blue-600 text-white' : 'bg-transparent text-black'}`}
          onClick={() => setTab('completed')}
        />
      </div>
      <div className="flex flex-col items-center">
        {vaccinations.map(vaccine => (
          <VaccinationCard key={vaccine._id} vaccination={vaccine} />
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;
