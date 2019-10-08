require('../src/db/mongoose')
const Task = require('../src/models/task')

//5d9caea3a9c0fd7418124cfb
// Task.findByIdAndDelete('5d9caea3a9c0fd7418124cfb').then((user)=> {
//     console.log(user)
//     return Task.countDocuments({completed:false})
// }).then(result => {
//     console.log(result)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}

deleteTaskAndCount('5d9cebd90bd42c8478b58f3d').then(count => {
    console.log(count)
}).catch(e => {
    console.log('e', e)
})