import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  Paper,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';

const HistoryViewer = ({ patient, onBack }) => {
  const { token } = useSelector((state) => state.auth);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(`/api/patients/${patient._id}/history`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHistory(res.data);
    } catch (err) {
      console.error('Failed to fetch history', err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Vaccination History for {patient.userId?.username}
      </Typography>
      {history.length === 0 ? (
        <Typography>No records found.</Typography>
      ) : (
        history.map((record, idx) => (
          <Paper key={idx} className="p-4 mb-2">
            <Typography>
              <strong>Vaccine:</strong> {record.vaccineId?.name} ({record.vaccineId?.manufacturer})
            </Typography>
            <Typography>
              <strong>Dose:</strong> {record.doseNumber}
            </Typography>
            <Typography>
              <strong>Date:</strong> {new Date(record.dateAdministered).toLocaleDateString()}
            </Typography>
            <Typography>
              <strong>Notes:</strong> {record.notes || 'N/A'}
            </Typography>
          </Paper>
        ))
      )}
      <Button onClick={onBack} variant="outlined" className="mt-4">
        Back
      </Button>
    </Box>
  );
};

export default HistoryViewer;
