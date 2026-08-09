import React from 'react';
import './App.css';
import ButtonAppBar from './Drawer/Menu/index';
import withAppProviders from "./withAppProviders";
import { Box } from '@mui/material';

const App: React.FC = () => (
  <Box data-testid="pos-ui-app">
    <Box>
      <ButtonAppBar>
      </ButtonAppBar>
    </Box>
  </Box>
);

export default withAppProviders(App);
