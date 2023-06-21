import { Card, TextField, Button, Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function RegisterLayout() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setConPassword] = useState("");
    const[isAdmin, setIsAdmin]=useState("")
    const[name,setName]=useState("")
    const navigate = useNavigate();
    const {saveToken} = useContext(AuthContext)
    const [errors,setErrors]=useState({email:"", password: ""})


const validate =()=>{
  let errors = {}
  if(email ===""){
    errors.email ="Email is required"
  }
  if(password ===""){
    errors.password ="Password is required"
  }
 setErrors(errors)

  if(Object.keys(errors).length !== 0){
    return false

  }
  else{
    return true
  }

}

  const handleRegister = async () => {

    if(!validate()) return ;
    //API Call
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/auth/register`,
        { email,password,isAdmin,name }
        );
        saveToken(data.accessToken);
        navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      height="50vh"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"120px"}
    >
      <Card sx={{ minWidth: "500px" }}>
        <Box
          p={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems="center"
          gap={5}
         
        >
          <Typography variant="h3">Registration</Typography>
          <TextField
            type="text"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => {
              setErrors({...errors, email:null})
              setEmail(e.target.value)}}
            error ={errors.email}
            helperText ={errors.email}
          ></TextField>
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => {
              setErrors({...errors, password:null})
              setPassword(e.target.value)}}
            error ={errors.password}
            helperText ={errors.password}
          ></TextField>
          <TextField
            type="password"
            label="Confirm Password"
            fullWidth
            value={password}
            onChange={(e) => {
              setErrors({...errors, password:null})
              setConPassword(e.target.value)}}
          ></TextField>
           <TextField
            type="text"
            label="isAdmin"
            fullWidth
            value={isAdmin}
            onChange={(e) => setIsAdmin(e.target.value)}
          ></TextField>
           <TextField
            type="text"
            label="Full Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleRegister}>
            register
          </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default RegisterLayout;