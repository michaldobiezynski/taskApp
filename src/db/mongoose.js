const mongoose = require("mongoose");
const validator = require("validator");

const connectionURL =
  "mongodb+srv://michal123:michal123@devconnector.6tf9d.mongodb.net/TaskManager?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (value.length <= 6) {
        throw new Error("Password needs to be longer than 6 characters.");
      }
      if (value.toLowerCase().includes("password")) {
        throw new Error("'password' cannot be used as a password.");
      }
    },
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
});

// const me = new User({
//   name: "Bogdan",
//   email: "bogdan@test.com",
//   password: "qwertyu",
// });

// me.save()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const task = new Task({
  description: "Finish the course",
  //   completed: false,
});

task
  .save()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
