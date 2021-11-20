const router = require("express").Router();
const BirthDay = require("../models/birthDay");

router.route('/add').post((req, res) => {
    const personName = req.body.personName;
    const imgURL1 = req.body.imgURL1;
    const imgURL2 = req.body.imgURL2;
    const imgURL3 = req.body.imgURL3;
    const category = req.body.category;
    const password = req.body.password;
    const downloads = Number(req.body.downloads) + 1;
    const likes = Number(req.body.likes) + 1;
    const unLikes = Number(req.body.unLikes) + 1;
    

    const newBirthDayData = {
        personName,
        imgURL1,
        imgURL2,
        imgURL3,
        downloads,
        likes,
        unLikes,
        password,
        category
    }

    const newBirthDay = new BirthDay(newBirthDayData);

    newBirthDay.save()
           .then(() => res.json('New BirthDay Collection Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    BirthDay.find().then((BirthDays)=>{
        res.json(BirthDays);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let BirthDayID = req.params.id;
    const personName = req.body.personName;
    const imgURL1 = req.body.imgURL1;
    const imgURL2 = req.body.imgURL2;
    const imgURL3 = req.body.imgURL3;
    const category = req.body.category;
    const password = req.body.password;
    const downloads = Number(req.body.downloads) + 1;
    const likes = Number(req.body.likes) + 1;
    const unLikes = Number(req.body.unLikes) + 1;

    const updateBirthDay = {personName , imgURL1 , imgURL2 , imgURL3 ,category, password, downloads, likes, unLikes};

    await BirthDay.findByIdAndUpdate(BirthDayID , updateBirthDay)
    .then(()=>{
        res.status(200).send({status : "BirthDay Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let BirthDayID = req.params.id;

    await BirthDay.findByIdAndDelete(BirthDayID)
    .then(()=>{
        res.status(200).send({status : "BirthDay Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;
