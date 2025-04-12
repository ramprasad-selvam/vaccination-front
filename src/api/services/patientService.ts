

// services/patientService.ts
import api from '..';
import { IPatientVaccinationResponse } from '../../types';
import API from '../config';


export const getScheduledVaccinations = async (): Promise<IPatientVaccinationResponse> => {
  const response = await API.get( api.patients + `/vaccinations/scheduled`);
  return response.data;
};

export const getCompletedVaccinations = async (): Promise<IPatientVaccinationResponse> => {
  const response = await API.get( api.patients + `/vaccinations/completed`);
  return response.data;
};
