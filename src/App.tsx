import React from 'react';
import './App.css';
import ButtonAppBar from './Drawer/Menu/index';
import withAppProviders from "./withAppProviders";
import { Box } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Drawer/Router/Routes";

const App: React.FC = () => (
  <Box>
    <BrowserRouter>
      <ButtonAppBar>
        <AppRoutes />
      </ButtonAppBar>
    </BrowserRouter>
  </Box>
);

export default withAppProviders(App);
