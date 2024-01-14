import { useState } from "react";
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const saveData = () => {
    const data = {
      id: id,
      password: password
    };

    setLoading(true);

    axios.post('http://localhost:3500/login', data)
      .then(response => {
        setLoading(false);
        console.log(response.data); 
        navigate('/adminpage');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      
      });
  };

  return (
    <div className='items-center justify-center max-w-auto'>
      <div className='flex flex-col justify-between items-center mt-48 bg-slate-100 gap-12'>
        <p className='flex flex-row text-lg items-center'>
          ID:-
          <input onChange={(e) => setId(e.target.value)} type='text' placeholder='ID' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <p className='flex flex-row text-lg items-center'>
          Password:-
          <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <button onClick={saveData} className="bg-slate-900 text-white text-lg p-4 rounded-lg mt-5 px-8" type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Login;
