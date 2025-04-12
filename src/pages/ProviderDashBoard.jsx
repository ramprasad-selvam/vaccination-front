import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Box, Typography, Button, Paper } from '@mui/material';
import PatientList from './PatientList';
import VaccinationForm from './VaccinationForm';
import HistoryViewer from './HistoryViewer';
import patientList from '../api/patient.json';

const ProviderDashBoard = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [view, setView] = useState('list');

  const fetchPatients = async () => {
    // try {
    //   const res = await axios.get('/api/patient', {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
      setPatients(patientList);
    // } catch (err) {
    //   console.error('Failed to load patients', err);
    // }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    setView('form');
  };

  return (
    <Box className="p-6">
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.username} 👨‍⚕️
      </Typography>

      <Box className="flex flex-col md:flex-row gap-4">
        <Paper className="p-4 w-full md:w-2/3">
          {view === 'list' && (
            <PatientList
              patients={patients}
              onSelect={handleSelectPatient}
              onHistory={(p) => {
                setSelectedPatient(p);
                setView('history');
              }}
            />
          )}

          {view === 'form' && selectedPatient && (
            <VaccinationForm
              patient={selectedPatient}
              onBack={() => setView('list')}
            />
          )}

          {view === 'history' && selectedPatient && (
            <HistoryViewer
              patient={selectedPatient}
              onBack={() => setView('list')}
            />
          )}
        </Paper>

        <Paper className="p-4 w-full md:w-1/3">
          <Typography variant="h6">Dashboard Tools</Typography>
          <Button onClick={() => setView('list')} variant="outlined" fullWidth className="my-2">
            View Patients
          </Button>
          <Button
            onClick={() => selectedPatient && setView('form')}
            variant="outlined"
            fullWidth
            disabled={!selectedPatient}
          >
            Record Vaccination
          </Button>
          <Button
            onClick={() => selectedPatient && setView('history')}
            variant="outlined"
            fullWidth
            disabled={!selectedPatient}
          >
            View History
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default ProviderDashBoard;
