import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js';
import userRoutes from './routes/userRoutes.js'
import meetingRoutes from './routes/meetingRoutes.js'
dotenv.config()

const app = express()

app.use(express.json());

connectDB()

app.get("/", (req, res) => {
      res.send("API is running ...!");
    });

app.use('/api/users',userRoutes)
app.use('/api/meetings',meetingRoutes)

  

const port = process.env.PORT


app.listen(port,()=>console.log(`server starting at ${port}`))