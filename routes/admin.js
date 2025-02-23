const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");
const jwt = require("jsonwebtoken");

const  { JWT_ADMIN_PASSWORD } = require("../config");
const { adminMiddleware } = require("../middleware/admin");

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
adminRouter.post("/course",adminMiddleware, async function(req, res) {
    const adminId = req.userId;
    const { title, description, imageUrl, price } = req.body;

    // creating a web3 saas in 6 hours

    const course = await courseModel.create({
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price, 
        creatorId: adminId
    })

    res.json({
         message: "Course created",
        courseId: course._id
    })
})

// can update courses which was made by him
adminRouter.put("/course",adminMiddleware,async function(req, res) {
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    // creating a web3 saas se image Ko store karna sikhna h

    const course = await courseModel.updateOne({
        _id: courseId, 
        // creatorID is neccessary so that admin only change in its own course 
        // other wise he can change others course which will evantually cause error in our system 
        creatorId: adminId 
    }, {
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price
    })
    res.json({
        message:"Course Updated",
        courseId:courseId
    })
})


// can get all courses by made by hime
adminRouter.get("/course/bulk", async function(req, res) {
     const adminId = req.userId;
    const courses = await courseModel.find({
        creatorId: adminId 
    });

    res.json({
        message: "Course updated",
        courses
    })
})

module.exports = {
    adminRouter: adminRouter
}