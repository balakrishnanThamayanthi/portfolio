import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProviderWrapper } from "./Drawer/Menu/ThemeContext";

interface WithAppProvidersProps { }

/**
 * Higher order function to wrap the application with redux store and other providers
 * @param Component - The component to wrap
 * @returns - A function that returns the wrapped component
 */
const withAppProviders =
  (Component: React.ComponentType<WithAppProvidersProps>) =>
    (props: WithAppProvidersProps) => {
      return (
        <ThemeProviderWrapper>
          <CssBaseline />
          <Component {...props} />
        </ThemeProviderWrapper>
      );
    };

export default withAppProviders;
