import axios from 'axios';

const BASE_API_URL = 'http://localhost:4000/api/v1';

const PATIENTS_API_URL = `${BASE_API_URL}/patients`; 

export const getScheduledVaccinations = async (patientId: string) => {
  const response = await axios.get(`${PATIENTS_API_URL}/${patientId}/scheduled-vaccinations`);
  return response.data;
};

export const getCompletedVaccinations = async (patientId: string) => {
  const response = await axios.get(`${PATIENTS_API_URL}/${patientId}/completed-vaccinations`);
  return response.data;
};
