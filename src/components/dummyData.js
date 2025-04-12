// dummyData.js
export const scheduledVaccinations = [
    {
      _id: '1',
      vaccineId: { name: 'COVID-19 Vaccine', manufacturer: 'Pfizer', dosesRequired: 2, ageGroup: '18+' },
      providerId: { organization: 'Health Clinic A', contact: '123-456-7890', address: '123 Main St' },
      doseNumber: 1,
      dateAdministered: new Date('2025-04-15'),
      notes: 'First dose scheduled',
      status: 'scheduled'
    },
    {
      _id: '2',
      vaccineId: { name: 'Flu Vaccine', manufacturer: 'Moderna', dosesRequired: 1, ageGroup: 'All ages' },
      providerId: { organization: 'Health Clinic B', contact: '987-654-3210', address: '456 Elm St' },
      doseNumber: 1,
      dateAdministered: new Date('2025-04-20'),
      notes: 'Annual flu shot',
      status: 'scheduled'
    }
  ];
  
  export const completedVaccinations = [
    {
      _id: '3',
      vaccineId: { name: 'COVID-19 Vaccine', manufacturer: 'Pfizer', dosesRequired: 2, ageGroup: '18+' },
      providerId: { organization: 'Health Clinic A', contact: '123-456-7890', address: '123 Main St' },
      doseNumber: 2,
      dateAdministered: new Date('2025-03-15'),
      notes: 'Second dose completed',
      status: 'completed'
    },
    {
      _id: '4',
      vaccineId: { name: 'Hepatitis B Vaccine', manufacturer: 'GSK', dosesRequired: 3, ageGroup: 'All ages' },
      providerId: { organization: 'Health Clinic C', contact: '555-555-5555', address: '789 Oak St' },
      doseNumber: 3,
      dateAdministered: new Date('2025-02-10'),
      notes: 'Final dose completed',
      status: 'completed'
    }
  ];
  