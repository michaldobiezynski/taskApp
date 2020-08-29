

const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();

const connectionURL =
  "mongodb+srv://michal123:michal123@devconnector.6tf9d.mongodb.net/TaskManager?retryWrites=true&w=majority";

const client = new MongoClient(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.log("Unable to connect");
  }

  const db = client.db("TaskManager");

  
});
