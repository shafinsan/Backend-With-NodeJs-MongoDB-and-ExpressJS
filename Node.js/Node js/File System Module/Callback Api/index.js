import * as fs from 'fs'
fs.mkdir('C:/Users/JABER/Desktop/Node.js/first_day/File System Module/Callback Api/callbackfile', { recursive: true }, (error) => {
    if (error) throw error;
    console.log('successed');
})