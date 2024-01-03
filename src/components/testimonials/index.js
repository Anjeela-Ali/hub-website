import { Box, Typography } from '@mui/material'
import { AiOutlineMessage } from "react-icons/ai";
import imgUrl from '../../assets/testimonials.png';
import StyledCarousel from './carousal';


const TestimonialsSection = () => {
    return (
        <>
            <Box sx={{
                padding:'60px 0px'
            }}>
                <Box sx={{
                    display: {xs:'block',sm:'block',md:'block',lg:'flex',xl:'flex'},
                    justifyContent: 'space-evenly',
                    width:'85%',
                    margin:'30px auto',
                    flexWrap:'wrap'

                }}>
                    <Box sx={{
                        width: {xs:'70%',sm:'60%',md:'50%',lg:'35%',xl:'35%'},
                    }}>
                        <Box sx={{
                            display: 'flex'
                        }}>
                            {/* icon */}
                            <Box sx={{
                                padding: '9px 12px',
                                borderRadius: '100%',
                                fontSize: '22px',
                                color: '#008aba',
                                background: '#b7eef5'
                            }}>
                                <AiOutlineMessage />

                            </Box>
                            <Typography variant='para' sx={{
                                fontSize: '20px',
                                fontWeight: '600',
                                marginTop: '10px',
                                marginLeft: '10px'
                            }}>
                                -97.6
                            </Typography>
                            <Typography variant='h3' sx={{
                                fontSize: '18px',
                                marginTop: '10px',
                                marginLeft: '10px'

                            }}>
                                Customer Satisfaction
                            </Typography>
                        </Box>
                        <Box>
                            <Box sx={{
                                 display: 'flex',
                                flexDirection: 'row', 
                                alignItems: 'center',
                            }}>
                                <Typography variant='h3' sx={{
                                    color: '#225469',
                                    fontWeight: '700',
                                    fontSize: '36px',
                                    margin:'20px 0px'
                                }}>
                                    Hear from
                                    <Box sx={{
                                        color: '#225469',
                                        fontWeight: '700',
                                        fontSize: '40px',
                                        lineHeight: 'normal',
                                        background: 'linear-gradient(0deg, rgb(116, 159, 239) 0%, rgb(68, 82, 242) 100%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}>
                                        happy
                                    </Box>      customers.
                                </Typography>

                            </Box>

                            <Typography variant='body' sx={{
                                fontSize:'20px',
                                lineHeight:'1.5',
                                color:'#737588'
                            }}>
                                Bring your ideas to life with an intuitive visuals editor. Create, edit, and customize your website visually and see the changes instantly.
                            </Typography>
                            <Box sx={{
                                margin:'20px 10px'
                            }}>
                                <img src={imgUrl} alt='screenshot' width='25%'/>
                            </Box>
                        </Box>

                    </Box>
                    <Box sx={{
                        width: {xs:'100%',sm:'95%',md:'80%',lg:'60%',xl:'60%'},
                        boxShadow:'1px 1px 77px #e5e2e2',
                        borderRadius:'30px',
                        overflow:'hidden'
                    }}>
                        <StyledCarousel />
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default TestimonialsSection
