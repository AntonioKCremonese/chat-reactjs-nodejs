const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/chat',{useNewUrlParser:true,useUnifiedTopology:true});

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:String,
    mail:String,
    password:{
        type:String,
        select:false
    },
    endereco:String,
    celular:String
});

const User = mongoose.model('User',userSchema);

module.exports = User;