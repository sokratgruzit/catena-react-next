import { MongoClient } from "mongodb";

async function handler(req, res) {
    const client = await MongoClient.connect("mongodb+srv://sokrat:sokrat12345@cluster0.x2cvw.mongodb.net/cmcx?retryWrites=true&w=majority");
    const db = client.db();

    const buyCollection = db.collection("buyInfo");
}

export default handler;