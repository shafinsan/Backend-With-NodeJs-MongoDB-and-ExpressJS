import express from 'express'
const log = (req, res, next) => {
    console.log("email :eliasjabershafin100@gmail.com");
    console.log("password :123456789");
    console.log("user name :elias");
    next();
}
export { log };