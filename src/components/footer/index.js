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
                    borderBottom:'1px solid #737588',
                    width:'80%',
                    margin:'10px auto',
                    boxShadow:'none'
                }}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <img src={logoImgUrl} alt='screenshot'/>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'block', md: 'none' },
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2, display: 'block', color: '#000000cc', padding: '20px', fontWeight: '600', fontSize: '12px',
                                            '&:hover': {
                                                color: '#2d6fe8'
                                            }
                                        }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>

                            <Box sx={{ flexGrow: 0 }}>

                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>

                {/* Content */}
                <Box sx={{
                    width:'80%',
                    margin:'0px auto',
                    display:'flex',
                    justifyContent:'space-between',
                    padding:'40px 0px'
                }}>
                    <Box >
                        <Typography variant='h6' sx={{
                            fontSize:'13px',
                            fontWeight:'600',
                            paddingRight:'40px',
                            color:'#737588'
                        }}>
                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms <br /> and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and  <br />Conditions.
                        </Typography>
                    </Box>
                    <Box sx={{
                        fontSize:'30px',
                        padddingRight:'20px',
                        color:'#225469',
                        width:'10%',

                    }}>
                    <IoLogoInstagram />
                    <Typography variant='para' sx={{
                        padding:'0px 10px'
                    }}></Typography>
                    <FaTwitter />

                    </Box>
                </Box>
            </Box>
        </>


    );
}
export default FooterSection;
