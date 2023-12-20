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
                    width:'70%',
                    margin:'0px auto',
                    textAlign:'center'
                }}>
                    <Grid container columns={16}>
                        <Grid item xs={3}>
                            <img src={SpotifyImg} />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={NikeImg} />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={AmdImg} />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={ApperImg} />
                        </Grid>
                        <Grid item xs={3}>
                            <img src={LogiTechImg} />
                        </Grid>

                    </Grid>
                </Box>


            </Box>
        </>
    )
}

export default TrustedFeatures
