const express = require('express');
const  app = express();
const PORT = 8000 || process.env.PORT
const ErrorHandler = require('./src/middlewares/errorHandler')
const dotenv = require('dotenv')
dotenv.config();
const connectDB = require('./src/config/dbconnection')
const UserRoutes = require('./src/routes/user.routes')



// Routes
app.use(ErrorHandler)
app.use('/api/user',UserRoutes)



// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDB().then(()=>{
   app.listen(PORT,()=>{
       console.log("connnect to DB")
       console.log(`Server is running on PORT ${PORT}`)
   })
})