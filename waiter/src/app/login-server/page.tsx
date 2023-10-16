"use client";

import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth"
import { sign } from 'crypto';
import { auth, provider } from "../../lib/firebase";
import { useRouter } from 'next/navigation';

 const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);

    signInWithEmailAndPassword(auth, "test123@gmail.com","test123").then(async result=>{
      console.log(result);
      fetch("/api/login", {
        method:"POST",
        headers:{
          Authorization: `Bearer ${ await result.user.getIdToken()}`
        },
      }).then(response =>{
        if(response.status ===200){
          router.push("/dashboards");
        }
      });
      return console.log(result);
    });

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginPage;