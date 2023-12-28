import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProfileOne from '../../assets/profile-1.jpg'
import ProfileSecond from '../../assets/profile-2.jpg'
// import ProfileThird from '../../assets/profile-3.jpg'
import ProfileFourth from '../../assets/profile-4.jpg'
import AmazonImgUrl from '../../assets/amazon.svg'
import { IoStarSharp } from "react-icons/io5";



const StyledSlide = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
  boxShadow:'none',
  border:'none'
}));


function StyledCarousel() {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prevActive) => (prevActive + 1) % 4);
  const handlePrev = () => setActive((prevActive) => (prevActive - 1 + 4) % 4);

  const items = [
    {
      index: 0,
      content: 'We have three projects with this template and that is because we love the design,',
      contentSecond: 'the large number of possibilities to customize the template and the support received. We recommend it!',
      profileImage: ProfileOne,
      names: 'DIVIGINWONDERLAND',
      subName: 'Envato User',
      company: AmazonImgUrl,
    },
    {
      index: 1,
      content: 'We have three projects with this template and that is because we love the design,',
      contentSecond: 'the large number of possibilities to customize the template and the support received. We recommend it!',
      profileImage: ProfileSecond,
      names: 'BRUKMAXWELL',
      subName: 'Envato User',
      company: AmazonImgUrl,
    },
    {
      index: 2,

      content: 'We have three projects with this template and that is because we love the design,',
      contentSecond: 'the large number of possibilities to customize the template and the support received. We recommend it!',
      profileImage: ProfileFourth,
      names: 'RAY CLARK',
      subName: 'Netflex Chief Designer',
      company: AmazonImgUrl,
    },

  ];

  return (
    <Paper sx={{ width: '100%', margin: 'auto', maxWidth: 800, }}>
      <Carousel
        active={active}
        next={handleNext}
        prev={handlePrev}
        autoPlay={true}
        interval={3000}
      >
        {items.map((item) => (
          <StyledSlide key={item.index}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Grid >
                  <Box sx={{
                    border: '1px solid #0000000b',
                    width: '15%',
                    margin: '20px auto',
                    padding: '7px',
                    borderRadius: '12px',
                    color: '#243858'
                  }}>
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </Box>
                </Grid>

              </Grid>
              <Grid item xs={12}>
                <Typography sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#243858',
                }}>
                  {item.content}
                  <Typography variant='para' sx={{
                    color: '#638293',
                  }}>
                    {item.contentSecond}
                  </Typography>
                </Typography>

              </Grid >
              <Grid xs={12} sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '30px 0px'
              }}>
                <Grid>
                  <img src={item.profileImage} alt='screenshot' width='55%' />
                </Grid>
                <Grid sx={{
                  textAlign:'left'
                }}>
                  <Typography sx={{
                    color:'#243858',
                    fontWeight:'600',
                    fontSize:'16px',
                    marginTop:'12px'
                  }}>
                    {item.names}
                  </Typography>
                  <Typography sx={{
                    color:'#8c8c8c',
                    fontWeight:'600',
                    fontSize:'14px',
                    marginTop:'12px'
                  }}>
                    {item.subName}
                  </Typography>
                </Grid>
              </Grid>
              <Grid xs={12} sx={{
                borderTop:'1px solid #0000000b',
                borderBottom:'1px solid #0000000b',
                margin:'0px auto',
                paddingBottom:'20px'
              }}>
                <Box sx={{
                  marginTop:'30px',
                }}>
                  <img src={item.company} alt='screenshot' />
                </Box>
              </Grid>
            </Grid>
          </StyledSlide>
        ))}
      </Carousel>

    </Paper>
  );
}



export default StyledCarousel;
