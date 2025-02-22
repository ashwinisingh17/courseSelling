const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, courseModel } = require("../db")
const courseRouter = Router();

// courseRouter.post("/signup", function(req, res) {
//     res.json({
//         message: "signup endpoint"
//     })
// })

// courseRouter.post("/signin", function(req, res) {
//     res.json({
//         message: "signup endpoint"
//     })
// })

courseRouter.post("/purchases",userMiddleware, async function(req, res) {
     const userId = req.userId;
    const courseId = req.body.courseId;

    // should check that the user has actually paid the price
    await purchaseModel.create({
        userId,
        courseId
    })
   
    res.json({
        message:"You have successfully bought the course"
    })
})

// no reqirement of validating user 
courseRouter.get("/preview", async function(req, res) {
    // all courses 
    const courses=await courseModel.find({})
    res.json({
        courses
    })
})
module.exports = {
    courseRouter: courseRouter
}