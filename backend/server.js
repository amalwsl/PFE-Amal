import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import userRoutes from './routes/userRoutes.js';
import meetingRoutes from './routes/meetingRoutes.js';
import cors from 'cors';
import { MongoClient } from 'mongodb';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

const url =
  'mongodb+srv://amalwsl:azerty12345@cluster0.cr3me.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'myFirstDatabase';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collectionUser = db.collection('users');
  const collectionMeeting = db.collection('meetings');

  // the following code examples can be pasted here...

  const findUsers = await collectionUser.find({}).toArray();
  const findmeetings = await collectionMeeting.find({}).toArray();
  console.log('Found User documents =>', findUsers);
  console.log('Found Meeting documents =>', findmeetings);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('MongoDB Connected!....');
});

app.use('/api/users', userRoutes);
app.use('/api/meetings', meetingRoutes);

console.log('server running');

connectDB().then(() => {
  app.listen(port, () => console.log(`server starting at ${port}`));
});
