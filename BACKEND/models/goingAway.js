const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoingAwaySchema = new Schema({
    coupleName:{
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

const GoingAway = mongoose.model("goingAway" , GoingAwaySchema);
module.exports = GoingAway;