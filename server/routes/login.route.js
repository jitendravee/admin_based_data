import { Router } from "express";
import bcrypt from 'bcryptjs';
import {login} from '../models/login.models.js';

const router = Router();
router.post('/login', async (req, res) => {
    try {
      const { id, password } = req.body;
  
      if ( !id || !password) {
        return res.status(400).json({ message: 'Please fill the required fields' });
      }
  
      const saltRounds = 10;
      const securePassword = await bcrypt.hash(password, saltRounds);
  
      const newLogin = {
        
        id: id,
        password: securePassword,
      };
  
      const createdLogin = await login.create(newLogin);
  
      return res.status(201).json(createdLogin);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  export default router;


