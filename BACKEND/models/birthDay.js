const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BirthDaySchema = new Schema({
    personName:{
        type:String,
        unique:true,
    },
    imgURL1:{
        type:String,
    },
    imgURL2:{
        type:String,
    },
    imgURL3:{
        type:String,
    },
    collectionURL:{
        type:String,
    },
    downloads:{
        type:String,
    },
    likes:{
        type:String
    },
    unLikes:{
        type:String
    },
    password:{
        type:String
    },
    category:{
        type:String
    }

})

const BirthDay = mongoose.model("birthDay" , BirthDaySchema);
module.exports = BirthDay;