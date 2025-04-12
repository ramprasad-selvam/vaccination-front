// components/PatientDashboard.test.js
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PatientDashboard from './PatientDashboard';
import { getCompletedVaccinations, getScheduledVaccinations } from '../api/services/patientService';
import { Vaccination } from '../types/index';

jest.mock('../api/services/patientService');

const mockScheduledVaccinations: Vaccination[] = [
  {
    _id: '1',
    vaccineId: { _id: '1', name: 'COVID-19 Vaccine', manufacturer: 'Pfizer', dosesRequired: 2, ageGroup: '18+' },
    providerId: { _id: '1', organization: 'Health Clinic A', contact: '123-456-7890', address: '123 Main St' },
    doseNumber: 1,
    dateAdministered: new Date('2025-04-15'),
    notes: 'First dose scheduled',
    status: 'scheduled'
  }
];

const mockCompletedVaccinations: Vaccination[] = [
  {
    _id: '2',
    vaccineId: { _id: '2', name: 'Flu Vaccine', manufacturer: 'Moderna', dosesRequired: 1, ageGroup: 'All ages' },
    providerId: { _id: '2', organization: 'Health Clinic B', contact: '987-654-3210', address: '456 Elm St' },
    doseNumber: 1,
    dateAdministered: new Date('2025-03-10'),
    notes: 'Annual flu shot',
    status: 'completed'
  }
];

test('renders PatientDashboard with scheduled vaccinations by default', async () => {
  (getScheduledVaccinations as jest.Mock).mockResolvedValue({ data: mockScheduledVaccinations, message: 'Scheduled vaccinations fetched successfully' });

  render(<PatientDashboard />);

  await waitFor(() => {
    expect(screen.getByText('COVID-19 Vaccine')).toBeInTheDocument();
  });
});

test('renders PatientDashboard with completed vaccinations when tab is clicked', async () => {
  (getScheduledVaccinations as jest.Mock).mockResolvedValue({ data: mockScheduledVaccinations, message: 'Scheduled vaccinations fetched successfully' });
  (getCompletedVaccinations as jest.Mock).mockResolvedValue({ data: mockCompletedVaccinations, message: 'Completed vaccinations fetched successfully' });

  render(<PatientDashboard />);

  fireEvent.click(screen.getByText('Completed'));

  await waitFor(() => {
    expect(screen.getByText('Flu Vaccine')).toBeInTheDocument();
  });
});
