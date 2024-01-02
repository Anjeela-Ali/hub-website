import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import ImgOneUrl from '../../assets/features_one.png';
import ImgTwoUrl from '../../assets/features_two.png';
import ImgThirdUrl from '../../assets/features_third.png'


const FeaturesSection = () => {

    const styles = {
        headline: {
            fontSize:{ xs:'35px',sm:'38px',md:'40px',lg:'45px',xl:'45px'},
            fontWeight: '600',
            color: '#225469'
        },
        subHeading: {
            color: '#225469',
            fontSize: '22px',
            fontWeight: '600',
            paddingBottom: '13px'
        },
        paragraph: {
            fontSize: '17px',
            color: '#737588',
            fontWeight: '500'
        }
    }
    return (
        <>
            <Box sx={{
                paddingBottom:'40px'
            }}>
                {/* Headline */}
                <Box sx={{
                    textAlign: 'Center',
                    padding: '30px 0px',
                    marginTop: '40px'
                }}>
                    <Typography variant='h2' sx={styles.headline}>
                        Branding strategy and
                    </Typography>
                    <Typography variant='h2' sx={{
                        fontSize:{ xs:'35px',sm:'38px',md:'40px',lg:'45px',xl:'45px'},
                        fontWeight: '600',
                        background: 'linear-gradient(12deg,  #ff4d54 40%, #ed6a04 60%),linear-gradient(12deg, #ed6a04 40%,  #ff4d54 60%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        digital solutions.
                        {/* product development.ecommerce solutions. */}
                    </Typography>

                    <Typography variant='body2' sx={{
                        fontSize: {xs:'14px',sm:'15px',md:'16px',lg:'17px',xl:'17px'},
                        fontWeight: '600',
                        color: '#225469',
                        marginTop: '22px',
                        padding:'4px 40px'
                    }}>
                        We have three projects with this template and that is because we love <br /> the design, <Typography variant='para' sx={{
                            fontWeight: '500',
                            color: '#767575'
                        }}>the large number of possibilities.</Typography>
                    </Typography>

                </Box>
                <Box sx={{
                    margin: '50px auto',
                }}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={4}
                         sx={{
                            borderRight: '1px solid #cbcccf '
                        }}>
                            {/* Image */}
                            <Box sx={{
                                marginBottom: '40px'
                            }}>
                                <img src={ImgOneUrl} alt='screenshot' width='60%' />
                            </Box>
                            {/* Content */}
                            <Box>
                                <Typography variant='h3' sx={styles.subHeading}>
                                    SEO Analytics
                                </Typography>
                                <Typography variant='body2' sx={styles.paragraph}>
                                    Content-focused grid designs, unique social elements, post-sharing function, author exposure, sticky newsletter.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={4} sx={{
                            borderRight: '1px solid #cbcccf '
                        }}>
                            <Box sx={{
                                marginBottom: '19px',
                                position: 'relative'
                            }}>
                                <img src={ImgTwoUrl} alt='screenshot'  width='40%' />

                                <Typography variant='para' sx={{
                                    position: 'absolute',
                                    right: '26px',
                                    border: '1px solid #ebebeb ',
                                    padding: '5px 15px',
                                    fontSize: '11px',
                                    fontWeight: '500',
                                    borderRadius: '50px',
                                    backgroundColor: '#ebebeb',
                                }}>POPULAR</Typography>

                            </Box>

                            {/* Content */}
                            <Box>
                                <Typography variant='h3' sx={styles.subHeading}>
                                    Social Media Advertising
                                </Typography>
                                <Typography variant='body2' sx={styles.paragraph}>
                                    Content-focused grid designs, unique social elements, post-sharing function, author exposure, sticky newsletter.                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={4}  sx={{
                            borderRight: '1px solid #cbcccf ',
                            // margin:'20px auto ',
                        }}>
                            <Box sx={{
                                marginBottom: '60px'
                            }}>
                                <img src={ImgThirdUrl} alt='screenshot'  width='50%' />
                            </Box>

                            {/* Content */}
                            <Box>
                                <Typography variant='h3' sx={styles.subHeading}>
                                    eCommerce Solutions
                                </Typography>
                                <Typography variant='body2' sx={styles.paragraph}>
                                    Content-focused grid designs, unique social elements, post-sharing function, author exposure, sticky newsletter.                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default FeaturesSection
