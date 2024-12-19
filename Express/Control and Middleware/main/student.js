import express from 'express'
import { allId, deleteId, newId, updateId } from '../control/control.js';
const student = express.Router();
student.get('/all', allId);
student.post('/newid', newId);
student.put('/update', updateId);
student.delete('/delete', deleteId);
export default student;