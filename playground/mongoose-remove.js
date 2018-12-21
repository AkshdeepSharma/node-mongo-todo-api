const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "YOUR_ID_HERE";

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: id}).then((todo) => {
//   console.log(todo);
// });
//
// Todo.findByIdAndRemove(id).then((todo) => {
//   console.log(todo);
// });
