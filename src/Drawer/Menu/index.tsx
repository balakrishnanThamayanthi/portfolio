import { useState, type ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled, useTheme } from '@mui/material/styles';
import useIsMobile from '../../Core/hook/useIsMobile';
import LogoImg from '../../Images/tobiglogo.png';


const navItems = ['About', 'Projects', 'Experience', 'Contact'];
const headerHeight = 53;

interface ButtonAppBarProps {
  children?: ReactNode;
}

export default function ButtonAppBar({ children }: ButtonAppBarProps) {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNavButtons = () =>
    navItems.map((item) => (
      <Button key={item} color="inherit" sx={{ fontWeight: 600 }}>
        {item}
      </Button>
    ));

  const PaddingBody = styled("div")(({ theme }) => ({
    height: headerHeight,
  }));


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          background: theme.palette.topbar.toolbar,
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
          color: theme.palette.topbar.toolbartext,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', minHeight: { xs: 64, md: headerHeight } }}>
          <Box
            component="img"
            src={LogoImg}
            alt="Company logo"
            sx={{
              height: { xs: 36, md: 50 },
              width: 'auto',
              objectFit: 'contain',
              display: 'block',
            }}
          />

          {isMobile ? (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open navigation menu"
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: { md: 1.5, lg: 2 } }}>{renderNavButtons()}</Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            background: '#f8fafc',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setMobileOpen(false)} aria-label="close navigation menu">
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item}
              color="inherit"
              sx={{
                justifyContent: 'flex-start',
                fontWeight: 600,
                color: '#181483',
                borderRadius: '8px',
                '&:hover': {
                  backgroundColor: '#e0e7ff',
                },
              }}
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: isMobile ? 1 : 3,
          width: "100%",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <PaddingBody />
        {children}

      </Box>
    </Box>
  );
}