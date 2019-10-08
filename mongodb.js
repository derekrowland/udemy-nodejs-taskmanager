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
        
        db.collection('users').findOne(
            {
                _id: new ObjectID('5d964ffa4ab2552d682f4d9e')
            }, (error, user) => {
                if (error) {
                    return console.log("Unable to fetch user")
                }

                console.log(user)
            }
        )
    }
)

