import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
    background:'none',
    border:'1px solid blue',
    padding:'20px 0px'
  
  }));
const LatestPosts = () => {
    return (
        <>
            <Box sx={{
                border: '1px solid red',
                padding: '20px',
                width:'80%',
                margin:'30px auto'
            }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                            <Item>
                                <Typography variant='para' sx={{
                                    border:'1px solid red',
                                    borderRadius:'40px',
                                    padding:'5px',
                                    
                                }}>
                                    SHARE YOUR STORY
                                </Typography>
                                <Typography variant='h3'>
                                Latest Posts
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs={6} md={8}>
                            <Item>
                            <Typography variant='body2'>
                            Our design services starts and ends with a best-in-class experience strategy that builds brands.
                            </Typography>
                            </Item>
                        </Grid>
                       
                       
                    </Grid>
                </Box>

            </Box>
        </>
    )
}

export default LatestPosts
