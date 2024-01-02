import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SpotifyImg from '../../assets/spotify-1.svg';
import NikeImg from '../../assets/nike.svg';
import AmdImg from '../../assets/amd-logo-1.svg';
import ApperImg from '../../assets/Path-43399.svg';
import LogiTechImg from '../../assets/logitech-2-1.svg'



const TrustedFeatures = () => {
    return (
        <>
            <Box sx={{
                backgroundColor: '#353A5F',
                padding: '40px 0'
            }}>
                <Box sx={{
                    width: '80%',
                    margin: '0px auto',
                    textAlign: 'center',
                }}>
                    <Grid container spacing={2} sx={{
                        justifyContent:'center'
                    }}>
                        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                            <img src={SpotifyImg} alt="Spotify" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                            <img src={NikeImg} alt="Nike" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                            <img src={AmdImg} alt="AMD" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                            <img src={ApperImg} alt="Apper" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={2} xl={3}>
                            <img src={LogiTechImg} alt="LogiTech" />
                        </Grid>
                    </Grid>
                </Box>


            </Box>
        </>
    )
}

export default TrustedFeatures
