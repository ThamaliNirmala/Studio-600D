const router = require("express").Router();
const GoingAway = require("../models/goingAway");

router.route('/add').post((req, res) => {
    const coupleName = req.body.coupleName;
    const imgURL1 = req.body.imgURL1;
    const imgURL2 = req.body.imgURL2;
    const imgURL3 = req.body.imgURL3;
    const category = req.body.category;
    const password = req.body.password;
    const downloads = Number(req.body.downloads) + 1;
    const likes = Number(req.body.likes) + 1;
    const unLikes = Number(req.body.unLikes) + 1;
    

    const newGoingAwayData = {
        coupleName,
        imgURL1,
        imgURL2,
        imgURL3,
        downloads,
        likes,
        unLikes,
        password,
        category
    }

    const newGoingAway = new GoingAway(newGoingAwayData);

    newGoingAway.save()
           .then(() => res.json('New GoingAway Collection Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    GoingAway.find().then((GoingAways)=>{
        res.json(GoingAways);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const downloads = Number(req.body.downloads) + 1;

    const updateGoingAway = {downloads};

    await GoingAway.findByIdAndUpdate(ID , updateGoingAway)
    .then(()=>{
        res.status(200).send({status : "GoingAway Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/like/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const likes = Number(req.body.likes) + 1;

    const updateGoingAway = {likes};

    await GoingAway.findByIdAndUpdate(ID , updateGoingAway)
    .then(()=>{
        res.status(200).send({status : "GoingAway Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/unlike/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const unLikes = Number(req.body.unLikes) + 1;

    const updateGoingAway = {unLikes};

    await GoingAway.findByIdAndUpdate(ID , updateGoingAway)
    .then(()=>{
        res.status(200).send({status : "GoingAway Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let GoingAwayID = req.params.id;

    await GoingAway.findByIdAndDelete(GoingAwayID)
    .then(()=>{
        res.status(200).send({status : "GoingAway Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;
