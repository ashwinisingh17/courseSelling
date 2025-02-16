const { Router } = require("express");
const adminRouter = Router();
// can make account
adminRouter.post("/signup", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
})

// login
adminRouter.post("/signin", function(req, res) {
    res.json({
        message: "signup endpoint"
    })
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