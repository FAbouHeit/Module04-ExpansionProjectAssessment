import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/UserContext/UserContext';
import axios from 'axios';

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const submitHandler = async(e) =>{
    e.preventDefault();
    await axios.post(`http://localhost:5000/auth/signup`, {
        email: email,
        password: password,
        name: name,
        role: "admin"
      })
      .then((res) => {
        if (res) {
          setUser(res.data.token.data);
        } else {
          setUser("no user found");
        }
      });
    navigate("/sign-in");
    
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={(e)=> submitHandler(e)} style={{display: "flex", flexDirection:"column", width:"300px", margin: "30vh 30vw"}}>
      <input style={{height:"50px"}} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='email'/>
      <input  style={{height:"50px"}} onChange={(e) => setPassword(e.target.value)}  type='password' placeholder='password'/>
      <input  style={{height:"50px"}} onChange={(e) => setName(e.target.value)}  type='text' placeholder='name'/>
      <button style={{height:"50px"}} onSubmit={(e)=> submitHandler(e)}>Sign In</button>
      </form>
    </div>
  )
}
