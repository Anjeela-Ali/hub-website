import { Box, Button, Typography } from '@mui/material'
import ImgUrl from '../../assets/contact_img.png'

const DetailedSection = () => {
    return (
        <>
            <Box sx={{
                position:'relative'
            }}>
                <Box>
                    <Typography variant='h2' sx={{
                        fontSize: '280px',
                        fontWeight: '900',
                        padding: '30px auto',
                        color: '#d9dcff'
                    }}>
                        You'll love
                    </Typography>
                </Box>

                {/* Second Container */}
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-around',
                    position:'absolute',
                    top:'150px'
                }}>
                    <Box sx={{
                        width:"45%",
                    }}>
                        <Typography  variant='h4' sx={{
                            fontSize:'22px',
                            fontWeight:'600',
                            paddingTop:'225px',
                            color:'#0e3f58'
                        }}>
                        We have three projects with this template and that is because we love the design, <Typography variant='para' sx={{
                            color:'#737588'
                        }}>  the large number of possibilities.</Typography>
                        </Typography>

                    </Box>
                    <Box sx={{
                        width:'45%',
                        textAlign:'center'
                    }}>
                            <img src={ImgUrl} alt='screenshot' width='55%'/>
                            <Box sx={{
                                position:'absolute',
                                bottom:'20px',
                                width:'40%',
                                padding:'30px 30px',
                                textAlign:'left',
                                background:'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%)',
                                                             backdropFilter:'blur(21px)'

                            }}>
                                <Typography variant='h5' sx={{
                                         fontSize:'25px',
                                         fontWeight:'600',
                                }}>
                                    Social Media Integration
                                </Typography>
                               <Button sx={{

                               }}>
                                Learn More 
                               </Button>
                            </Box>

                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default DetailedSection
