require('../src/db/mongoose')
const Task = require('../src/models/task')

//5d9caea3a9c0fd7418124cfb
Task.findByIdAndDelete('5d9caea3a9c0fd7418124cfb').then((user)=> {
    console.log(user)
    return Task.countDocuments({completed:false})
}).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})