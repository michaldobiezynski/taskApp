const mongoose = require("mongoose");

const connectionURL =
  "mongodb+srv://michal123:michal123@devconnector.6tf9d.mongodb.net/TaskManager?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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
