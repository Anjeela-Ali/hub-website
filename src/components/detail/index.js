import { Box, Button, Grid, Typography } from '@mui/material'
import ImgUrl from '../../assets/contact_img.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    direction: 'rtl', // or 'ltr' for left-to-right
});

const DetailedSection = () => {
    return (
        <>
            <Box sx={{
                position: 'relative',
            }}>
                <Box sx={{
                    textAlign: 'center'
                }}>
                    <Typography variant='h2' sx={{
                        fontSize: { xs: '120px', sm: '150px', md: '180px', lg: '240px', xl: '280px' },
                        fontWeight: '900',
                        padding: '30px auto',
                        color: '#d9dcff'
                    }}>
                        You'll love
                    </Typography>
                </Box>

                {/* Second Container */}
                <ThemeProvider theme={theme}>
                    <Grid container sx={{
                        justifyContent: 'space-around',
                        marginTop: '-120px',
                    }}>
                        <Grid item xs={12} sm={7} md={5} lg={5} xl={3} sx={{
                            padding: '0px 30px',
                        }}>
                            <Typography variant='h4' sx={{
                                fontSize: '22px',
                                fontWeight: '600',
                                paddingTop: {xs:'50px',sm:'100px',md:'200px',lg:'225px',xl:'225px'},
                                color: '#0e3f58',
                                paddingBottom:'20px'
                            }}>
                                We have three projects with this template and that is because we love the design,
                                <Typography variant='para' sx={{
                                    color: '#737588'
                                }}>
                                    the large number of possibilities.
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={7} md={5} lg={5} xl={3} sx={{
                            textAlign: 'center',
                        }}>
                            <img src={ImgUrl} alt='screenshot' width='55%' />
                            <Box sx={{
                                position: 'absolute',
                                bottom: '20px',
                                padding: '30px 30px',
                                textAlign: 'left',
                                background: 'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
                                backdropFilter: 'blur(21px)'
                            }}>
                                <Typography variant='h5' sx={{
                                    fontSize: '25px',
                                    fontWeight: '600',
                                    color: '#0e3f58'
                                }}>
                                    Social Media Integration
                                </Typography>
                                <Button sx={{}}>
                                    Learn More
                                </Button>
                            </Box>
                        </Grid>
                    </Grid >
                </ThemeProvider>



            </Box>

        </>
    )
}

export default DetailedSection
