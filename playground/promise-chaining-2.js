require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6231cdf15044423712e79923').then((task)=>{
//      return Task.countDocuments({completed: false})
// }).then((result)=>{
//      console.log(result);
// }).catch((err)=>{
//      console.log(err);
// })

const deleteTaskAndCount = async (id, completed) => {
     const user = await Task.findByIdAndDelete(id)
     const count = await Task.countDocuments({completed})
     return count
}

deleteTaskAndCount(id = "6231cdeb5044423712e79921", completed = true).then((count)=>{
     if (completed) {
          console.log("number of documents completed =", count);
     } else {
          console.log("number of documents not completed =", count);
     }
}).catch((err) => {
     log.error(err);
})