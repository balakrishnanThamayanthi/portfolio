import React from 'react';
import { Box, Button, Card, Grid, Tooltip, Typography } from '@mui/material';
import { useStyles } from '../../theme/appStyles';
import thamayanthiImage from '../../Images/thamayanthi.png';
// import useIsMobile from '../../Core/hook/useIsMobile';
import DownloadIcon from "@mui/icons-material/Download";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import { Link } from "react-router-dom";
// import { FaReact } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si";
// import { SiLaravel } from "react-icons/si";
// import { SiMysql } from "react-icons/si";
// import { SiGit } from "react-icons/si";
// import { SiBitbucket } from "react-icons/si";
// import { SiPostman } from "react-icons/si";
// import { SiCpanel } from "react-icons/si";


const Profile: React.FC = () => {
  const classes = useStyles();
  // const isMobile = useIsMobile();

  const aiProducts = [
    {
      id: 5,
      icon: "👥",
      title: "HR & Workforce Management",
      description:
        "Manage employees, attendance, scheduling, payroll, biometric verification, GPS-based geofencing, and workforce analytics in one centralized platform.",
    },
    {
      id: 6,
      icon: "🛡️",
      title: "Insurance Policy & Client Management",
      description:
        "Streamline client records, insurance policies, coverage tracking, payments, staff management, role-based access, and automated notifications.",
    },
    {
      id: 7,
      icon: "📦",
      title: "Procurement & Inventory Management",
      description:
        "Optimize purchasing with supplier price comparisons, procurement workflows, inventory tracking, stock movements, price history, and operational reports.",
    },
    {
      id: 8,
      icon: "🎓",
      title: "Tutorial Management System",
      description:
        "Manage students, teachers, parents, class schedules, attendance, payments, notifications, and academic workflows through role-based access.",
    },
  ];

  // const specializationItems = [
  //   {
  //     icon: "⚡",
  //     title: "Full-Stack Development",
  //     description:
  //       "Building end-to-end web applications using React.js, TypeScript, MUI, Laravel, Node.js, and MySQL.",
  //   },
  //   {
  //     icon: "👨‍💻",
  //     title: "Independent Development",
  //     description:
  //       "Independently developing complete business management systems, from requirements analysis and architecture to testing and deployment.",
  //   },
  //   {
  //     icon: "🔗",
  //     title: "API Development & Integration",
  //     description:
  //       "Developing RESTful APIs and integrating third-party services to create reliable, connected applications.",
  //   },
  //   {
  //     icon: "🔒",
  //     title: "Secure Application Development",
  //     description:
  //       "Implementing authentication, role-based access control, data validation, and secure application workflows.",
  //   },
  //   {
  //     icon: "🗄️",
  //     title: "Database Management",
  //     description:
  //       "Designing relational databases, managing MySQL data, and developing efficient data-driven business solutions.",
  //   },
  //   {
  //     icon: "🎯",
  //     title: "Business System Solutions",
  //     description:
  //       "Creating reusable modules for HR, insurance, procurement, inventory, and tutorial management systems.",
  //   },
  // ];

  const benefits = [
    { icon: "✓", title: "Independent Project Development" },
    { icon: "✓", title: "Full-Stack Application Development" },
    { icon: "✓", title: "Multi-Technology Adaptability" },
    { icon: "✓", title: "Client Communication & Collaboration" },
    { icon: "✓", title: "MySQL Database Management" },
    { icon: "✓", title: "RESTful API Development" },
    { icon: "✓", title: "Modular & Reusable Architecture" },
    { icon: "✓", title: "Third-Party API Integration" },
    { icon: "✓", title: "End-to-End Project Delivery" },
    { icon: "✓", title: "Application Troubleshooting & Bug Fixing" },
    { icon: "✓", title: "Role-Based Access Control" },
    { icon: "✓", title: "Responsive UI Development" },
    { icon: "✓", title: "Production Deployment & Maintenance" },
    { icon: "✓", title: "Requirements Analysis & System Design" },
    { icon: "✓", title: "Version Control with Git & Bitbucket" },
    { icon: "✓", title: "API Testing with Postman" },
  ];

  // const technologyStack: {
  //   name: string;
  //   icon: React.ReactNode;
  //   color: string;
  // }[] = [
  //   { name: "React", icon: <FaReact />, color: "#61DAFB" },
  //   { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  //   { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  //   { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
  //   { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  //   { name: "Git", icon: <SiGit />, color: "#F05032" },
  //   { name: "Bitbucket", icon: <SiBitbucket />, color: "#0052CC" },
  //   { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  //   { name: "cPanel", icon: <SiCpanel />, color: "#FF6C2C" },
  // ];

  const technologyStack = [
    { name: "React", icon: "⚛", color: "#61DAFB", exp: "3+ years" },
    { name: "TypeScript", icon: "TS", color: "#3178C6", exp: "2+ years" },
    { name: "Laravel", icon: "L", color: "#FF2D20", exp: "2+ years" },
    { name: "Node.js", icon: "JS", color: "#68A063", exp: "1+ years" },
    { name: "MySQL", icon: "SQL", color: "#4479A1", exp: "3+ years" },
    { name: "Git", icon: "Git", color: "#F05032", exp: "4+ years" },
    { name: "Bitbucket", icon: "B", color: "#2684FF", exp: "3+ years" },
    { name: "Postman", icon: "P", color: "#FF6C37", exp: "3+ years" },
    { name: "cPanel", icon: "cP", color: "#FF6C2C", exp: "2+ years" },
  ];

  const backgroundgradient = `linear-gradient(to right, #9333ea, #2563eb)`;
  // const backgroundhovergradient = `linear-gradient(to right, #7e22ce, #1d4ed8)`;

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

            <Grid
              container
              size={{ xs: 12 }}
              spacing={2}
              sx={{ justifyContent: "center", mt: 6 }}
            >
              <Grid
                container
                size={{ xs: 12 }}
                spacing={2}
                sx={{ justifyContent: "center" }}
              >
                <Typography
                  sx={{
                    color: "#4ADE80",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    mb: 1,
                  }}
                >
                  MY TOOLKIT
                </Typography>
              </Grid>
              {technologyStack.map((tech) => (
                <Grid key={tech.name}>
                  <Tooltip
                    arrow
                    placement="top"
                    title={
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          px: 1,
                          py: 0.75,
                        }}
                      >
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            borderRadius: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(255,255,255,0.18)",
                            color: "#FFFFFF",
                            fontSize: "1.1rem",
                            fontWeight: 800,
                            flexShrink: 0,
                            border: "1px solid rgba(255,255,255,0.25)",
                          }}
                        >
                          {tech.icon}
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              fontSize: "0.9rem",
                              fontWeight: 700,
                              color: "#FFFFFF",
                              lineHeight: 1.5,
                            }}
                          >
                            {tech.name}
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: "0.75rem",
                              color: "#F3E8FF",
                              mt: 0.25,
                              fontWeight: 500,
                            }}
                          >
                            {tech.exp} experience
                          </Typography>
                        </Box>
                      </Box>
                    }
                    slotProps={{
                      tooltip: {
                        sx: {
                          background: backgroundgradient,
                          border: "1px solid rgba(255,255,255,0.2)",
                          borderRadius: 2.5,
                          p: 1,
                          boxShadow: "0 8px 24px rgba(79, 70, 229, 0.3)",
                          maxWidth: "none",
                        },
                      },
                      arrow: {
                        sx: {
                          color: "#6D28D9",
                        },
                      },
                    }}
                  >
                    <Grid
                      component="div"
                      tabIndex={0}
                      aria-label={tech.name}
                      sx={{
                        width: { xs: 75, sm: 90 },
                        minHeight: { xs: 82, sm: 95 },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        borderRadius: "14px",
                        bgcolor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(148,163,184,0.18)",
                        cursor: "default",
                        transition: "all 0.25s ease",
                        "&:hover, &:focus-visible": {
                          borderColor: "#4ADE80",
                          bgcolor: "rgba(34,197,94,0.08)",
                          transform: "translateY(-4px)",
                          outline: "none",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: tech.color,
                          fontSize: tech.icon.length > 2 ? "18px" : "27px",
                          fontWeight: 800,
                          lineHeight: 1.2,
                        }}
                      >
                        {tech.icon}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#CBD5E1",
                          fontSize: "11px",
                          fontWeight: 500,
                          textAlign: "center",
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Grid>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>

          </Grid>
        </Grid>


        {/* <Grid
          container
          size={{ xs: 12 }}
          sx={{
            py: { xs: 4, md: 5 },
            px: { xs: 2, sm: 3, md: 4 },
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)",
            borderRadius: "16px",
          }}
          className={`${classes.profileHeading} profile-reveal profile-reveal-heading`}
        >
         
          <Grid
            container
            size={{ xs: 12 }}
            spacing={1.5}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {technologyStack.map((tech) => {
              return (
                <Grid key={tech.name}>
                  <Tooltip title={tech.name} arrow placement="top">
                    <Grid
                      component="div"
                      tabIndex={0}
                      aria-label={tech.name}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: { xs: "44px", sm: "50px" },
                        height: { xs: "44px", sm: "50px" },
                        borderRadius: "14px",
                        bgcolor: "#FFFFFF",
                        border: "1px solid #E5E7EB",
                        color: tech.color,
                        fontSize: { xs: "23px", sm: "26px" },
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                        "&:hover, &:focus-visible": {
                          borderColor: "#22C55E",
                          bgcolor: "rgba(34,197,94,0.06)",
                          transform: "translateY(-4px)",
                          boxShadow: "0 6px 14px rgba(34,197,94,0.12)",
                          outline: "none",
                        },
                      }}
                    >
                      {tech.icon as React.ReactNode}
                    </Grid>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </Grid> */}

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
                Independently developed multiple full-stack systems, managing the complete software development lifecycle from requirements gathering and system architecture to implementation, testing, and production deployment. Experienced in translating business requirements into practical solutions, building reusable modules, and delivering reliable, scalable applications tailored to client needs.
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

        <Grid
          size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
          sx={{ textAlign: "center", mt: 4, mb: 2, backgroundColor: "#f1f6ff" }}
          className={`${classes.profileHeading} profile-reveal profile-reveal-heading`}
        >

          <Grid container spacing={1} sx={{ backgroundColor: "#f1f6ff", py: "80px" }} >
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center" }}
              className="profile-reveal profile-reveal-role"
            >
              <Typography className={`${classes.h2blackcolorHeadiing} profile-reveal profile-reveal-heading`}>
                Areas of Specialization
              </Typography>
            </Grid>
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", px: { xs: 2, sm: 3 }, mb: 2 }}
              className="profile-reveal profile-reveal-role"
            >
              <Typography className={classes.aiProductSubtitle}>
                Specialized in full-stack development, independently building and delivering business management systems with a focus on scalable architecture, clean code, and practical business solutions.
              </Typography>
              {/* <Typography className={classes.aiProductSubtitle}>
                Specialized in full-stack development, independent project delivery,
                API integration, and building scalable business applications
                from concept to production.
              </Typography> */}
            </Grid>
            {/* <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{ textAlign: "center", alignItems: "center", justifyContent: "center", px: { xs: 2, sm: 3 }, mb: 2 }}
              className="profile-reveal profile-reveal-role"
            >
              <Grid container spacing={3}>
                {specializationItems.map((item) => (
                  <Grid
                    size={{ lg: 4, md: 4, sm: 6, xs: 12 }}
                    key={item.title}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 3, md: 4 },
                        height: "100%",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        bgcolor: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(74,222,128,0.15)",
                        borderRadius: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-6px)",
                          borderColor: "#4ADE80",
                          bgcolor: "rgba(74,222,128,0.06)",
                          boxShadow:
                            "0 12px 30px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "2.8rem",
                          mb: 2.5,
                          p: 2,
                          width: 88,
                          height: 88,
                          boxSizing: "border-box",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "50%",
                          bgcolor: "rgba(74,222,128,0.1)",
                          border: "1px solid rgba(74,222,128,0.15)",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontSize: { xs: "1.2rem", md: "1.35rem" },
                          fontWeight: 700,
                          color: "#F9FAFB",
                          mb: 2,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#9CA3AF",
                          fontSize: "0.95rem",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid> */}
            <Grid
              size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
              sx={{
                px: { xs: 2, sm: 3 },
                mb: 2,
              }}
              className="profile-reveal profile-reveal-role"
            >
              <Grid container spacing={3}>
                {benefits.map((item) => (
                  <Grid
                    size={{ lg: 3, md: 4, sm: 6, xs: 12 }}
                    key={item.title}
                  >
                    <Box
                      sx={{
                        bgcolor: "#FFFFFF",
                        p: 3,
                        borderRadius: 3,
                        border: "1px solid #E5E7EB",
                        textAlign: "center",
                        height: "100%",
                        boxSizing: "border-box",
                        transition: "box-shadow 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "1.875rem",
                          color: "#22C55E",
                          mb: 1.5,
                          fontWeight: 700,
                        }}
                      >
                        {item.icon}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#374151",
                          fontWeight: 500,
                          fontSize: "16px",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </>
  );
};

export default Profile;