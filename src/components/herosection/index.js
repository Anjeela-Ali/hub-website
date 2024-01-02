import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { LuTriangleRight } from "react-icons/lu";
import { BsFillDiamondFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import Grid from '@mui/material/Grid';
import ImgOne from '../../assets/hero_img_one.png';
import ImgTwo from '../../assets/hero_img_two.png';
import ImgThree from '../../assets/hero_img_three.png';
import ImgFour from '../../assets/hero_img_four.png';



const HeroSection = () => {
  const styles = {
    headlineContainer: {
      fontSize: {xs:'45px',sm:'55px',md:'65px',lg:'75px',xl:'75px'},
      fontWeight: '900',
      color: 'white',
    },
    subHeadline: {
      fontSize: {xs:'16px',sm:'18px',md:'20px',lg:'22px',xl:'22px'},
      fontWeight: '500',
      color: '#ffffff80'
    },
    buttonStyle: {
      borderRadius: '50px',
      textTransform: 'capitalize',
      textAlign: 'left',
      fontSize: '15px',
      fontWeight: '600',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingRight: '65px',
      paddingLeft: '30px',
      backgroundColor: 'white',
      color: '#471412'
    }
  }
  return (
    <>
      <Box sx={{
        backgroundImage: 'linear-gradient(120deg, #353A5F 0%, #191C33 100%)',
        transition: 'transform .85s cubic-bezier(.23, 1, .32, 1),background .3s,border .3s,border-radius .3s,box-shadow .3s',
        position: 'relative'
      }}>
        <Box sx={{
          textAlign: 'center'
        }}>
          {/* Headline */}
          <Box sx={{

            paddingTop: '70px'
          }}>
            <Typography variant="h1" sx={styles.headlineContainer}>
              Experience magical
            </Typography>
            <Typography sx={styles.headlineContainer}>
              digital solutions.
            </Typography>
          </Box>
          {/* Sub-headline  */}
          <Box sx={{
            paddingTop: '20px'
          }}>
            <Typography variant="para" sx={styles.subHeadline}>
              Use customer data to build great and
            </Typography>
            <Typography variant="para" sx={styles.subHeadline} display='block'>
              solid product experiences that convert.
            </Typography>
          </Box>
          {/* Button */}
          <Box sx={{
            marginTop: '40px',
          }}>
            <Button sx={styles.buttonStyle}>
              Let's talk - <br />
              Limited time offer
            </Button>
          </Box>
          {/* Text */}
          <Box sx={{
            display: 'flex',
            width: '50%',
            justifyContent: 'center',
            margin: '0px auto',
            paddingBottom:'30px',
            paddingTop:'30px'
          }}>
            <Box sx={{
              color: 'white',
              display: 'flex',
              marginRight: '8px',
              marginTop:'2px'
            }}>
              <LuTriangleRight />
              <Box sx={{
                color: 'yellow',
                margin: '0px 9px'
              }}>
                <BsFillDiamondFill />
              </Box>
              <FaCircle />

            </Box>
            <Box>
              <Typography variant='body' sx={{
                color: '#ffffff80'
              }}>
                Try for free. No credit card required.
              </Typography>

            </Box>
          </Box>
        </Box>
        {/* Illustrattion */}
        <Box sx={{
          width: '80%',
          margin: '12px auto',
          position: 'absolute',
          top: '45px',
          left: '50px',
          right: '50px'
        }}>
          <Grid container spacing={2}>

            <Grid item xs={6}>
              <Box sx={{
                paddingLeft: '110px'
              }}>
                <img src={ImgOne} alt='screenshot' width='20%' />
              </Box>
            </Grid>

            <Grid item xs={6} sx={{
              textAlign: 'right',
            }}>
              <Box sx={{
                paddingTop:'110px',
                paddingRight:'40px'
              }}>

                <img src={ImgThree} alt='screenshot' width='20%' />
              </Box>
            </Grid>

            <Grid item xs={6} >
              <Box sx={{
                paddingLeft:'120px',
                paddingTop:'0px'
              }}>

                <img src={ImgTwo} alt='screenshot' width='25%' />
              </Box>
            </Grid>

            <Grid item xs={6} sx={{
              textAlign: 'right',
            }}>
              <Box  sx={{
                paddingRight:'120px'
              }}>
                <img src={ImgFour} alt='screenshot' width='20%' />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default HeroSection
