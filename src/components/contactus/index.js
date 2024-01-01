import { Box, Button, Typography } from '@mui/material'
import BgImgUrl from '../../assets/contact.png'

const ContactUsSection = () => {
    return (
        <>
            <Box sx={{
                position: 'relative',
                margin: '80px 0px'
            }}>
                <Box >
                    <img src={BgImgUrl} />
                </Box>
                <Box sx={{
                    textAlign: 'center',
                    position: 'absolute',
                    left: '0px',
                    right: '0px',
                    top: '12px'
                }}>
                    <Typography variant='h3' sx={{
                        color: '#45485f',
                        fontSize: '45px',
                        fontWeight: '700'
                    }}>
                        Have a project in <br /> mind? Let's connect
                    </Typography>
                    <Typography variant='body2' sx={{
                        fontSize: '19px',
                        fontWeight: '700',
                        color: '#225469',
                        marginTop: '22px',
                    }}>
                        We have three projects with this template and that is  <br /> because we love the design, <Typography variant='para' sx={{
                            fontWeight: '700',
                            color: '#767575'
                        }}>the large number of possibilities.</Typography>
                    </Typography>
                    <Button sx={{
                        backgroundImage: 'linear-gradient(110deg,rgb(0,127,255) 0,rgba(255,0,0,0.6) 100%)',
                        padding: '14px 40px',
                        textTransform: 'capitalize',
                        color: 'white',
                        borderRadius: '50px',
                        fontSize: '17px',
                        margin: '30px auto'
                    }}>
                        Send a message
                    </Button>
                </Box>

                <Box sx={{
                    border: '1px solid red',
                    padding: '20px'
                }}>

                    <Box sx={{
                        border: '1px  solid red ',
                        width: '40%',
                        margin: '20px auto',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                    }}>

                        <Typography variant='h6' sx={{
                            borderRight: '1px  solid red',
                            paddingTop: '30px',
                            paddingBottom: '30px',
                            paddingRight: '50px',
                            fontSize: '17px',
                            color: '#737588',
                            fontWeight: '500'
                        }}>
                            Project Offers
                            <Typography variant='h6' sx={{
                                fontSize: '22px',
                                fontWeight: '600',
                                color: '#04014c'
                            }}>
                                info.liquid.com
                            </Typography>
                        </Typography>

                        <Typography variant='h6' sx={{
                            paddingTop: '30px',
                            paddingBottom: '30px',
                            paddingRight: '20px',
                            fontSize: '17px',
                            color: '#737588',
                            fontWeight: '500'
                        }}>
                            Consultation
                            <Typography variant='h6' sx={{
                                fontSize: '22px',
                                fontWeight: '600',
                                color: '#04014c'
                            }}>
                                + 1 223 38 87
                            </Typography>
                        </Typography>
                    </Box>

                </Box>
            </Box>

        </>
    )
}

export default ContactUsSection
