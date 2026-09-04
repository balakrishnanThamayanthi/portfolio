import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LayersIcon from '@mui/icons-material/Layers';
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import { useTheme } from '@mui/material/styles';

const profileLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Education', href: '/#education' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Skills', href: '/#skills' },
];

const technicalSkills = [
    { label: 'React', Icon: CodeIcon },
    { label: 'TypeScript', Icon: DataObjectIcon },
    { label: 'MUI', Icon: LayersIcon },
    { label: 'Laravel', Icon: LanguageIcon },
    { label: 'PHP', Icon: TerminalIcon },
    { label: 'MySQL', Icon: StorageIcon },
    { label: 'Node.js', Icon: TerminalIcon },
];

export default function Footer() {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                width: '100%',
                p: 3,
                mt: 4,
                borderTop: `1px solid ${theme.palette.divider}`,
                backgroundColor: "#111827",
                color: theme.palette.text.secondary,
            }}
        >
            <Grid
                container
                spacing={4}
                sx={{ alignItems: 'flex-start', p: 3, mb: 2 }}
            >
                <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, fontSize: '18px', fontFamily: "Geist", }}>
                        Balakrishnan Thamayanthi
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1, fontSize: '13px', fontFamily: "Geist", }}>
                        A passionate Full Stack Software Engineer with 3+ years of experience building reliable, scalable web applications. I enjoy turning ideas into innovative solutions and continuously growing with the ever-evolving technology landscape.
                    </Typography>
                    <Grid
                        container
                        sx={{
                            justifyContent: 'left',
                            mt: 2
                        }}
                    >
                        <Grid size={12}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', gap: 1.5 }}>
                                {technicalSkills.map(({ label, Icon }) => (
                                    <Box
                                        key={label}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 0.75,
                                            px: 1.5,
                                            py: 1,
                                            border: '1px solid #494c52',
                                            borderRadius: 1,
                                            color: 'white',
                                            fontSize: '13px',
                                            transition: 'color 200ms ease, border-color 200ms ease',
                                            '&:hover': { color: '#6a9cf3', borderColor: '#6a9cf3' },
                                        }}
                                    >
                                        <Icon fontSize="small" />
                                        {label}
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid size={{ lg: 4, md: 6, sm: 12, xs: 12 }}>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600, fontSize: '18px' }}>
                        Get In Touch
                    </Typography>
                    <Typography
                        component="a"
                        href="mailto:manothamayanthi98@gmail.com"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'inherit', textDecoration: 'none', fontSize: '13px', '&:hover': { color: '#6a9cf3' } }}
                    >
                        <EmailIcon fontSize="small" />
                        manothamayanthi98@gmail.com
                    </Typography>
                    <Typography
                        component="a"
                        href="tel:+94771234567"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, color: 'inherit', textDecoration: 'none', fontSize: '13px', '&:hover': { color: '#6a9cf3' } }}
                    >
                        <PhoneIcon fontSize="small" />
                        +94 77 123 4567
                    </Typography>
                    <Typography
                        component="address"
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1, color: 'inherit', fontStyle: 'normal', fontSize: '13px' }}
                    >
                        <LocationOnIcon fontSize="small" />
                        Puthukkudiyiruppu, Mullaitivu, Sri Lanka
                    </Typography>

                    <Box sx={{ display: 'flex', mt: 1 }}>
                        <IconButton component="a" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" sx={{ color: 'white', '&:hover': { color: '#6a9cf3' } }}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton component="a" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub profile" sx={{ color: 'white', '&:hover': { color: '#6a9cf3' } }}>
                            <GitHubIcon />
                        </IconButton>
                    </Box>
                </Grid>
                <Grid size={{ lg: 2, md: 6, sm: 12, xs: 12 }}>
                    <Typography variant="h6" sx={{ color: 'white', mb: 1, fontWeight: 600, fontSize: '18px' }}>
                        Profile
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {profileLinks.map((link) => (
                            <Typography
                                key={link.label}
                                component="a"
                                href={link.href}
                                sx={{ color: 'inherit', textDecoration: 'none', fontSize: '13px', width: 'fit-content', '&:hover': { color: '#6a9cf3' } }}
                            >
                                {link.label}
                            </Typography>
                        ))}
                    </Box>
                </Grid>

            </Grid>

            <Grid container sx={{ display: 'grid', placeItems: 'center', width: '100%', p: 3, borderTop: '1px solid #494c52', borderBottom: '1px solid #494c52' }}>
                <Typography variant="body2" sx={{ textAlign: 'center', fontStyle: 'italic', fontWeight: 500, fontSize: '16px' }}>
                    " The biggest risk is not taking any risk. "
                </Typography>
            </Grid>
            <Grid
                container
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                    width: '100%',
                    textAlign: 'center',
                    p: 3,
                }}
            >
                <Typography variant="body2" sx={{ textAlign: "center", color: "white", fontWeight: 400, fontSize: "14px" }}>
                    © Sep 2026 Updated.
                </Typography>
            </Grid>
        </Box >
    );
}
