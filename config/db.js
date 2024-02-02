import mongoose from 'mongoose';

const connection = {

}
async function dbConnect() {
    if (connection.isConnected) {
        console.log("added connection");
        return
    }
    const db = await mongoose.connect(process.env.DATABASECONNECTIONSTRING)
    connection.isConnected = db.connections[0].readyState;
    console.log("connection is added to database");
}

export default dbConnect