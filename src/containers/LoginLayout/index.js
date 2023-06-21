import { Card, TextField, Button, Box, Typography } from "@mui/material";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginLayout() {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const {saveToken} = useContext(AuthContext)

  const handleLogin = async () => {
    //API Call
    try {
      const { data } = await axios.post(
        `http://localhost:8080/api/auth/login`,
        { email, password }
        );
        saveToken(data.accessToken);
        navigate('/dashboard')
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
          <Typography variant="h3">Login</Typography>
          <TextField
            type="text"
            label="Email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
          <TextField
            type="password"
            label="Password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
          <Button variant="contained" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="contained" onClick={() => navigate("/register")}>
             Register
           </Button>
        </Box>
      </Card>
    </Box>
  );
}

export default LoginLayout;