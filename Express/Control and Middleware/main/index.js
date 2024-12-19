import express from 'express'
import student from './student.js';
import teacher from './teacher.js';
import { log } from '../middleware/log.js';
const app = express();
app.use('/student',log, student);
app.use('/teacher',log, teacher);
app.listen(8000, () => {
    console.log("Server Up")
})