const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String, 
        required: [true, 'You must provide a name']
    },
    age: {
        type: Number,
        required: [true, 'You must provide an age'],
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: [true, 'You must provide a description']
    }, 
    completed: {
        type: Boolean,
        required: [true, 'You must provide a completion state']
    }
})

const me = new User({
    name: 'Jared',
    age: 40, 
    email: 'Jared@gmail.com'
})

me.save(). then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error: ' + error)
})



// const tTask = new Task( {
// })

// tTask.save().then(() => {
//     console.log(tTask)
// }).catch((error)=> {
//     console.log(error)
// })
