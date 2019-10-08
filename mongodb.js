// CRUD create read update delete

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, (error, client) => {
    
        if (error) {
            return console.log('Unable to connect to database!')
        } 
        
        const db = client.db(database)
        
        // const updatePromise = db.collection('users').updateOne({
        //         _id = new ObjectID("5d964e2a055c671da810dbce")
        // },  {
        //         $set: { name: 'Mike'}
        //     }
        // )

        // updatePromise.then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // db.collection('users').findOne({_id: new ObjectID("5d964e2a055c671da810dbce")}, (error, result) => {
        //     if (error) {
        //         return console.log(error)
        //     }

        //     console.log(result)
        // })

        // const updatePromise = db.collection('users').updateOne({
        //     _id: new ObjectID("5d964e2a055c671da810dbce")
        // }, {
        //     $inc: { age: 1 }
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        db.collection('tasks').updateMany({
            completed: false
        }, {
            $set: {
                completed: true
            }
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })


    }
)

