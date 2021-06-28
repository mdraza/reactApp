import React, {Fragment, useEffect, useState} from 'react'
import {Container, Box, Typography, Table, TableHead, TableContainer, TableBody, TableCell, TableRow, AppBar, Toolbar, Button, Checkbox } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '0 30px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    editBtn:{
        color: theme.palette.primary.main,
        cursor: 'pointer'
    },
    deleteBtn: {
        color: "red",
        cursor: 'pointer'
    }
  }));

const Dashboard = () => {
    const classes = useStyles();
    const [employee, setEmployee] = useState([])
    const [selectAll, setSelectAll] = useState(false)

    useEffect(() =>{
        loadEmployee()
    },[])

    const loadEmployee = async () => {
        const res = await axios.get("http://localhost:3003/employee")
        setEmployee(res.data.reverse())
    }

    const deleteEmp = async (id) =>{
        await axios.delete(`http://localhost:3003/employee/${id}`)
        loadEmployee()
    }

    return (
        <div>
            <AppBar className={classes.root}>
                <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    Task
                </Typography>
                <Link to="/addemployee" className="addemp">Add Employee</Link>&nbsp;
                <Link to="/" className="logout">Logout</Link>
                </Toolbar>
            </AppBar>
            <Container component={Box} mt={3} textAlign="center">
            <Typography variant="h4" color="primary">Employee Details</Typography>
            <TableContainer component={Box} boxShadow={3} mt={3}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell className="head-txt">
                        <Checkbox
                            color="primary"
                            id="selectAll"
                            type="checkbox"
                            value={selectAll}
                            onClick={() => setSelectAll(!selectAll)}
                        />
                        </TableCell>
                        <TableCell className="head-txt">Employee Name</TableCell>
                        <TableCell className="head-txt">Node ID</TableCell>
                        <TableCell className="head-txt">Avatar</TableCell>
                        <TableCell className="head-txt">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                           employee.map(emp =>(
                            <TableRow key={emp.id}>
                                <TableCell>
                                <Checkbox
                                    color="primary"
                                />
                                </TableCell>
                                <TableCell>{emp.login}</TableCell>
                                <TableCell>{emp.node_id}</TableCell>
                                <TableCell><Avatar alt="Employee Avatar" src={emp.avatar_url} /></TableCell>
                                <TableCell>
                                    <Link to={`/EditEmployee/${emp.id}`}><EditIcon className={classes.editBtn}/></Link> &nbsp;
                                    <DeleteIcon onClick={() => deleteEmp(emp.id)} className={classes.deleteBtn}/>
                                </TableCell>
                            </TableRow>
                           )) 
                        }
                        
                    </TableBody>
                </Table>
                </TableContainer>
        </Container>
        
        </div>
    )
}

export default Dashboard
