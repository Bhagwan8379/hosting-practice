const express = require("express")

const app = express()

app.use(express.static("dist"))

app.use("/api/users", (req, res) => {
    res.json({ Message: "User Fetch Success" })
})
app.use("*", (req, res) => {
    res.json({ Message: "Resource Not Found " })
})

app.listen(process.env.PORT || 5000, console.log("SERVER RUNNING"))