import React from 'react';
import { Box, Button, Card, Grid, Typography } from '@mui/material';
import { useStyles } from '../../theme/appStyles';
import thamayanthiImage from '../../Images/thamayanthi.png';
// import useIsMobile from '../../Core/hook/useIsMobile';
import DownloadIcon from "@mui/icons-material/Download";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { Link } from "react-router-dom";
const Profile: React.FC = () => {
  const classes = useStyles();
  // const isMobile = useIsMobile();

  const aiProducts = [
    {
      id: 1,
      icon: "💬",
      title: "AI Chatbot",
      description: "24/7 intelligent conversations that delight customers.",
    },
    {
      id: 2,
      icon: "🤖",
      title: "AI Receptionist",
      description: "Smart virtual reception to handle calls and customer inquiries.",
    },
    {
      id: 3,
      icon: "⚡",
      title: "AI Automation",
      description: "Automate repetitive tasks and improve business productivity.",
    },
    {
      id: 4,
      icon: "📊",
      title: "AI Analytics",
      description: "Turn business data into meaningful insights and smarter decisions.",
    },
  ];

  return (
    <>
      <Grid container>
        <Grid
          size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
          sx={{ textAlign: "center", mt: 4, mb: 2 }}
          className={`${classes.profileHeading} profile-reveal profile-reveal-heading`}
        >

          <Grid container spacing={1} >
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center", mt: 4, mb: 2 }}
              className={`${classes.profileHeading} profile-reveal profile-reveal-heading`}
            >
              <Typography className={classes.profileHeading}>Balakrishnan Thamayanthi</Typography>
            </Grid>
            {thamayanthiImage && (
              <Grid
                size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  px: { xs: 2, sm: 3 },
                }}
                className="profile-reveal profile-reveal-image"
              >
                <Box
                  component="img"
                  src={thamayanthiImage}
                  alt="Profile"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "280px", sm: "240px", md: "300px" },
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </Grid>
            )}
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center" }}
              className="profile-reveal profile-reveal-role"
            >
              <Typography className={classes.secoundHeding}>
                Full Stack Software Engineer
              </Typography>
            </Grid>
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", px: { xs: 2, sm: 3 }, mb: 2 }}
              className="profile-reveal profile-reveal-role"
            >
              <Typography className={classes.secondDescription}>
                Full Stack Software Engineer with 3+ years of experience building modern, user-focused web applications using Laravel, React.js, TypeScript, and MySQL. I specialize in developing reliable solutions and independently managing projects from development to deployment.
              </Typography>
            </Grid>

            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
                px: { xs: 2, sm: 3 },
                textAlign: "center",
              }}
              className="profile-reveal profile-reveal-role"
            >
              <Button
                className={classes.profileButton}
                startIcon={<BusinessCenterIcon />}
              >
                Explore My Work
              </Button>

              <Button
                className={classes.profileOutLineButton}
                startIcon={<DownloadIcon />}
              >
                Download Resume
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
          sx={{
            borderTop: "1px solid #e5e7eb",
            borderBottom: "1px solid #e5e7eb",
            mt: 4,
            mb: 2,
            py: 6,
            px: { xs: 2, sm: 3, md: 4 },
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)",
          }}
          className={`${classes.profileHeading} profile-reveal profile-reveal-heading`}
        >
          {[
            {
              count: "3+",
              label: "Years of Experience",
            },
            {
              count: "10+",
              label: "Projects Completed",
            },
            {
              count: "8+",
              label: "Technologies",
            },
            {
              count: "5+",
              label: "Systems Developed",
            }
          ].map((item, index) => (
            <Grid
              key={index}
              size={{ lg: 3, md: 3, sm: 6, xs: 6 }}
              sx={{
                textAlign: "center",
                py: 2,
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "28px", sm: "32px", md: "36px" },
                  fontWeight: 700,
                  color: "#111827",
                  mb: 1,
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#7748ec",
                  },
                }}
              >
                {item.count}
              </Typography>

              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#4b5563",
                  fontWeight: 500,
                }}
              >
                {item.label}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <Grid
          size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
          sx={{ textAlign: "center", mt: 4, mb: 2 }}
          className={`${classes.profileHeading} profile-reveal profile-reveal-heading`}
        >

          <Grid container spacing={1} >
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center" }}
              className="profile-reveal profile-reveal-role"
            >
              <Typography className={`${classes.h2GradientHeading} profile-reveal profile-reveal-heading`}>
                Projects & Systems Developed
              </Typography>
            </Grid>
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", px: { xs: 2, sm: 3 }, mb: 2 }}
              className="profile-reveal profile-reveal-role"
            >
              <Typography className={classes.aiProductSubtitle}>
                Full Stack Software Engineer with 3+ years of experience building modern, user-focused web applications using Laravel, React.js, TypeScript, and MySQL. I specialize in developing reliable solutions and independently managing projects from development to deployment.
              </Typography>
            </Grid>
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", px: { xs: 2, sm: 3 }, mb: 2 }}
              className="profile-reveal profile-reveal-role"
            >
              <Grid container spacing={3}>
                {aiProducts.map((product) => (
                  <Grid
                    key={product.id}
                    size={{ xs: 12, sm: 6, md: 3 }}
                  >
                    <Card className={classes.aiProductCard}>
                      <Box className={classes.aiProductIcon}>
                        {product.icon}
                      </Box>

                      <Typography
                        variant="h5"
                        className={classes.aiProductTitle}
                      >
                        {product.title}
                      </Typography>

                      <Typography className={classes.aiProductDescription}>
                        {product.description}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                flexWrap: "wrap",
                px: { xs: 2, sm: 3 },
                textAlign: "center",
              }}
              className="profile-reveal profile-reveal-role"
            >
              <Button
                className={classes.viewAllProductsButton}
                endIcon={<ArrowRightAltIcon sx={{ fontSize: "32px" }} />}
              >
                View All Projects
              </Button>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </>
  );
};

export default Profile;