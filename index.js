const express = require("express");
const { userRouter } = require("./routes/user");
const { adminRouter } = require("./routes/admin");
const { courseRouter } = require("./routes/course");
const app = express();

// it parses incoming JSON (string in HTTP request body) into a JavaScript object/.
app.use(express.json());

// app.use("/user", userRouter);
//  app.use("/course", courseRouter);

// createUserRoutes(app);
// createCourseRoutes(app);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
    await mongoose.connect("")
    app.listen(3000);
    console.log("listening on port 3000")
}

main()

