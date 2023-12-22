import { Box, Typography } from '@mui/material'
import FeaturesImgUrl from '../../assets/features_two.png'

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
                    border:'1px solid blue'
                }}>
                    <Box sx={{
                        width:"45%",
                        border:'1px solid red'
                    }}>
                        <Typography  variant='h4'>
                        We have three projects with this template and that is because we love the design, <Typography variant='para'>  the large number of possibilities.</Typography>
                        </Typography>

                    </Box>
                    <Box sx={{
                        width:'45%',
                        border:'1px solid red ',
                        textAlign:'center'
                    }}>
                            <img src={FeaturesImgUrl} alt='screenshot'/>
                    </Box>
                </Box>

            </Box>

        </>
    )
}

export default DetailedSection
