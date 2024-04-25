import { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'ayush123' && password === '12345') {
        onLogin();
      } else {
        alert('Invalid username or password');
      }
    };
  
    return (
        <div className="flex w-full h-full text-center">
      <div className="w-96 m-auto mt-24 h-96 shadow-2xl rounded-md border-solid border-l-rose-300 border">
        <h2 className="text-3xl text-center my-8">Login</h2>

       <input className="shadow w-80 appearance-none my-4 border rounded border-red-700 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ></input>


        <input className="shadow w-80 appearance-none my-4 border rounded  border-red-700 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-60 border border-solid border-teal-400 rounded-md py-1" onClick={handleLogin}>Login</button>
      </div>
      </div>
    );
  }

  export default Login