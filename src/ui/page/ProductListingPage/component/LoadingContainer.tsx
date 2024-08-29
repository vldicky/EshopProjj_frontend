import Skeleton from '@mui/material/Skeleton';
import {Box} from "@mui/system";

export default function LoadingContainer(){
  return(
    <Box
      style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height: "85vh"
      }}
    >
      <Box sx={{ width: 300 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>
      {/*//a gif photo instead??*/}
    </Box>
  )
}