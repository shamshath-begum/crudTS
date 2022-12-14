import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addUsers } from '../redux/userReducer';
import { useNavigate } from 'react-router-dom';
function AddUsers() {
let [name,setName]=useState("")
let [dob,setDob]=useState("")
let [email,setEmail]=useState("")
let [mobile,setMobile]=useState("")
let [teacher,setTeacher]=useState("")

let navigate=useNavigate();
let dispatch=useDispatch()
  return <div className='container-fluid'>
  <Form>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your First Name" onChange={(e)=>setName(e.target.value)} />
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>DOB</Form.Label>
        <Form.Control type="text" placeholder="Enter your Last Name" onChange={(e)=>setDob(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Enter your email"onChange={(e)=>setEmail(e.target.value)} />
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter your Mobile" onChange={(e)=>setMobile(e.target.value)}/>
       </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Teacher</Form.Label>
        <Form.Select defaultValue={"0"} onChange={(e)=>setTeacher(e.target.value)}>
          <option value="0" disabled>Available Teacher</option>
          <option  value="teacher-1">Teacher-1</option>
          <option  value="teacher-2">Teacher-2</option>
          <option  value="teacher-3">Teacher-3</option>
          <option  value="teacher-4">Teacher-4</option>
          
        </Form.Select>
        </Form.Group>
         <Button variant="primary" type="submit"onClick={()=>{
        dispatch(addUsers({name,dob,email,mobile,teacher}))
          navigate('/all-users')
        } }>
        Submit
      </Button>
    </Form>
  </div>
}

export default AddUsers