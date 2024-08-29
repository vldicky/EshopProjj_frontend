// import {Alert} from "@mui/material";
import TopNavbar from "../../component/TopNavbar.tsx";
import {Box} from "@mui/system";

export default function ErrorDisplayPage() {
  // if (!message) {  // No message.
  //   return null;
  // }
  // if (typeof message === 'string') {
  //   return <Alert sx={{mb: 4}} severity="error">
  //     {message}
  //   </Alert>;
  // }
  // const keys = Object.keys(message);
  // if (!keys.length) { // No keys in message object.
  //   return null;
  // }
  return (

    <>
      <TopNavbar/>
        <Box
          style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            height:"90vh",
            width:"90vw",

            // backgroundImage:`url("https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png","https://www.shutterstock.com/image-vector/illustration-browser-error-icon-file-not-2204247211")`,
            // backgroundImage:`url("https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png")`,
            // backgroundRepeat:"no-repeat",
            // backgroundPosition:"Top",
            // backgroundSize:"contain"
          }}
        >
          <img width="80%" height="90%" src="https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png"/>
        </Box>
    </>

  )
  {/*<Alert sx={{mb: 4}} severity="error"> {keys.map((key, index) => {return <Box key={index}>{message[key]}</Box>; })} </Alert>*/}
}