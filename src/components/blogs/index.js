import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import BlogCards from './cards';



const Item = styled(Paper)(({ theme }) => ({
    background: 'none',
    padding: '20px 0px',
    boxShadow: 'none'

}));
const LatestPosts = () => {
    return (
        <>
            <Box sx={{
                padding: '20px',
                width: '80%',
                margin: '30px auto'
            }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={6}>
                            <Item>
                                <Typography variant='para' sx={{
                                    borderRadius: '40px',
                                    padding: '5px',
                                    color: '#000',
                                    backgroundColor: '#1c4f8d1c',
                                    fontSize: '10px',
                                    fontWeight: '700',


                                }}>
                                    SHARE YOUR STORY
                                </Typography>
                                <Typography variant='h3' sx={{
                                    color: '#45485f',
                                    fontSize: '45px',
                                    fontWeight: '700',
                                    padding: '20px 0px'
                                }}>
                                    Latest Posts
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Item>
                                <Typography variant='body2' sx={{
                                    fontSize: '20px',
                                    color: '#505050',
                                    marginTop: '20px'
                                }}>
                                    Our design services starts and ends with a best-in-class experience strategy that builds brands.
                                </Typography>
                            </Item>
                        </Grid>


                    </Grid>
                </Box>

                <Box  sx={{
                        margin: '30px 0px',
                        padding: '20px 0px',
                        display:'flex',
                        justifyContent:'space-between'
                    }}>                                                
                                <BlogCards />
                    </Box>

            </Box>
        </>
    )
}

export default LatestPosts
