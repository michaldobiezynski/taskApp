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

  // db.collection("users")
  //   .updateOne(
  //     {
  //       _id: new ObjectID("5f3e2af6ad556f829082beb5"),
  //     },
  //     {
  // $set: {
  //   name: "Mike",
  // },
  //         $inc: {
  //           age: 1,
  //         },
  //       }
  //     )
  // .then((result) => {
  //   console.log(result);
  // })
  // .catch((error) => {
  //   console.log(error);
  // });

  db.collection("tasks")
    .updateMany({ completed: false }, { $set: { completed: true } })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
