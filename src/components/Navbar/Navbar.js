import React from 'react';
import './Navbar.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Navbar() {
  return (
    <div>
    <img src="/logo/logo.png" className='img-logo' alt="Description" />
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      // options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </div>
  );
}
