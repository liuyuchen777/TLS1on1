import mongoose from 'mongoose';

const url = process.env.db_connection_string;

mongoose.Promise = global.Promise;

export async function connect() {

    try {
        const conn = await mongoose.connect(url);
        const db = mongoose.connection;

        // Events
        db.on('disconnected', (err) => {
            console.log(`MongoDB-> disconnected: ${url}`);
            connect(); 
        });

        db.on('reconnected', (err) => {
            console.log(`MongoDB-> reconnected: ${url}`);
        });

        // Success
        console.log(`-------\nMongoDB-> connected on ${url}\n-------`);
    } catch (err) {
        console.log(`MongoDB-> connection error: ${url} details->${err}`);
        process.exit(-1);
    }

}