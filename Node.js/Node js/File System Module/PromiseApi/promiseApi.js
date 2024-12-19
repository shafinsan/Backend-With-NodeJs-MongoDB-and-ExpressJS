import * as fs from 'fs/promises'
try {
    await fs.mkdir("C:/Users/JABER/Desktop/Node.js/first_day/File System Module/PromiseApi/newFolderCreatingDone/hello/recursion", { recursive: true });
    console.log("success")
    let file = await fs.readdir("C:/Users/JABER/Desktop/Node.js/first_day/File System Module/PromiseApi/newFolderCreatingDone/hello/recursion");
    file.forEach(f => {
        console.log(f);
    })
    await fs.mkdir("C:/Users/JABER/Desktop/Node.js/first_day/File System Module/PromiseApi/createFileForRemove");
    await fs.rmdir("C:/Users/JABER/Desktop/Node.js/first_day/File System Module/PromiseApi/createFileForRemove");
    await fs.writeFile("newFile.txt", "hello elias jaber shafin")
    await fs.appendFile("newFile.txt", "i am the best teacher");
    await fs.copyFile("newFile.txt", "copyFile.txt");
    let data = await fs.readFile("newFile.txt", "utf-8");
    console.log(data);
    let info=await fs.stat("newFile.txt");
    console.log(info)
    console.log(info.isDirectory());
    console.log(info.isFile());
} catch (error) {
    console.log(error)
}