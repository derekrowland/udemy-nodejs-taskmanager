// CRUD create read update delete

// const mongodb = require('mongodb')
// const mongoClient = mongodb.MongoClient

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString())
console.log(id.toHexString().length)


MongoClient.connect(connectionURL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (error, client) => {
    
        if (error) {
            return console.log('Unable to connect to database!')
        } 
        
        const db = client.db(database)
        
        // db.collection('users').insertOne({
        //     name: 'Derek',
        //     age: 31
        //     }, (error, result) => {
        //     if (error) {
        //         return console.log('Unable to insert user')
        //     } 

        //     console.log(result.ops)
        // })

        // db.collection('users').insertMany(
        //     [
        //         {
        //             name: 'Jen',
        //             age: 32
        //         },
        //         {
        //             name: 'Jerry',
        //             age: 40
        //         }
        //     ], (error, result) => {
        //         if (error) {
        //             return console.log('Unable to insert documents')
        //         }

        //         console.log(result.ops)
        //     }
        // )

        // db.collection('tasks').insertMany(
        //     [
        //         {
        //             _id: id,
        //             description: 'Call David',
        //             completed: true
        //         },
        //         {
        //             description: 'Ride bike',
        //             completed: false
        //         },
        //         {
        //             description: 'Open package',
        //             complete: false
        //         }
        //     ], (error, result) => {
        //         if (error) {
        //             return console.log('Unable to insert tasks')
        //         }

        //         console.log(result.ops)
        //     }
        // )
    }
)

