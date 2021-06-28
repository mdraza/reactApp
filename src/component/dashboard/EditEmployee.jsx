import React, {useState, useEffect} from "react";
import { Box, Paper, TextField, Button, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import {useHistory, useParams} from 'react-router-dom'

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

const EditEmployee = () => {
    const classes = myStyle();
    const histry = useHistory()
    const [employee, setEmployee] = useState({
        login: '',
        node_id: '',
        avatar_url: ''
    })
    const {id} = useParams()
    const {login, node_id, avatar_url} = employee

    const inputChangeHandle = (e) =>{
        setEmployee({
             ...employee, [e.target.name]: e.target.value
        })
    }

    const submitData = async (e) =>{
        e.preventDefault()
        await axios.put(`http://localhost:3003/employee/${id}`, employee)
        histry.push("/dashboard")
    }

    const loadUser = async () =>{
        const res = await axios.get(`http://localhost:3003/employee/${id}`)
        setEmployee(res.data)
    }

    useEffect(() =>{
        loadUser()
    },[])

  return (
    <Container className="emp-detl">
        <Typography variant="h4" gutterBottom>Update Employee</Typography>
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
            Update Employee
          </Button>
        </form>
        </Paper>
    </Container>
  );
};

export default EditEmployee;
