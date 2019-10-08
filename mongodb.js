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
        
        db.collection('tasks').findOne({_id: new ObjectID('5d9650f344b229558cdb5c82')}, (error, task) => {
            if (error) {
                return console.log('Unable to acquire task')
            }

            console.log(task)
        })

        db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
            if (error) {
                return console.log('Unable to acquire tasks')
            }

            console.log(tasks)
        })
        
    }
)

