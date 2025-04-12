import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  MenuItem,
  TextField,
  Button,
  Box,
} from '@mui/material';
import { useSelector } from 'react-redux';
import vaccineList from '../api/vaccines.json'

const VaccinationForm = ({ patient, onBack }) => {
  const { token, user } = useSelector((state) => state.auth);
  const [vaccines, setVaccines] = useState([]);
  const [formData, setFormData] = useState({
    vaccineId: '',
    doseNumber: '',
    dateAdministered: '',
    notes: '',
  });

  const fetchVaccines = async () => {
    // try {
    //   const res = await axios.get('/api/vaccines', {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });
      setVaccines(vaccineList);
    // } catch (err) {
    //   console.error('Error fetching vaccines:', err);
    // }
  };

  useEffect(() => {
    fetchVaccines();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/patients/${patient._id}/history`, {
        ...formData,
        providerId: user._id,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Vaccination record added!');
      onBack();
    } catch (err) {
      console.error('Failed to add record', err);
      alert('Failed to add vaccination');
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Record Vaccination for {patient.userId?.username}
      </Typography>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextField
          select
          label="Vaccine"
          fullWidth
          required
          value={formData.vaccineId}
          onChange={(e) => setFormData({ ...formData, vaccineId: e.target.value })}
        >
          {vaccines.map((vaccine) => (
            <MenuItem key={vaccine._id} value={vaccine._id}>
              {vaccine.name} ({vaccine.manufacturer})
            </MenuItem>
          ))}
        </TextField>
        <TextField
          type="number"
          label="Dose Number"
          fullWidth
          required
          value={formData.doseNumber}
          onChange={(e) => setFormData({ ...formData, doseNumber: e.target.value })}
        />
        <TextField
          type="date"
          label="Date Administered"
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
          value={formData.dateAdministered}
          onChange={(e) => setFormData({ ...formData, dateAdministered: e.target.value })}
        />
        <TextField
          label="Notes"
          fullWidth
          multiline
          rows={3}
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
        />
        <Box className="flex gap-4 mt-4">
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={onBack} variant="outlined">
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};
