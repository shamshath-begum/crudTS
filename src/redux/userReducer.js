import { createSlice } from "@reduxjs/toolkit";
 export  const userReducer = createSlice({
name:'students',
initialState:{
  studentData:[
  {
    name:"S.Shama",
    dob:"29.03.2000",
    email:"shama@gmail.com",
    mobile:"1234567899",
    teacher:"teacher-1",
    
 },
 {
  name:"A.Bilal",
    dob:"02.03.2000",
    email:"bilal@gmail.com",
    mobile:"1234327899",
    teacher:"teacher-2",
    
},
 {
  name:"B.Iqhra",
    dob:"06.08.2000",
    email:"iqhra@gmail.com",
    mobile:"1894567899",
    teacher:"teacher-3",
    
 },
 {
  name:"B.Rifa",
    dob:"16.03.2000",
    email:"rifa@gmail.com",
    mobile:"1234567843",
    teacher:"teacher-4",
    
}
]},
reducers:{
  addUsers:(state,action)=>{
    state.studentData.push(action.payload)
  },
  editUsers:(state,action)=>{
    state.studentData.splice(action.payload.index,1,action.payload.data)
  },
  deleteUsers:(state,action)=>{
    state.studentData.splice(action.payload.index,1)
  }
}
 })
 export const {addUsers,editUsers,deleteUsers}=userReducer.actions
 export default userReducer.reducer