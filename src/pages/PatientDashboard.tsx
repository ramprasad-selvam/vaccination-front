// components/PatientDashboard.js
import React, { useState } from 'react';
import { scheduledVaccinations, completedVaccinations } from '../components/dummyData';

const PatientDashboard = () => {
  const [tab, setTab] = useState('scheduled');

  const vaccinations = tab === 'scheduled' ? scheduledVaccinations : completedVaccinations;

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '16px'
  };

  const tabsStyle = {
    display: 'flex',
    gap: '16px'
  };

  const tabStyle = (isActive) => ({
    padding: '8px 16px',
    cursor: 'pointer',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: isActive ? '#4f46e5' : 'transparent',
    color: isActive ? 'white' : 'black'
  });

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '16px',
    marginBottom: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div style={tabsStyle}>
        <button style={tabStyle(tab === 'scheduled')} onClick={() => setTab('scheduled')}>Scheduled</button>
        <button style={tabStyle(tab === 'completed')} onClick={() => setTab('completed')}>Completed</button>
      </div>
      <div className="vaccination-list" style={{ marginTop: '16px' }}>
        {vaccinations.map(vaccine => (
          <div key={vaccine._id} style={cardStyle}>
            <h3 style={titleStyle}>{vaccine.vaccineId.name}</h3>
            <p>Provider: {vaccine.providerId.organization}</p>
            <p>Dose Number: {vaccine.doseNumber}</p>
            <p>Date Administered: {new Date(vaccine.dateAdministered).toLocaleDateString()}</p>
            <p>Notes: {vaccine.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientDashboard;





// // components/PatientDashboard.js
// import React, { useState, useEffect } from 'react';
// import { getCompletedVaccinations, getScheduledVaccinations } from '../api/services/patientServices';
// import { Vaccination } from '../types/type';

// interface PatientDashboardProps {
//   patientId: string;
// }

// const PatientDashboard: React.FC<PatientDashboardProps> = ({ patientId }) => {
//   const [vaccinations, setVaccinations] = useState<Vaccination[]>([]);
//   const [tab, setTab] = useState<'scheduled' | 'completed'>('scheduled');

//   useEffect(() => {
//     const fetchVaccinations = async () => {
//       let data: Vaccination[];
//       if (tab === 'scheduled') {
//         data = await getScheduledVaccinations(patientId);
//       } else {
//         data = await getCompletedVaccinations(patientId);
//       }
//       setVaccinations(data);
//     };
//     fetchVaccinations();
//   }, [patientId, tab]);

//   return (
//     <div className="container mx-auto p-4">
//       <div className="tabs">
//         <button className={`tab ${tab === 'scheduled' ? 'tab-active' : ''}`} onClick={() => setTab('scheduled')}>Scheduled</button>
//         <button className={`tab ${tab === 'completed' ? 'tab-active' : ''}`} onClick={() => setTab('completed')}>Completed</button>
//       </div>
//       <div className="vaccination-list mt-4">
//         {vaccinations.map(vaccine => (
//           <div key={vaccine._id} className="card mb-4 p-4 shadow-lg">
//             <h3 className="text-xl font-bold">{vaccine.vaccineId.name}</h3>
//             <p>Provider: {vaccine.providerId.organization}</p>
//             <p>Dose Number: {vaccine.doseNumber}</p>
//             <p>Date Administered: {new Date(vaccine.dateAdministered).toLocaleDateString()}</p>
//             <p>Notes: {vaccine.notes}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PatientDashboard;
