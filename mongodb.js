// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const id = new ObjectID();
console.log(id.id.length);
console.log(id.getTimestamp());
console.log(id.toHexString());

const connectionURL =
  "mongodb+srv://michal123:michal123@devconnector.6tf9d.mongodb.net/TaskManager?retryWrites=true&w=majority";

const client = new MongoClient(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();

  if (err) {
    console.log("Unable to connect");
  }

  //   console.log("Connected correctly!");
  const db = client.db("TaskManager");
  db.collection("users").insertOne(
    {
      _id: id,
      name: "Viktor",
      age: 22,
    },
    (error, result) => {
      if (error) {
        console.log("Unable to insert user.");
      }
      console.log(result.ops);
    }
  );
  // db.collection("users").insertMany(
  //   [
  //     {
  //       name: "Wika",
  //       age: 28,
  //     },
  //     {
  //       name: "Gerard",
  //       age: 30,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       console.log("Unable to insert user.");
  //     }
  //     console.log(result.ops);
  //   }
  // );
  // db.collection("tasks").insertMany(
  //   [
  //     {
  //       description: "First task",
  //       completed: true,
  //     },
  //     {
  //       description: "Second task",
  //       completed: false,
  //     },
  //     {
  //       description: "Third task",
  //       completed: true,
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       console.log("Unable to insert user.");
  //     }
  //     console.log(result.ops);
  //   }
  // );
});
