const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true, 
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String, 
        required: [true, 'You must provide a name'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'You must provide an age'],
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: [true, 'You must provide a password.'],
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase.includes('password')) {
                throw new Error('Password cannot contain password')
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
    name: '   Jared2   ',
    email: 'Jared2@gmail.com    ',
    age: 40,
    password: 'passwaa   '
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
