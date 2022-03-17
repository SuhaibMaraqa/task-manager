require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('6231e18c6a1e9fd6e44f4d8b', {age: 1}).then((user)=>{
//      console.log(user);
//      return User.countDocuments({age: 1})
// }).then((result)=>{
//      console.log(result);
// }).catch((err)=>{
//      console.log(err);
// })

const updateAgeAndCount = async (id, age) => {
     const user = await User.findByIdAndUpdate(id, {age})
     const count = await User.countDocuments({age})
     return count
}

updateAgeAndCount(id = '6231e18c6a1e9fd6e44f4d8b', age = 0).then((count) => {
     console.log("number of users aged", age, "is", count);
}).catch((err) => {
     console.log("error", err);
})