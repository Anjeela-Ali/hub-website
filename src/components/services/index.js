import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { HiCursorClick } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '20px',
    color: theme.palette.text.secondary,
}));


const ServicesSection = () => {
    return (
        <>
            <Box sx={{
                backgroundImage: 'linear-gradient(180deg, #fff 47%, #F0EEFD 47%)',
                textAlign: 'center'
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
                        <Grid item xs={5}>
                            <Item sx={{
                                display: 'flex',
                                padding:'30px'
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px'
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
                                        display:'flex'
                                    }}>
                                        Interaction Design

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px'
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
                        <Grid item xs={5}>
                        <Item sx={{
                                display: 'flex',
                                padding:'30px'
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px'
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
                                        display:'flex'
                                    }}>
                                        Interaction Design

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px'
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
                        <Grid item xs={5}>
                        <Item sx={{
                                display: 'flex',
                                padding:'30px'
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px'
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
                                        display:'flex'
                                    }}>
                                        Interaction Design

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px'
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
                        <Grid item xs={5}>
                        <Item sx={{
                                display: 'flex',
                                padding:'30px'
                            }}>
                                <Box sx={{
                                    fontSize: '38px',
                                    color: '#00cb99',
                                    padding: '0px 30px'
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
                                        display:'flex'
                                    }}>
                                        Interaction Design

                                        <Box sx={{
                                            marginTop: '3px',
                                            marginLeft: '5px'
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
