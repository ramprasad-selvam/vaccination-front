// components/VaccinationCard.js
import React from 'react';
import { Vaccination } from '../../types/index';

interface VaccinationCardProps {
  vaccination: Vaccination;
}

const VaccinationCard: React.FC<VaccinationCardProps> = ({ vaccination }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4 shadow-lg w-full max-w-md mx-auto">
      <h3 className="text-xl font-bold">{vaccination.vaccineId.name}</h3>
      <p className="mb-2"><strong>Manufacturer:</strong> {vaccination.vaccineId.manufacturer}</p>
      <p className="mb-2"><strong>Provider:</strong> {vaccination.providerId.organization}</p>
      <p className="mb-2"><strong>Contact:</strong> {vaccination.providerId.contact}</p>
      <p className="mb-2"><strong>Address:</strong> {vaccination.providerId.address}</p>
      <p className="mb-2"><strong>Dose Number:</strong> {vaccination.doseNumber}</p>
      <p className="mb-2"><strong>Date Administered:</strong> {new Date(vaccination.dateAdministered).toLocaleDateString()}</p>
      <p className="mb-2"><strong>Notes:</strong> {vaccination.notes}</p>
    </div>
  );
};

export default VaccinationCard;
