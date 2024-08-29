import {Alert, Snackbar} from "@mui/material";

type Props={
  open:boolean;
  handleClose:()=>void ;
}


export default function AddToCartSuccessSnackBar({open,handleClose}:Props){

  return(
    <>
    <Snackbar anchorOrigin={{vertical:'top', horizontal:'right'}}
              open={open}
              autoHideDuration={4800}
              onClose={handleClose}
              sx={{my:6}}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        This is a success Alert inside a Snackbar!
      </Alert>
    </Snackbar>
    </>
  )
}