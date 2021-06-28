import React, { useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom'

const myStyle = makeStyles((theme) => ({
  root: {
    width: "25%",
    padding: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "10px",
    },
  },
  btn: {
    marginTop: "10px",
  },
  txt:{
    color: theme.palette.grey[400]
  }
}));

const Login = () => {
    const histry = useHistory()
  const [uname, setUname] = useState("")
  const [pass, setPass] = useState("")
  const classes = myStyle();

  const submitHandle = (e) => {
      e.preventDefault()
      if(uname === "raza" && pass === "raza@123"){
        localStorage.setItem("token", "jhfkjftjdt")
        histry.push("/dashboard")
      }
  }

  return (
    <div className="global-container">
      <Paper component={Box} elevation={3} className={classes.root}>
        <Typography variant="h5" color="primary">Employee Login</Typography>
        <form autoComplete="off" onSubmit={submitHandle}>
          <TextField
            placeholder="Enter Username"
            fullWidth
            variant="standard"
            name="uname"
            margin="normal"
            value={uname}
            onChange={(e) => setUname(e.target.value)}
          />
          <TextField
            fullWidth
            placeholder="Enter Password"
            margin="normal"
            name="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" className={classes.btn}>
            LogIn
          </Button>
          <Box>
            <Typography variant="caption" className={classes.txt}>Username: raza, Password: raza@123</Typography>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
