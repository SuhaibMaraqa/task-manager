const express = require('express');
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
     console.log("Server listening on port "+ port);
});

// const bcrypt = require('bcryptjs')

// const myFunction = async ()=>{
//      const password = "Red12345!"
//      const hashedPass = await bcrypt.hash(password, 8)

//      console.log(password);
//      console.log(hashedPass);


// }

// myFunction()