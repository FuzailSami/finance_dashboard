import {useState} from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography,useTheme } from '@mui/material'
import FlexBetween from '@/components/FlexBetween'
import PixIcon from '@mui/icons-material/Pix'


type Props = {}

const NavBar = (props: Props) => {
  const {palette} = useTheme()
  const [selected, setSelected] = useState("dashboard");
  return ( 
    <FlexBetween mb="0.25rem" p="0.5rem 0 rem" color={palette.grey[300]}> 
    {}
    <FlexBetween gap="0.75rem">
      <PixIcon sx={{fontSize:"28px"}}/>
      <Typography variant="h4" fontSize="16px">
         Finanseer
      </Typography>
    </FlexBetween>
    {}
    <FlexBetween gap="2rem">
        <Box sx={{"&:hover":{color:palette.primary[100]}}}>
            <Link 
            to="/"
            onClick={() => setSelected("dashboard")}>
             dashboard
            </Link>
        </Box>
        <Box></Box>
    </FlexBetween>
  </FlexBetween>
   
  );
};

export default NavBar