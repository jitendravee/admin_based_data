import { Router } from "express";
import { customerInfo } from "../models/customerInfo.models.js";
const router = Router();


router.post('/customerinfo', async (req, res) => {
    try {
      const { company,owner,item,quantity,weight,requestforShipment,boxCount } = req.body;
  
    
  
      
  
      const newCustomerInfo = {
      company:company,
      owner:owner,
      item:item,
      quantity:quantity,
      weight:weight,
      requestforShipment:requestforShipment,
      boxCount:boxCount,  
      
      };
  
      const createdCustomerInfo = await customerInfo.create(newCustomerInfo);
  
      return res.status(201).json(createdCustomerInfo);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });





export default router;