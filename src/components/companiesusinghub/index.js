import { Box, Typography } from '@mui/material'
import  Nike from '../../assets/nike-2.svg'
import Spotify from '../../assets/spotify.svg'
import Amd from '../../assets/amd-logo-2.svg'
import Apper from '../../assets/apper.svg'
import Logitech from '../../assets/logitech-2.svg'
import Levis from '../../assets/levis.svg'

const Companies = () => {
  return (
    <>
    <Box sx={{
        padding:'30px 0px'
    }}>

        <Typography variant='h6' sx={{
            marginLeft:'85px',
            fontSize:'16px',
            fontWeight:'700',
            color:'#737588'
        }}>
        These world-class teams are already using Hub
        </Typography>
        <Box sx={{
            width:'80%',
            margin:'10px auto',
            border:'1px solid #0000001a',
            borderRadius:'10px',
            display:'flex',
            padding:'45px',
            justifyContent:'space-between',
            flexWrap:'wrap'
        }}>
            <img  src={Spotify} alt='Screenshot' />
            <img  src={Nike} alt='Screenshot'/>
            <img  src={Amd} alt='Screenshot'/>
            <img  src={Apper} alt='Screenshot'/>
            <img  src={Logitech} alt='Screenshot'/>
            <img  src={Levis} alt='Screenshot'/>

        </Box>
    </Box>
      
    </>
  )
}

export default Companies
