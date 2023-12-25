import { Box, Typography } from '@mui/material'
import imgUrlOne from '../../assets/about_img_1.png'
import imgUrlTwo from '../../assets/about_img_2.png'
import imgUrlThree from '../../assets/about_img_3.png'
import imgUrlFourth from '../../assets/about_img_4.svg'

const AboutSection = () => {
    return (
        <>

            <Box sx={{
                padding:'80px 0px'
            }}>
                <Box sx={{ 
                    display: 'flex',
                    width:'90%',
                    margin:'20px auto'
                }}>

                    {/* IMages Container */}
                    <Box sx={{
                        width: '40%',
                        height:'400px',
                        position:'relative'
                    }}>
                        <Box sx={{
                            position:'absolute',
                            left:'-1px',
                            top:'87px'
                        }}>
                            <img src={imgUrlFourth} alt='ScreenShot'/>

                        </Box>
                        <Box sx={{
                            position:'absolute',
                            top:'118px',
                            right:'198px'

                        }}>
                        <img src={imgUrlOne} alt='ScreenShot' width='50%'/>
                        </Box>
                        <Box  sx={{
                            position:'absolute',
                            right:'-61px',
                            top:'65px'
                        }}>
                        <img src={imgUrlTwo} alt='ScreenShot' width='50%'/>
                        </Box>
                        <Box  sx={{
                            position:'absolute',
                            top:'185px',
                            left:'148px',
                            right:'45'

                        }}>
                        <img src={imgUrlThree} alt='ScreenShot' width='60%'/>
                        </Box>
                    </Box>
                    {/* Content Container */}
                    <Box sx={{
                        width: '60%',
                        height:'350px',
                        display:'flex',
                        boxShadow:'0 14px 55px 0 rgba(208,202,239,.3)',
                        borderRadius:'10px',
                        marginTop:'30px'
                    }}>                      
                        
                        <Box sx={{
                            width:'30%',
                            padding:'20px',
                            borderRight:'1px solid #0000001a'
                        }}>
                            <Typography variant='para' sx={{
                                background: 'linear-gradient(180deg, #4452F2 0%, #F2DFDF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize:'43px',
                                fontWeight:'700',
                            }}>
                            10+
                            </Typography>
                            <Typography variant='h5' sx={{
                                fontSize:'17px',
                                fontWeight:'600',
                                margin:'20px 0px',
                                color:'#225469'
                            }}>
                            Years of Operation
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize:'18px',
                                lineHeight:'2',
                                color:'#737588',
                                fontWeight:'400'
                            }}>
                            Our team have been running well about 10 years and keep going.
                            </Typography>
                        </Box>

                        <Box sx={{
                            width:'30%',
                            padding:'20px',
                            borderRight:'1px solid #0000001a'
                        }}>
                            <Typography variant='para' sx={{
                                background: 'linear-gradient(180deg, #4452F2 0%, #F2DFDF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize:'43px',
                                fontWeight:'700',
                            }}>
                           98%
                            </Typography>
                            <Typography variant='h5' sx={{
                                fontSize:'17px',
                                fontWeight:'600',
                                margin:'20px 0px',
                                color:'#225469'
                            }}>
                            Positive Feedback
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize:'18px',
                                lineHeight:'2',
                                color:'#737588',
                                fontWeight:'400'
                            }}>
                            Our team have been running well about 10 years and keep going.
                            </Typography>
                        </Box>
                        <Box sx={{
                            width:'30%',
                            padding:'20px',
                            borderRight:'1px solid #0000001a'
                        }}>
                            <Typography variant='para' sx={{
                                background: 'linear-gradient(180deg, #4452F2 0%, #F2DFDF 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize:'43px',
                                fontWeight:'700',
                            }}>
                            2,664
                            </Typography>
                            <Typography variant='h5' sx={{
                                fontSize:'17px',
                                fontWeight:'600',
                                margin:'20px 0px',
                                color:'#225469'
                            }}>
                           Projects Completed
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize:'18px',
                                lineHeight:'2',
                                color:'#737588',
                                fontWeight:'400'
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
