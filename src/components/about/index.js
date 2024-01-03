import { Box, Typography } from '@mui/material'
import imgUrlOne from '../../assets/about_img_1.png'
import imgUrlTwo from '../../assets/about_img_2.png'
import imgUrlThree from '../../assets/about_img_3.png'
import imgUrlFourth from '../../assets/about_img_4.svg'

const AboutSection = () => {
    return (
        <>

            <Box sx={{
                padding: '80px 0px',

            }}>
                <Box sx={{
                    display: { xs: 'block', sm: 'block', md: 'block', lg: 'flex', xl: 'flex' },
                    width: '90%',
                    margin: '20px auto',
                    justifyContent: 'space-evenly'
                }}>

                    {/* IMages Container */}
                    <Box sx={{
                        width: { xs: '70%', sm: '70%', md: '50%', lg: '40%', xl: '40%' },
                        height: '400px',
                        position: 'relative',
                    }}>
                        <Box sx={{
                            position: 'absolute',
                            left: '-1px',
                            top: '87px'
                        }}>
                            <img src={imgUrlFourth} alt='ScreenShot' />

                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: '118px',
                            right: '198px'

                        }}>
                            <img src={imgUrlOne} alt='ScreenShot' width='50%' />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            right: '-61px',
                            top: '65px'
                        }}>
                            <img src={imgUrlTwo} alt='ScreenShot' width='50%' />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: '185px',
                            left: '148px',
                            right: '45'

                        }}>
                            <img src={imgUrlThree} alt='ScreenShot' width='60%' />
                        </Box>
                    </Box>
                    {/* Content Container */}
                    <Box sx={{
                        width: { xs: '70%', sm: '90%', md: '90%', lg: '50%', xl: '50%' },
                        height: { xs: '650px', sm: '650px', md: '350px', lg: '350px', xl: '350px' },
                        display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex', xl: 'flex' },
                        boxShadow: '0 14px 55px 0 rgba(208,202,239,.3)',
                        borderRadius: '10px',
                        marginTop: '30px',
                    }}>

                        <Box sx={{
                            width: { xs: '60%', sm: '75%', md: '30%', lg: '30%', xl: '30%' },
                            padding: '20px',
                            borderRight: { xs: 'none', sm: 'none', md: '1px solid #0000001a', lg: '1px solid #0000001a', xl: '1px solid #0000001a' },
                            borderBottom: { xs: '1px solid #0000001a', sm: '1px solid #0000001a', md: '1px solid #0000001a', lg: 'none', xl: 'none' },
                            textAlign: 'left'

                        }}>
                            <Typography variant='para' sx={{
                                background: 'linear-gradient(180deg, #4452F2 0%, #F2DFDF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '43px',
                                fontWeight: '700',
                            }}>
                                10+
                            </Typography>
                            <Typography variant='h5' sx={{
                                fontSize: '17px',
                                fontWeight: '600',
                                margin: '20px 0px',
                                color: '#225469'
                            }}>
                                Years of Operation
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize: '18px',
                                lineHeight: '2',
                                color: '#737588',
                                fontWeight: '400'
                            }}>
                                Our team have been running well about 10 years and keep going.
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '60%', sm: '75%', md: '30%', lg: '30%', xl: '30%' },
                            padding: '20px',
                            borderRight: { xs: 'none', sm: 'none', md: '1px solid #0000001a', lg: '1px solid #0000001a', xl: '1px solid #0000001a' },
                            borderBottom: { xs: '1px solid #0000001a', sm: '1px solid #0000001a', md: '1px solid #0000001a', lg: 'none', xl: 'none' },
                            textAlign: 'left'
                        }}>
                            <Typography variant='para' sx={{
                                background: 'linear-gradient(180deg, #4452F2 0%, #F2DFDF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '43px',
                                fontWeight: '700',
                            }}>
                                98%
                            </Typography>
                            <Typography variant='h5' sx={{
                                fontSize: '17px',
                                fontWeight: '600',
                                margin: '20px 0px',
                                color: '#225469'
                            }}>
                                Positive Feedback
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize: '18px',
                                lineHeight: '2',
                                color: '#737588',
                                fontWeight: '400'
                            }}>
                                Our team have been running well about 10 years and keep going.
                            </Typography>
                        </Box>
                        <Box sx={{
                            width: { xs: '60%', sm: '75%', md: '30%', lg: '30%', xl: '30%' },
                            padding: '20px',
                            borderRight: { xs: 'none', sm: 'none', md: '1px solid #0000001a', lg: '1px solid #0000001a', xl: '1px solid #0000001a' },
                            borderBottom: { xs: '1px solid #0000001a', sm: '1px solid #0000001a', md: '1px solid #0000001a', lg: 'none', xl: 'none' },
                            textAlign: 'left'
                        }}>
                            <Typography variant='para' sx={{
                                background: 'linear-gradient(180deg, #4452F2 0%, #F2DFDF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: '43px',
                                fontWeight: '700',
                            }}>
                                2,664
                            </Typography>
                            <Typography variant='h5' sx={{
                                fontSize: '17px',
                                fontWeight: '600',
                                margin: '20px 0px',
                                color: '#225469'
                            }}>
                                Projects Completed
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize: '18px',
                                lineHeight: '2',
                                color: '#737588',
                                fontWeight: '400'
                            }}>
                                Our team have been running well about 10 years and keep going.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default AboutSection
