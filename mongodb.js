// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

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

  // db.collection("users").findOne(
  //   { _id: new ObjectID("5f3ed48087a422cd72ff1e3a") },
  //   (error, user) => {
  //     err && console.log("Unable to fetch");

  //     console.log(user);
  //   }
  // );
  db.collection("users")
    .find({ age: 26 })
    .toArray((error, users) => {
      console.log(users);
    });
  db.collection("users")
    .find({ age: 26 })
    .count((error, count) => {
      console.log(count);
    });
  db.collection("tasks")
    .find({ _id: new ObjectID("5f3ed6753fc909cddda829ac") })
    .toArray((error, task) => {
      console.log(task);
    });
  db.collection("tasks")
    .find({ completed: true })
    .toArray((error, tasks) => {
      console.log(tasks);
    });
});
