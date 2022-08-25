const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://crud:crud@crudapp.u6yr1l0.mongodb.net/?retryWrites=true&w=majority");

//  .then((res)=>{
//     console.log("connected");
// });
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    name: String,
    book:String,
    genre:String,
    image:String
});

var Authordata = mongoose.model('authordata',AuthorSchema);

module.exports = Authordata;
