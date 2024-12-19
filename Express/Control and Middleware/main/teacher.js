import express from 'express'
import { allId, deleteId, newId, updateId } from '../control/control.js';
const teacher = express.Router();
teacher.get('/all', allId);
teacher.post('/newid', newId);
teacher.put('/update', updateId);
teacher.delete('/delete', deleteId);
export default teacher;
