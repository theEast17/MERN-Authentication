import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
const port = process.env.PORT
import userRouter from './Routes/userRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import connectDb from './config/db.js'


connectDb()


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use('/api/users', userRouter)

// app.get('/',(req,res)=>res.send('Server is ready'))

app.use(notFound)
app.use(errorHandler)



app.listen(port, () => {
    console.log('Server Connected on port ' + port)
})