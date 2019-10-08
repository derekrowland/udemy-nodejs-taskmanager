require('../src/db/mongoose')
const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5d9ceddba4e85e709c2eaa11', 10).then(count => {
    console.log(count)
}).catch(e => {
    console.log('e', e)
})