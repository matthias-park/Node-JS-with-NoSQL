const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://matthias:bjs0220@node-complete-cqski.mongodb.net/<dbname>?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected!');
            callback(client);
        })
        .catch(err => console.log(err));
}

module.exports = mongoConnect

