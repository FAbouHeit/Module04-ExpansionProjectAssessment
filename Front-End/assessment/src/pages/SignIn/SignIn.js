import React, { useContext, useState } from 'react'
import { UserContext } from '../../components/UserContext/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const submitHandler = async(e) =>{
    e.preventDefault();
    await axios.post(`http://localhost:5000/auth/signin`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res) {
          setUser(res.data.token.data);
        } else {
        }
      });
    navigate("/");
    
    console.log(user);
  }

  return (
    <div>
      <form onSubmit={(e)=> submitHandler(e)} style={{display: "flex", flexDirection:"column", width:"300px", margin: "30vh 30vw"}}>
      <input style={{height:"50px"}} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='email'/>
      <input  style={{height:"50px"}} onChange={(e) => setPassword(e.target.value)}  type='password' placeholder='password'/>
      <button style={{height:"50px"}} onSubmit={(e)=> submitHandler(e)}>Sign In</button>
      </form>
    </div>
  )
}
