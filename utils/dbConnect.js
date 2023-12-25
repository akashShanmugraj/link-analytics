// utils/dbConnect.js
import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb+srv://akash:W3t0TS0tx0RHWQv4@linkcluster.jnzqhix.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

export default async function dbConnect() {
    await client.connect();
    const db = client.db("data"); // database name
    return { db, client };
}