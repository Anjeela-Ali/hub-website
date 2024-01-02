import { Box, Typography, ButtonGroup, Button } from '@mui/material'
import CaseStudyImgOne from '../../assets/casestudy_img_two.jpg';
import CaseStudyImgTwo from '../../assets/casestudy_img_one.jpg';
import CaseStudyImgThird from '../../assets/casestudy_img_third.jpg';
import CaseStudyImgFourth from '../../assets/casestudy_img_fourth.jpg'
import { useState } from 'react';
import { IoMdArrowForward } from "react-icons/io";




const CaseStudy = () => {

  const [selectCategory, setSelectCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  }

  const galleryData = [

    {
      tags: ['digital design', 'ecomerce'],
      src: CaseStudyImgOne,
      alt: 'ScreenShot',
      gridColumn: "span 6",
      gridRow: 'span 1'
    },
    {
      tags: 'ecomerce',
      src: CaseStudyImgTwo,
      alt: 'ScreenShot',
      gridColumn: "span 6"
    },
    {
      tags: 'branding',
      src: CaseStudyImgThird,
      alt: 'ScreenShot',
      gridColumn: "span 3"
    },
    {
      tags: ['branding', 'digital design'],
      src: CaseStudyImgFourth,
      alt: 'ScreenShot',
      gridColumn: "span 3"
    }
  ]

  const filteredGallery = selectCategory === 'all'
    ? galleryData
    : galleryData.filter(item => item.tags.includes(selectCategory));

  const styles = {
    headline: {
      color: '#225469',
      fontSize: '45px',
      fontWeight: '700',
      lineHeight: '1',
      padding: '30px 0px',
      marginTop: '50px'
    },
    imageContainer: {
      borderRadius: '20px',
      overflow: 'hidden',
    },
    buttons: {
      textTransform: 'capitalize',
      border: 'none ',
      fontSize: '15px',
      color: 'black',
      fontWeight: '500',
      '&: hover':{
        border: 'none ',
        backgroundColor:'none',
        color:'#c10909'
      },
      '&: focus':{
        border: 'none ',
        backgroundColor:'none',
        color:'#c10909'
      }

    }
  }
  return (
    <>
      <Box>
        {/* Heading */}
        <Box sx={{
          textAlign: 'center'
        }}>

          <Typography variant='h2' sx={styles.headline}>
            Case Studies
          </Typography>
          <Typography variant='body2' sx={{
            fontSize: '18px',
            color: '#737588',
            paddingBottom: '50px'
          }}>
            Passionate about solving problems through <br /> creative communications.
          </Typography>
        </Box>
        {/* Menu Items */}
        {/* Category Buttons */}
        <Box sx={{
          display: {xs:'block',sm:'block',md:'block',lg:'flex',xl:'flex'},
          width: '90%',
          justifyContent:'space-between',
          margin: '10px auto',
        }}>
          <Typography variant='para' sx={{
            paddingRight: '24px',
            paddingLeft: '10px',
            paddingTop: '5px',
            fontSize: '18px',
            width:'6%'
          }}>
            Filter By
          </Typography>

          <ButtonGroup sx={{
            width:{sm:'65%',md:'70%',lg:'50%',xl:'50%'},
         
            margin:'10px'
          }}>
            <Button onClick={() => handleCategoryChange('all')} sx={styles.buttons}>All <Typography style={{
              marginBottom: '13px',
              fontSize: '10px',
              marginLeft: '4px'
            }}>4</Typography> </Button>
            <Button onClick={() => handleCategoryChange('branding')} sx={styles.buttons}>Branding <Typography style={{
              marginBottom: '13px',
              fontSize: '10px',
              marginLeft: '4px'
            }}>2</Typography> </Button>
            <Button onClick={() => handleCategoryChange('digital design')} sx={styles.buttons}>Digital Design <Typography style={{
              marginBottom: '13px',
              fontSize: '10px',
              marginLeft: '4px'
            }}>2</Typography> </Button>
            <Button onClick={() => handleCategoryChange('ecomerce')} sx={styles.buttons}>Ecomerce <Typography style={{
              marginBottom: '13px',
              fontSize: '10px',
              marginLeft: '4px'
            }}>2</Typography> </Button>
            {/* Add more buttons for additional categories */}
          </ButtonGroup>

          <Box sx={
            {
              width:'30%',
              textAlign:'right',
              verticalAlign:'middle',
            }
          }>
            <Typography variant='para' sx={{
              verticleAlign:'center',
              alignItems:'center',
              color:'#707070'

            }}>
              See More <Typography variant='para' sx={{
                marginBottom:'20px',
                paddingTop:'30px',
              }}> <IoMdArrowForward /></Typography> 

            </Typography>
            

            
           

          </Box>
        </Box>

        {/* Grid box */}

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3} sx={{
          width: '90%',
          margin: '50px auto', // Center items horizontally
          // alignItems: 'center',

        }}>
          {
            filteredGallery.map((item, index) => (
              <Box key={index} gridColumn={item.gridColumn} gridRow={item.gridRow} sx={styles.imageContainer}>
                <img src={[item.src]} alt='screenshot' width='100%' />
              </Box>
            ))
          }


        </Box>
      </Box>
    </>
  )
}

export default CaseStudy;
