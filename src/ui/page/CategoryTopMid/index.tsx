import Grid from "@mui/material/Unstable_Grid2";
import {Stack, Divider, Typography} from "@mui/material";
import {Box} from "@mui/system";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import {NavigateFunction,useNavigate} from "react-router-dom";

export default function CategoryTopMid(){

  const navigate:NavigateFunction = useNavigate();

  return(
      <Box sx={{display:"grid", gridTemplateColumns:"repeat(12, 1fr)", gap:1, alignItems:"center"}}>
      {/*<Stack*/}
      {/*  direction={{*/}
      {/*    md: "row",*/}
      {/*    sm: "column"*/}
      {/*  }}*/}
      {/*  divider={<Divider orientation="vertical" flexItem/>}*/}
      {/*  justifyContent="space-evenly"*/}
      {/*  alignItems="center"*/}
      {/*>*/}
        <Box>
          <img width="400%"
               src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDYwazRzcGZzcmJhb29qeDI1YmJ0emtoczd6OXlkMW1oNWgxZXpnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2eKkOkFNjB1pNID2xv/giphy.webp"
               alt="Living Dining"/>
        </Box>
        <Box sx={{gridColumn:"span 8"}}>
          <Grid xs={12} sm={4} md={2} display="flex" direction="row">
            <Typography variant="caption" align='center'>Living Dining</Typography><br/>
            <Typography variant="caption" align='justify'>Living is something special meaning and
              enjoying</Typography><br/>
            <Typography variant="caption" align='justify'>SHOP NOW
              <InsertLinkOutlinedIcon onClick={() => (navigate("/shoppingcart"))}/>
            </Typography>
          </Grid>
        </Box>
      {/*</Stack>*/}
      <Stack
        direction={{
          md: "row",
          sm: "column"
        }}
        // divider={<Divider orientation="horizontal" flexItem/>}
        justifyContent="space-evenly"
        alignItems="center"
      >
      <Box>
        <img width="90%"
             src="https://media.tenor.com/_l3a-6tQzkoAAAAM/automatic-swiss-made-watches-original-men-watches.gif"
             alt="Watches n Accessories"/>
      </Box>
        <Box sx={{gridColumn:"span 4"}}>
        <Grid xs={12} sm={6} md={3} display="flex" direction="row">
          <Typography variant="caption" align='justify'>Watches_Accessories</Typography>
          <Typography variant="caption" align='justify'>Wonderful long-life accompany with luxury impression</Typography>
          <Typography variant="caption" align='justify'>SHOP NOW
            <InsertLinkOutlinedIcon onClick={()=>(navigate("/shoppingcart"))}/></Typography>
        </Grid>
        </Box>
      </Stack>
      {/*<Stack*/}
      {/*  direction={{*/}
      {/*    md: "row",*/}
      {/*    sm: "column"*/}
      {/*  }}*/}
      {/*  divider={<Divider orientation="vertical" flexItem/>}*/}
      {/*  justifyContent="space-evenly"*/}
      {/*  alignItems="center"*/}
      {/*>*/}
      <Box sx={{gridColumn: "span 4"}}>
      <Box>
        <img width="45%" height="55%"
             src="https://ideascdn.lego.com/media/generate/entity/lego_ci/user/8e942d37-f561-46ef-b6bf-1561d2b89ab5/10/resize_to_fill:175:175/webp"
             alt="Accessories n Decor"/>
      </Box>

        <Grid xs={12} sm={6} md={3} display="flex" direction="row">
          <Typography variant="caption" align='justify'>Accessories_Decor</Typography>
          <Typography variant="caption" align='justify'>Decorative moment and is specially for you</Typography>
        <Typography variant="caption" align='justify'>SHOP NOW
          <InsertLinkOutlinedIcon onClick={()=>(navigate("/shoppingcart"))}/></Typography>
        </Grid>
      </Box>
      {/*</Stack>*/}
      {/*<Stack*/}
      {/*  direction={{*/}
      {/*    md: "row",*/}
      {/*    sm: "column"*/}
      {/*  }}*/}
      {/*  divider={<Divider orientation="vertical" flexItem/>}*/}
      {/*  justifyContent="space-evenly"*/}
      {/*  alignItems="right"*/}
      {/*>*/}
      <Box sx={{gridColumn: "span 8"}}>
      <Box>
        <img width="45%" height="40%" src="https://media.giphy.com/media/JMyNJkBSrjbSE/giphy.gif" alt="Grocery"/>
      </Box>
        <Grid xs={12} sm={4} md={2} display="flex" direction="row">
          <Typography variant="caption" align='justify'>Grocery</Typography>
          <Typography variant="caption" align='justify'>Daily or something special your can find</Typography>
          <Typography variant="caption" align='justify'>SHOP NOW
            <InsertLinkOutlinedIcon onClick={()=>(navigate("/shoppingcart"))}/></Typography>
        </Grid>
      </Box>
      {/*</Stack>*/}
    </Box>

  )
}