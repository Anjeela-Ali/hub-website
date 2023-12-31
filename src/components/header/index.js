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
import LogoImgUrl from '../../assets/logo.svg';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import Hidden from '@mui/material/Hidden';

const pages = ['Home', 'About', 'Services', 'Customer Stories', 'Contact'];
const settings = ['Home', 'About', 'Services', 'Customer Stories', 'Contact'];

function Header() {
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
    <AppBar position="static" sx={{ backgroundImage: 'linear-gradient(120deg, #353A5F 0%, #191C33 100%)', padding: '0px 20px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
                display: { xs: 'block', md: 'none',lg:'block'},
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" textTransform="capitalize">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
              {/* Add the responsive buttons and icons here */}
              <MenuItem>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Add your buttons and icons here */}
                  <Box sx={{ marginBottom: 2 }}>
                    <Button
                      sx={{
                        color: 'white',
                        textTransform: 'capitalize',
                        fontSize: '16px',
                      }}
                    >
                      Send a message
                    </Button>
                  </Box>
                  <Box sx={{ display: 'flex', color: '#45485f' }}>
                    <Box
                      sx={{
                        fontSize: '18px',
                        marginRight: '12px',
                        cursor: 'pointer',
                        ':hover': {
                          color: 'white',
                        },
                      }}
                    >
                      <FaTwitter />
                    </Box>
                    <Box
                      sx={{
                        fontSize: '18px',
                        marginRight: '12px',
                        cursor: 'pointer',
                        ':hover': {
                          color: 'white',
                        },
                      }}
                    >
                      <FaLinkedinIn />
                    </Box>
                    <Box
                      sx={{
                        fontSize: '18px',
                        marginRight: '12px',
                        cursor: 'pointer',
                        ':hover': {
                          color: 'white',
                        },
                      }}
                    >
                      <FaGithub />
                    </Box>
                  </Box>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            {/* test */}
            <a>
              <img src={LogoImgUrl} alt="screenshot" width="100%" />
            </a>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'none', lg:'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex', textTransform: 'capitalize', fontSize: '16px', margin: '0px 18px' }}
              >
                {page}
                <Box
                  sx={{
                    marginTop: '9px',
                    marginLeft: '9px',
                  }}
                >
                  <IoIosArrowDown />
                </Box>
              </Button>
            ))}
          </Box>
          <Hidden mdDown>
            {/* Display these buttons and icons only on medium and larger screens */}
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ marginRight: '20px', display: 'flex', marginTop: '13px', color: '#45485f' }}>
                <Box
                  sx={{
                    fontSize: '18px',
                    marginRight: '12px',
                    cursor: 'pointer',
                    ':hover': {
                      color: 'white',
                    },
                  }}
                >
                  <FaTwitter />
                </Box>
                <Box
                  sx={{
                    fontSize: '18px',
                    marginRight: '12px',
                    cursor: 'pointer',
                    ':hover': {
                      color: 'white',
                    },
                  }}
                >
                  <FaLinkedinIn />
                </Box>
                <Box
                  sx={{
                    fontSize: '18px',
                    marginRight: '12px',
                    cursor: 'pointer',
                    ':hover': {
                      color: 'white',
                    },
                  }}
                >
                  <FaGithub />
                </Box>
              </Box>
              <Box>
                <Button
                  sx={{
                    borderRadius: '50px',
                    background: '#45485f',
                    textTransform: 'lowercase',
                    color: 'white',
                    padding: '9px 15px',
                    fontSize: '15px',
                    fontWeight: '600',
                    ':hover': {
                      background: 'white',
                      color: 'black',
                    },
                  }}
                >
                  Send a message
                </Button>
              </Box>
            </Box>
          </Hidden>
        
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
