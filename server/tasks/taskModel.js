var mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
  listId: String,
  taskName: String,
  statusCode: {
    type: Number,
    default: 0
  },
  assignedTo:{
    type:Array,
    default:[]
  },
  description: String, 
  bullets:{
    type:Array,
    default:[]
  }
});

module.exports = mongoose.model('Task', taskSchema);