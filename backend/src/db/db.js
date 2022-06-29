import mongoose from 'mongoose';

mongoose.connect(process.env.db_connection_string || process.env.MONGO_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true }, 
    (err => {
    if (err) {
        console.error(err)
    }
}));

const db = mongoose.connection;

export default db;