import * as React from 'react';
import { Route, Routes, NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PersonIcon from '@mui/icons-material/Person';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState("1");
  const handleChange=(event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction value="1" icon={<HomeIcon />} />
        <BottomNavigationAction value="2" icon={<LocationSearchingIcon />} />
        <BottomNavigationAction value="3" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}