import { Box } from "@mui/material";
import { border, styled } from "@mui/system";

const DashboardBox = styled(Box)(({theme}) => ({
   backgroundColor: theme.palette.background.light,
   borderRadius: "1rem",
   boxShadoow:"0.15rem 0.2rem 0.15rem rgba(0,0,0,0.8)",
    }));
export default DashboardBox;