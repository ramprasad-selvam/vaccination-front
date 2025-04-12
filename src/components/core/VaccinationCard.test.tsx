// components/VaccinationCard.test.js
import { render } from '@testing-library/react';
import VaccinationCard from './VaccinationCard';
import { Vaccination } from '../../types/index';

const mockVaccination: Vaccination = {
  _id: '1',
  vaccineId: { _id: '1', name: 'COVID-19 Vaccine', manufacturer: 'Pfizer', dosesRequired: 2, ageGroup: '18+' },
  providerId: { _id: '1', organization: 'Health Clinic A', contact: '123-456-7890', address: '123 Main St' },
  doseNumber: 1,
  dateAdministered: new Date('2025-04-15'),
  notes: 'First dose scheduled',
  status: 'scheduled'
};

test('renders VaccinationCard with correct details', () => {
  const { getByText } = render(<VaccinationCard vaccination={mockVaccination} />);

  expect(getByText('COVID-19 Vaccine')).toBeInTheDocument();
  expect(getByText('Manufacturer: Pfizer')).toBeInTheDocument();
  expect(getByText('Provider: Health Clinic A')).toBeInTheDocument();
  expect(getByText('Contact: 123-456-7890')).toBeInTheDocument();
  expect(getByText('Address: 123 Main St')).toBeInTheDocument();
  expect(getByText('Dose Number: 1')).toBeInTheDocument();
  expect(getByText('Date Administered: 4/15/2025')).toBeInTheDocument();
  expect(getByText('Notes: First dose scheduled')).toBeInTheDocument();
});
