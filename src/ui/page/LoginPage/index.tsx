import {Alert, Button, CircularProgress, Dialog, DialogContent, DialogTitle, Divider, TextField} from "@mui/material";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import {useState} from "react";
import TopNavbar from "../../component/TopNavbar.tsx";
import {Box, Container} from "@mui/system";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {GoogleLoginButton} from "react-social-login-buttons";

export default function LoginPage() {
  const [email,setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [isloginFailed,setIsloginFailed] = useState<boolean>(false)
  const [isLoggingIn,setIsLoggingIn] = useState<boolean>(false)
  const navigate: NavigateFunction = useNavigate();

  const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
    setPassword(event.target.value);
  }

  const handleSignInWithEmailAndPassword = async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const LoginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
    if (LoginResult){
      navigate(-1);
    }else{
      setIsloginFailed(true);
    }
  }

  const handleGoogleLogin = async ()=> {
    const LoginResult = await FirebaseAuthService.handleSignInWithGoogle();
    if (LoginResult) {
      navigate(-1);
    }
  }

  const renderLoginButton = () =>{
    if(!isLoggingIn){
      return (
        <Button variant="contained" color="warning" fullWidth type="submit">
          Log In
        </Button>
      )
    }else{
      setIsLoggingIn(true)
      return( <CircularProgress/>)
    }
  }


  return(
    <>
      <TopNavbar/>
        <Container>
          <Box
            sx={{
              width:"100%",
              backgroundImage:`url("https://i.pinimg.com/736x/e1/f4/36/e1f43661d0588d07ba29fcfe9e8868bd.jpg")`,
              backgroundRepeat:"no-repeat",
              backgroundPosition:"center",
              backgroundSize:"contain"
            }}
          >
            <Dialog open sx={{width:'md', height:'md', align:"center"}}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              {
                isloginFailed &&
                  <Alert sx={{mb: 4}} severity="error">This is an Error Alert!</Alert>
              }
              <form onSubmit={handleSignInWithEmailAndPassword}>
                <TextField margin="normal" label="Email"
                           type="email" fullWidth value={email} onChange={handleEmailChange}/>
                <TextField margin="normal" label="Password"
                           type="password" fullWidth value={password} onChange={handlePasswordChange}/>
                {renderLoginButton()}
                <Divider sx={{my:2}} />
                <GoogleLoginButton
                  style={{
                    width:"100%",
                    margin:0
                  }}
                  onClick={handleGoogleLogin}
                />
              </form>
            </DialogContent>
            </Dialog>
          </Box>
        </Container>
    </>
  )
}