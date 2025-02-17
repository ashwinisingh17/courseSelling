const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "alfahdfoiaish1y234q323423";

// can make account
adminRouter.post("/signup", async function(req, res) {
    const {email,password,firstName,lastName} = req.body;
    await adminModel.create({
       email:email,
       password:password,
       firstName:firstName,
       lastName:lastName
    })
    res.json({
        message: "You Are Signed Up"
    })
})

// login
adminRouter.post("/signin", async function(req, res) {
     const {email,password} = req.body;
     const admin = await adminModel.findOne({
        email:email,
        password:password
     })
     if(admin){
        const token = jwt.sign({
            id:admin._id, 
        },JWT_ADMIN_PASSWORD);
        // it needed to be done by cookie
    res.json({
        message: "singed in",
        token:token
    })
     }
     else 
     {
        res.status(403).json({
            message:"Incorrect Crredintals"
        })
     }
})

// can add the courses
adminRouter.post("/course", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

// can update courses which was made by him
adminRouter.put("/course", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})


// can get all courses by made by hime
adminRouter.get("/course/bulk", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}