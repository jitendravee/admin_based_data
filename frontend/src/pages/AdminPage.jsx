import { useState } from "react";
import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [company, setCompany] = useState('');

  const [owner, setOwner] = useState('');
  const [item, setItem] = useState('');
  const [weight, setWeight] = useState('');
  const [quantity, setQuantity] = useState('');
  const [requestForShipment, setRequestForShipment] = useState('');
  const [boxCount, setBoxCount] = useState('');

  const navigate = useNavigate();

  const saveData = () => {
    const data = {
      company,
    
      owner,
      item,
      weight,
      quantity,
      requestForShipment,
      boxCount,
    };

  
    axios.post('http://localhost:3500/customerinfo', data)
      .then(response => {
        console.log(response.data); 
        alert('success');
        navigate('/')
      })
      .catch(error => {
        console.log(error);
        
      });
  };

  return (
    <div className='items-center justify-center max-w-auto'>
      <div className='flex flex-col justify-between items-center mt-12 bg-slate-100 gap-5'>
        <p className='flex flex-row text-lg items-center'>
          Company:-
          <input onChange={(e) => setCompany(e.target.value)} type='text' placeholder='Company' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        
        <p className='flex flex-row text-lg items-center'>
          Owner:-
          <input onChange={(e) => setOwner(e.target.value)} type='text' placeholder='Owner' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <p className='flex flex-row text-lg items-center'>
          Item:-
          <input onChange={(e) => setItem(e.target.value)} type='text' placeholder='Item' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <p className='flex flex-row text-lg items-center'>
          Weight:-
          <input onChange={(e) => setWeight(e.target.value)} type='text' placeholder='Weight' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <p className='flex flex-row text-lg items-center'>
          Quantity:-
          <input onChange={(e) => setQuantity(e.target.value)} type='text' placeholder='Quantity' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <p className='flex flex-row text-lg items-center'>
          Request for Shipment:-
          <input onChange={(e) => setRequestForShipment(e.target.value)} type='text' placeholder='Request for Shipment' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <p className='flex flex-row text-lg items-center'>
          Box Count:-
          <input onChange={(e) => setBoxCount(e.target.value)} type='text' placeholder='Box Count' className='p-2 px-3 m-2 border-spacing-6 bg-slate-300 rounded-xl'/>
        </p>
        <button onClick={saveData} className="bg-slate-900 text-white text-lg p-4 rounded-lg mt-5 px-8" type="submit">Submit</button>
        <button onClick={() => navigate('/login')} className="bg-slate-900 text-white text-lg p-4 rounded-lg mt-5 px-8" type="button">View Admin Data</button>
      </div>
    </div>
  );
}

export default AdminPage;
