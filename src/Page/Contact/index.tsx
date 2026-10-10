import {
    Button,
    Card,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useStyles } from "../../theme/appStyles";

const backgroundgradient = "linear-gradient(to right, #9333ea, #2563eb)";
const backgroundhovergradient = "linear-gradient(to right, #7e22ce, #1d4ed8)";

const GetInTouch = () => {
    const classes = useStyles();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Connect your form submission or API logic here.
    };

    return (
        <Grid
            container
            component="section"
            id="contact"
            size={{ xs: 12 }}
            sx={{
                py: { xs: 8, md: 12 },
                px: { xs: 2, sm: 3 },
                background: "linear-gradient(180deg, #faf5ff 0%, #eff6ff 100%)",
            }}
        >
            <Grid size={{ xs: 12 }}>
                <Container maxWidth="md">
                    <Grid container spacing={2} sx={{ mb: 1, textAlign: "center" }}>
                        <Grid size={{ xs: 12 }}>
                            <Typography
                                className={`${classes.h2blackcolorHeadiing} profile-reveal profile-reveal-heading`}
                            >
                                Get In Touch
                            </Typography>
                        </Grid>

                        <Grid size={{ xs: 12 }}>
                            <Typography className={classes.aiProductSubtitle}>
                                Have a project in mind or an opportunity to discuss? Send me a
                                message. I’d love to hear from you!
                            </Typography>
                        </Grid>
                    </Grid>

                    <Card
                        elevation={0}
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: "16px",
                            backgroundColor: "#ffffff",
                            border: "1px solid #f3f4f6",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
                            width: "100%",
                            boxSizing: "border-box",
                            textAlign: "left",
                        }}
                    >
                        <Grid
                            container
                            component="form"
                            spacing={2}
                            onSubmit={handleSubmit}
                            sx={{ width: "100%", padding: { xs: 2, sm: 3 } }}
                        >
                            <Grid size={{ xs: 12 }} sx={{ textAlign: { xs: "left", sm: "left" } }}>
                                <Typography
                                    variant="h5"
                                    className={classes.aiProductTitle}
                                >
                                    Let's Talk
                                </Typography>

                                <Typography className={classes.aiProductDescription}>
                                    Fill in the details below and I’ll get back to you as soon
                                    as possible.
                                </Typography>
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography className={classes.contactSubHeading}>
                                    Name *
                                </Typography>
                                <TextField
                                    fullWidth
                                    required
                                    id="contact-name"
                                    name="name"
                                    // placeholder="Enter your full name"
                                    autoComplete="name"
                                    size="small"
                                    className={classes.textfieldprop}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography className={classes.contactSubHeading}>
                                    Company  *
                                </Typography>

                                <TextField
                                    fullWidth
                                    required
                                    id="contact-company"
                                    name="company"
                                    // placeholder="Enter your company name"
                                    autoComplete="company"
                                    size="small"
                                    className={classes.textfieldprop}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography className={classes.contactSubHeading}>
                                    Work email *
                                </Typography>

                                <TextField
                                    fullWidth
                                    required
                                    autoComplete="email"
                                    id="contact-email"
                                    name="email"
                                    // placeholder="you@example.com"
                                    type="email"
                                    size="small"
                                    className={classes.textfieldprop}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, sm: 6 }}>
                                <Typography className={classes.contactSubHeading}>
                                    Contact Number *
                                </Typography>

                                <TextField
                                    fullWidth
                                    required
                                    autoComplete="tel"
                                    id="contact-number"
                                    name="contactNumber"
                                    // placeholder="Enter your contact number"
                                    type="tel"
                                    size="small"
                                    className={classes.textfieldprop}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Typography className={classes.contactSubHeading}>
                                    Message *
                                </Typography>

                                <TextField
                                    fullWidth
                                    required
                                    multiline
                                    id="contact-message"
                                    name="message"
                                    // placeholder="Enter your message"
                                    autoComplete="message"
                                    minRows={8}
                                    size="small"
                                    className={classes.textfieldprop}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    sx={{
                                        py: 1.7,
                                        borderRadius: 2,
                                        textTransform: "none",
                                        fontSize: "1.05rem",
                                        fontWeight: 700,
                                        color: "#ffffff",
                                        background: backgroundgradient,
                                        boxShadow: "0 8px 20px rgba(124, 58, 237, 0.22)",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            background: backgroundhovergradient,
                                            boxShadow:
                                                "0 12px 28px rgba(37, 99, 235, 0.28)",
                                            // transform: "translateY(-2px)",
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Container>
            </Grid>
        </Grid>
    );
};

export default GetInTouch;