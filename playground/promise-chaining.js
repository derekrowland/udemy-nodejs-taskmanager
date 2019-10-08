require('../src/db/mongoose')
const User = require('../src/models/user')

//5d9ceddba4e85e709c2eaa11
User.findByIdAndUpdate('5d9ceddba4e85e709c2eaa11', {age:10}).then((user) => {
    console.log(user)
    return User.countDocuments({age:10})
}).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})