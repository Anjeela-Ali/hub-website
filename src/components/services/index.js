import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { HiCursorClick } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillAirplaneFill } from "react-icons/bs";
import { MdFolderCopy } from "react-icons/md";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: '20px 30px',
    textAlign: 'center',
    borderRadius: '20px',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
    '& : hover': {
        backgroundColor: '#1a4265',
        color: '#fff'
    }
}));


const ServicesSection = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: 'linear-gradient(180deg, #fff 47%, #F0EEFD 47%)',
                textAlign: 'center',
                padding: '70px 0px'
            }}>
                {/* Heading */}
                <Box >
                    <Typography variant='para' sx={
                        {
                            fontSize: '16px',
                            padding: '4px 18px',
                            borderRadius: '50px',
                            marginBottom: '30px',
                            color: '#1c4f8d',
                            backgroundColor: '#1c4f8d1c'
                        }
                    }>
                        Our Services
                    </Typography>
                    <Typography variant='h2' sx={{
                        color: '#225469',
                        fontSize: '45px',
                        fontWeight: '700',
                        lineHeight: '1',
                        marginBottom: '70px',
                        padding: '30px 0px'
                    }}>
                        We build ideas driven<br />by the future.
                    </Typography>
                </Box>

                {/* Grid Items */}
                <Box sx={{ textAlign: 'center' }}>
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                        justifyContent: 'center'
                    }}>
                        <Grid item xs={6} sm={8} md={8} lg={5} xl={5} sx={{
                            transition: '0.3s',

                        }}>
                            <Item sx={{
                                display: 'flex',
                                marginBottom: '20px',
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px',

                                }}>
                                    <HiCursorClick />

                                </Box>
                                <Box sx={{
                                    textAlign: 'left'
                                }}>
                                    <Typography variant='h6' sx={{
                                        fontWeight: '600',
                                        fontSize: '20px',
                                        color: '#225469',
                                        display: 'flex'
                                    }}>
                                        Interaction Design

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px',
                                            color: '#fff'
                                        }}>
                                            <IoIosArrowForward />

                                        </Box>
                                    </Typography>
                                    <Typography variant='body2' sx={{
                                        color: '#737588',
                                        fontSize: '18px',
                                        paddingTop: '12px',
                                    }}>
                                        Produce the highest quality work and  <br /> services for every client, on every project.
                                    </Typography>
                                </Box>
                            </Item>

                        </Grid>
                        <Grid item xs={6} sm={8} md={8} lg={5} xl={5} >
                            <Item sx={{
                                display: 'flex',
                                marginBottom: '20px'
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px'
                                }}>
                                    <BsFillAirplaneFill />


                                </Box>
                                <Box sx={{
                                    textAlign: 'left'
                                }}>
                                    <Typography variant='h6' sx={{
                                        fontWeight: '600',
                                        fontSize: '20px',
                                        color: '#225469',
                                        display: 'flex'
                                    }}>
                                        Search Engine Optimization

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px',
                                            color: '#fff'
                                        }}>
                                            <IoIosArrowForward />

                                        </Box>
                                    </Typography>
                                    <Typography variant='body2' sx={{
                                        color: '#737588',
                                        fontSize: '18px',
                                        paddingTop: '12px',
                                    }}>
                                        Produce the highest quality work and services for every client, on every project.
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={8} md={8} lg={5} xl={5}>
                            <Item sx={{
                                display: 'flex',
                                marginBottom: '20px'
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px'
                                }}>
                                    <MdFolderCopy />


                                </Box>
                                <Box sx={{
                                    textAlign: 'left'
                                }}>
                                    <Typography variant='h6' sx={{
                                        fontWeight: '600',
                                        fontSize: '20px',
                                        color: '#225469',
                                        display: 'flex'
                                    }}>
                                        eCommerce Solutions

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px',
                                            color: '#fff'
                                        }}>
                                            <IoIosArrowForward />

                                        </Box>
                                    </Typography>
                                    <Typography variant='body2' sx={{
                                        color: '#737588',
                                        fontSize: '18px',
                                        paddingTop: '12px',
                                    }}>
                                        Produce the highest quality work and  <br /> services for every client, on every project.
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item xs={6} sm={8} md={8} lg={5} xl={5}>
                            <Item sx={{
                                display: 'flex',
                                marginBottom: '20px'
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px'
                                }}>
                                    <HiMiniWrenchScrewdriver />


                                </Box>
                                <Box sx={{
                                    textAlign: 'left'
                                }}>
                                    <Typography variant='h6' sx={{
                                        fontWeight: '600',
                                        fontSize: '20px',
                                        color: '#225469',
                                        display: 'flex'
                                    }}>
                                        Product Development

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px',
                                            color: '#fff'
                                        }}>
                                            <IoIosArrowForward />

                                        </Box>
                                    </Typography>
                                    <Typography variant='body2' sx={{
                                        color: '#737588',
                                        fontSize: '18px',
                                        paddingTop: '12px',
                                    }}>
                                        Produce the highest quality work and  <br /> services for every client, on every project.
                                    </Typography>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )
}

export default ServicesSection
