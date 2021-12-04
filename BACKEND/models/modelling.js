const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ModellingSchema = new Schema({
    modelerName:{
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

const Modeling = mongoose.model("modeling" , ModellingSchema);
module.exports = Modeling;