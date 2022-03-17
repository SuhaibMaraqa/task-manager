require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6231cdf15044423712e79923').then((task)=>{
     return Task.countDocuments({completed: false})
}).then((result)=>{
     console.log(result);
}).catch((err)=>{
     console.log(err);
})