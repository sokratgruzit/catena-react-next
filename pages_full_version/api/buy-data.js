import { MongoClient } from 'mongodb'

async function handler(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://sokrat:lalala12345@cluster0.x2cvw.mongodb.net/cmcx?retryWrites=true&w=majority',
  )
  const db = client.db()

  const buyCollection = db.collection('buyInfo')
  const buyInfo = await buyCollection.find().toArray()

  client.close()
}

export default handler
