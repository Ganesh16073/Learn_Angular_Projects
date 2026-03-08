require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConnection = require('./database/db')
const authRoutes = require("./routes/auth.routes")
const taskRoutes = require("./routes/task.routes")
const aiRoutes = require("./routes/ai.routes")

const app = express()
app.use(cors())
app.use(express.json())
dbConnection()

app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)
app.use("/api/ai",aiRoutes)

app.listen(3000,()=>{
  console.log("Server running on port 3000")
})