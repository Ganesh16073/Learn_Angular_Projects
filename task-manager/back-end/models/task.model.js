const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({

  title: String,

  description: String,

  priority: {
    type: String,
    enum: ["low","medium","high"],
    default: "medium"
  },

  status: {
    type: String,
    enum: ["todo","in_progress","completed"],
    default: "todo"
  },

  dueDate: Date,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

module.exports = mongoose.model("Task", TaskSchema)