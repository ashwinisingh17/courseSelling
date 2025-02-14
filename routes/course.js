const { Router } = require("express");

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

courseRouter.post("/purchases", function(req, res) {
    res.json({
        message: "Purchased"
    })
})


courseRouter.get("/preview", function(req, res) {
    res.json({
        message: "course preview endpoint"
    })
})
module.exports = {
    courseRouter: courseRouter
}