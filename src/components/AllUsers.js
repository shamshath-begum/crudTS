import { Button } from 'react-bootstrap';
import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector,useDispatch } from 'react-redux';
import {deleteUsers} from './../redux/userReducer'
import { useNavigate } from 'react-router-dom';
function AllUsers() {
  let data=useSelector((state)=>state.students.studentData)
  let dispatch=useDispatch()
  let navigate=useNavigate()
  return <div className='container-fluid'>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Teacher</th>
          <th>Action</th>
          
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key={i}>
            <td>{i+1}</td>
            <td>{e.name}</td>
            <td>{e.dob}</td>
            <td>{e.email}</td>
            <td>{e.mobile}</td>
            <td>{e.teacher}</td>
            <td>
              <Button variant="primary" onClick={()=>navigate(`/edit-users/${i}`)}>Edit</Button>
              &nbsp;
              &nbsp;
              <Button variant="danger" onClick={()=>dispatch(deleteUsers({index:i}))}>Delete</Button>
            </td>
          </tr>
          })
        }
       
       
      </tbody>
    </Table>
  
  </div>
    
  
}

export default AllUsers