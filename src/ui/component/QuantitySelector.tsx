import {IconButton, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';

type Props={
  quantity:number;
  handleQtyMinus:()=>void;
  handleQtyPlus:()=>void;
}


export default function QuantitySelector({quantity, handleQtyMinus, handleQtyPlus}: Props){

  return(
    <>
      <Stack direction="row">
        <IconButton
          onClick={handleQtyMinus}
        >
          <RemoveOutlinedIcon/>
        </IconButton>
        <Box
          sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            minWidth:"32",
            minHeight:"32"
          }}
        >
          <Typography variant="subtitle1">
            {quantity}
          </Typography>
        </Box>
        <IconButton
          onClick={handleQtyPlus}
        >
          <AddOutlinedIcon/>
        </IconButton>
      </Stack>
    </>
  )
}