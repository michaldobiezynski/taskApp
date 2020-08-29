const mongoose = require("mongoose");

const connectionURL =
  "mongodb+srv://michal123:michal123@devconnector.6tf9d.mongodb.net/TaskManager?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const me = new User({ name: "Michal", age: 26 });

me.save()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
