import { useState, type ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled, useTheme } from '@mui/material/styles';
import useIsMobile from '../../Core/hook/useIsMobile';
import LogoImg from '../../Images/tobiglogo.png';
import Footer from '../../Component/Footer';


const navItems = ['About', 'Projects', 'Experience', 'Contact'];
const headerHeight = 64;

interface ButtonAppBarProps {
  children?: ReactNode;
}

export default function ButtonAppBar({ children }: ButtonAppBarProps) {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderNavButtons = (onClick?: () => void, stacked = false) =>
    navItems.map((item) => (
      <Button
        key={item}
        color="inherit"
        onClick={onClick}
        sx={{
          textTransform: "none",
          fontSize: "16px",
          fontFamily: "Geist",
          fontWeight: 500,
          backgroundColor: "transparent",
          color: "inherit",
          width: stacked ? "100%" : "auto",
          justifyContent: stacked ? "flex-start" : "center",
          borderRadius: "24px",
          ".nav-label": {
            position: "relative",
            display: "inline-block",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: "1px",
              width: 0,
              height: "2px",
              backgroundColor: "#2563eb",
              transition: "width 250ms ease",
            },
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: "#2563eb",
            ".nav-label::after": {
              width: "100%",
            },
          },
          // "&:active, &:focus, &:focus-visible": {
          //   backgroundColor: "transparent",
          //   color: "#2563eb",
          //   ".nav-label::after": {
          //     width: "100%",
          //   },
          // },
        }}
      >
        <Box component="span" className="nav-label">
          {item}
        </Box>
      </Button>
    ));

  const PaddingBody = styled("div")(({ theme }) => ({
    height: headerHeight,
  }));


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          background: theme.palette.topbar.toolbar,
          backdropFilter: 'blur(100px)',
          boxShadow: 'none',
          color: theme.palette.topbar.toolbartext,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: { xs: 64, md: headerHeight }
        }}>
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
              aria-label={mobileOpen ? "close navigation menu" : "open navigation menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          ) : (

            <>
              <Box
                sx={{
                  display: 'flex',
                  gap: { md: 1.5, lg: 2 },
                  fontFamily: "Geist",
                  fontWeight: 500,
                  fontSize: "22px",
                  textTransform: "none",
                }}>
                {renderNavButtons()}
                <Button
                  sx={{
                    borderRadius: "24px",
                    background: "linear-gradient(to right, #7748ec, #6a9cf3)",
                    color: "#fff",
                    textTransform: "none",
                    px: "24px",
                    py: "6px",
                    fontSize: "16px",
                    fontWeight: 500,
                    "&:hover": {
                      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </Box>
            </>
          )}

        </Toolbar>

        {isMobile && (
          <Collapse in={mobileOpen} timeout={300} unmountOnExit>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',
                px: 2,
                pb: 2,
                gap: 1,
                borderTop: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.topbar.toolbar,
                color: theme.palette.topbar.toolbartext,
              }}
            >
              {renderNavButtons(() => setMobileOpen(false), true)}
              <Button
                onClick={() => setMobileOpen(false)}
                sx={{
                  width: '100%',
                  borderRadius: "24px",
                  background: "linear-gradient(to right, #7748ec, #6a9cf3)",
                  color: "#fff",
                  textTransform: "none",
                  px: "24px",
                  py: "6px",
                  fontSize: "16px",
                  fontWeight: 500,
                  '&:hover': {
                    background: "linear-gradient(to right, #7748ec, #6a9cf3)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  },
                }}
              >
                Get in Touch
              </Button>
            </Box>
          </Collapse>
        )}
      </AppBar>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: isMobile ? 1 : 3,
          width: "100%",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <PaddingBody />
        {children}
        <Footer />
      </Box>
    </Box>
  );
}