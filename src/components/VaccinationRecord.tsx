import React from 'react';

interface VaccinationRecordProps {
  vaccineId: string;
  doseNumber: number;
  dateAdministered: string;
  notes: string;
  status: string;
}

const VaccinationRecord: React.FC<VaccinationRecordProps> = ({ vaccineId, doseNumber, dateAdministered, notes, status }) => {
  return (
    <div className="vaccination-record">
      <h3>Vaccine ID: {vaccineId}</h3>
      <p>Dose Number: {doseNumber}</p>
      <p>Date Administered: {new Date(dateAdministered).toLocaleDateString()}</p>
      <p>Notes: {notes}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default VaccinationRecord;
