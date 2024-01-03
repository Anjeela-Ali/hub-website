import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logoImgUrl from '../../assets/logo-1.svg'
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";



const pages = ['Apply', 'Management', 'Reporting', 'Tracking', 'subscribe', 'company', 'careers', 'press'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function FooterSection() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Box sx={{
                backgroundColor: '#E5DFFC',


            }}>
                <AppBar position="static" sx={{
                    backgroundColor: '#E5DFFC ',
                    borderBottom: '1px solid #737588',
                    width: '80%',
                    margin: '10px auto',
                    boxShadow: 'none'
                }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters sx={{
                            display: { xs: 'block', sm: 'block', md: 'block', lg: 'flex', xl: 'block' },
                            padding: '20px 0px'
                        }}>
                            <img src={logoImgUrl} alt='screenshot' />
                            <Box sx={{ display: { xs: 'flex', md: 'flex' }, marginLeft: { xs: '0px', sm: '0px', md: '0px', lg: '140px', xl: '140px' }, flexWrap: 'wrap', marginTop:{ xs: '20px', sm: '20px', md: '20px', lg: '0px', xl: '0px' }}}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            display: 'block', color: '#000000cc', fontWeight: '600', fontSize: '12px', paddingRight: '20px',
                                            '&:hover': {
                                                color: '#2d6fe8'
                                            }
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                        </Toolbar>
                    </Container>
                </AppBar>

                {/* Content */}
                <Box sx={{
                    width: '80%',
                    margin: '0px auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '40px 0px'
                }}>
                    <Box >
                        <Typography variant='h6' sx={{
                            fontSize: '13px',
                            fontWeight: '600',
                            paddingRight: '40px',
                            color: '#737588'
                        }}>
                            These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms <br /> and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and  <br />Conditions.
                        </Typography>
                    </Box>
                    <Box sx={{
                        fontSize: '30px',
                        padddingRight: '20px',
                        color: '#225469',
                        width: '10%',

                    }}>
                        <IoLogoInstagram />
                        <Typography variant='para' sx={{
                            padding: '0px 10px'
                        }}></Typography>
                        <FaTwitter />

                    </Box>
                </Box>
            </Box>
        </>


    );
}
export default FooterSection;
