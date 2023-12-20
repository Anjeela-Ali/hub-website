import { Box, Grid, Typography } from '@mui/material'
import ImgUrl from '../../assets/social_media.jpg';
import { IoIosArrowForward } from "react-icons/io";


const SocialMarket = () => {
    return (
        <>
            <Box>
                <Grid container columnSpacing={2} sx={{
                    justifyContent: 'center',
                    textAlign: 'center',
                    marginBottom:'80px',
                    marginTop:'31px'
                }}>
                    <Grid item xs={5} >
                        <Box sx={{
                            textAlign:'right'
                        }}>
                            <img src={ImgUrl} alt='screenshot' width='80%' />
                        </Box>
                    </Grid>
                    {/* Content */}
                    <Grid item xs={5} >
                        <Box sx={{
                            textAlign:'left',
                            marginTop:'30px',
                            paddingLeft:'90px'
                        }}>
                            <Typography variant='para' sx={
                                {
                                    fontSize:'16px',
                                    padding:'4px 18px',
                                    borderRadius:'50px',
                                    marginBottom:'30px',
                                    color:'#00cb99',
                                    backgroundColor:'#00cb991a'
                                }
                            }>
                                Contact
                            </Typography>
                            <Typography variant='h2' sx={{
                                color:'#225469',
                                fontSize:'45px',
                                fontWeight:'700',
                                margin:'20px 0px',
                                lineHeight:'1'
                            }}>
                                Social marketing <br />made easy.
                            </Typography>
                            <Typography variant='body2' sx={{
                                fontSize:'18px',
                                color:'#737588',
                                paddingBottom:'30px'
                            }}>
                                Adjust your design through a wide range of <br /> theme options in the WordPress Customizer  <br />and see the changes instantly.
                            </Typography>
                            <Typography variant='para' sx={{
                                color:'#21a081',
                                display:'flex'
                            }}>
                                Start your Shop
                                <Box sx={{
                                    marginTop:'3px',
                                    marginLeft:'5px'
                                }}>
                                <IoIosArrowForward />
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default SocialMarket
