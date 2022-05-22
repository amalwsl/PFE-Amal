import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js';
import userRoutes from './routes/userRoutes.js'
import meetingRoutes from './routes/meetingRoutes.js'
import authRoutes from './routes/auth.js'
dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json());

app.get("/", (req, res) => {
  console.log(res)
      res.send("e");
    });

app.use('/api/users',userRoutes)
app.use('/api/meetings',meetingRoutes)
app.use('/api/auth',authRoutes)

console.log('server running')

connectDB().then(() => {
  app.listen(port,()=>console.log(`server starting at ${port}`))
})

  


