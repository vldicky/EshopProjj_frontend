import {Box} from "@mui/system";

export default function LoadingContainer(){
  return(
    <>
        <Box
          sx
            ={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width: "100%",
              height: "100vh"
            }}
        >
          <img src="https://smashinghub.com/wp-content/uploads/2014/08/cool-loading-animated-gif-1.gif)"/>
        </Box>
    </>
  )
}