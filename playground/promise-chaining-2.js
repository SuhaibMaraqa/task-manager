require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6265b1192d886525b2100128').then((task)=>{
     return Task.countDocuments({completed: false})
}).then((result)=>{
     console.log(result);
}).catch((err)=>{
     console.log(err);
})

// const deleteTaskAndCount = async (id, completed) => {
//      const user = await Task.findByIdAndDelete(id)
//      const count = await Task.countDocuments({completed})
//      return count
// }

// deleteTaskAndCount(id = "624999a8a780a36bf53802f4", completed = true).then((count)=>{
//      if (completed) {
//           console.log("number of documents completed =", count);
//      } else {
//           console.log("number of documents not completed =", count);
//      }
// }).catch((err) => {
//      log.error(err);
// })