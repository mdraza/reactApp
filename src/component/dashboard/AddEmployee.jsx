import React, {useState} from "react";
import { Box, Paper, TextField, Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {useHistory} from 'react-router-dom'

const myStyle = makeStyles((theme) => ({
    root: {
      width: "35%",
      padding: "20px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "10px",
      },
    },
    btn: {
      marginTop: "10px",
    },
  }));

const AddEmployee = () => {
    const classes = myStyle();
    const histry = useHistory()
    const [employee, setEmployee] = useState({
        login: '',
        node_id: '',
        avatar_url: ''
    })
    const {login, node_id, avatar_url} = employee

    const inputChangeHandle = (e) =>{
        setEmployee({
             ...employee, [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) =>{
        e.preventDefault()
        await axios.post("http://localhost:3003/employee", employee)
        histry.push("/dashboard")
    }

  return (
    <Container className="emp-detl">
        <Typography variant="h4" gutterBottom>Add Employee</Typography>
        <Paper component={Box} p={3} elevation={3} mt={3}>
        <form autoComplete="off" onSubmit={e => submitData(e)}>
          <TextField
            placeholder="Enter Employee Name"
            fullWidth
            variant="standard"
            margin="normal"
            name="login"
            value={login}
            onChange={e => inputChangeHandle(e)}
          />
          <TextField
            fullWidth
            placeholder="Enter Node ID"
            margin="normal"
            name="node_id"
            value={node_id}
            onChange={e => inputChangeHandle(e)}
          />
          <TextField
            fullWidth
            placeholder="Enter Avatar Url"
            margin="normal"
            name="avatar_url"
            value={avatar_url}
            onChange={e => inputChangeHandle(e)}
          />
          <Button type="submit" variant="contained" color="primary" className={classes.btn}>
            Add Employee
          </Button>
        </form>
        </Paper>
    </Container>
  );
};

export default AddEmployee;
