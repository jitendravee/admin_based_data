import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminData = () => {
    const [customerData, setCustomerData] = useState([]);
    const [loginData, setLoginData] = useState([]);
  
    useEffect(() => {
        axios.get('https://admin-data-7e9c.onrender.com/admindata')
        .then(response => {
          console.log('Customer Data API Response:', response);
  
          if (Array.isArray(response.data) && response.data.length > 0) {
            setCustomerData(response.data);
          } else {
            console.error('Invalid customer data format:', response.data);
          }
        })
        .catch(error => console.error('Error fetching customer data:', error));
  
      axios.get('https://admin-data-7e9c.onrender.com/logindata')
        .then(response => {
          console.log('Login Data API Response:', response);
  
          if (Array.isArray(response.data) && response.data.length > 0) {
            setLoginData(response.data);
          } else {
            console.error('Invalid login data format:', response.data);
          }
        })
        .catch(error => console.error('Error fetching login data:', error));
    }, []);
  return (
    <div className='items-center justify-center max-w-auto'>
      <div className='flex flex-col justify-between items-center mt-12 gap-5'>

     
        <div className='bg-slate-100'>
          <h2>Customer Data</h2>
          <table className="border-collapse border border-slate-600">
            <thead>
              <tr>
                <th className="border border-slate-600 p-2">Company</th>
                <th className="border border-slate-600 p-2">Owner</th>
                <th className="border border-slate-600 p-2">Weight</th>
                <th className="border border-slate-600 p-2">Quantity</th>
                <th className="border border-slate-600 p-2">Request For Shipment</th>
                <th className="border border-slate-600 p-2">Item</th>
                <th className="border border-slate-600 p-2">BoxCount</th>
             
              </tr>
            </thead>
            <tbody>
              {customerData.map((data) => (
                <tr key={data._id}>
                  <td className="border border-slate-600 p-2">{data.company}</td>
                  <td className="border border-slate-600 p-2">{data.owner}</td>
                  <td className="border border-slate-600 p-2">{data.weight}</td>
                  <td className="border border-slate-600 p-2">{data.quantity}</td>
                  <td className="border border-slate-600 p-2">{data.requestForShipment}</td>
                  <td className="border border-slate-600 p-2">{data.item}</td>
                  <td className="border border-slate-600 p-2">{data.boxCount}</td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>

     
        <div className='bg-slate-100'>
          <h2>Login Data</h2>
          <table className="border-collapse border border-slate-600">
            <thead>
              <tr>
             
                <th className="border border-slate-600 p-2">Id</th>
               
            
              </tr>
            </thead>
            <tbody>
              {loginData.map((data) => (
                <tr key={data._id}>
                 
                  <td className="border border-slate-600 p-2">{login.id}</td>
                 
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminData;
