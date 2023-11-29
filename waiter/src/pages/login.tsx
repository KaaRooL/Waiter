import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { auth} from "../lib/firebase";

 const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, "test123@gmail.com","test123").then(async result=>{

      fetch("/api/login", {
        method:"POST",
        headers:{
          Authorization: `Bearer ${ await result.user.getIdToken()}`
        },
      }).then(response =>{
        console.log("Response from apilogin")
        console.log(response);
        if(response.status ===200){
          router.push("/dashboard");
        }
      }).catch((error)=>{
        console.log("Error");
        console.log(error)
      });
      return console.log(result);
    });

    // Implement your login logic here
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