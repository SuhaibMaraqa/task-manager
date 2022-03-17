require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6231e18c6a1e9fd6e44f4d8b', {age: 1}).then((user)=>{
     console.log(user);
     return User.countDocuments({age: 1})
}).then((result)=>{
     console.log(result);
}).catch((err)=>{
     console.log(err);
})