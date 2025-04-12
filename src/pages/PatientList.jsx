import React from 'react';
import { List, ListItem, ListItemText, Button, Divider } from '@mui/material';

const PatientList = ({ patients, onSelect, onHistory }) => {
  return (
    <List>
      {patients.map((patient) => (
        <React.Fragment key={patient._id}>
          <ListItem>
            <ListItemText
              primary={patient.userId?.username || 'Unknown'}
              secondary={patient.contact}
            />
            <Button onClick={() => onSelect(patient)} variant="contained" size="small" className="mr-2">
              Add Vaccine
            </Button>
            <Button onClick={() => onHistory(patient)} variant="outlined" size="small">
              View History
            </Button>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default PatientList;