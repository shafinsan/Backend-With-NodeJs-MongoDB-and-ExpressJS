import * as path from 'path'
import { fileURLToPath } from 'url';
let file=fileURLToPath(import.meta.url);
console.log(file)
console.log(path.basename(file))
console.log(path.basename(file,'.js'));
console.log(path.dirname(file))
console.log(path.extname(file))
console.log(path.join(file,'its_join'));
let value = path.parse(file);
console.log(value);
console.log("***************************************************");
console.log(value.dir);
console.log(value.ext); 
console.log(value.root);
console.log("***************************************************");