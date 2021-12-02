const router = require("express").Router();
const Modelling = require("../models/modelling");

router.route('/add').post((req, res) => {
    const modelerName = req.body.modelerName;
    const imgURL1 = req.body.imgURL1;
    const imgURL2 = req.body.imgURL2;
    const imgURL3 = req.body.imgURL3;
    const category = req.body.category;
    const password = req.body.password;
    const downloads = Number(req.body.downloads) + 1;
    const likes = Number(req.body.likes) + 1;
    const unLikes = Number(req.body.unLikes) + 1;
    

    const newModellingData = {
        modelerName,
        imgURL1,
        imgURL2,
        imgURL3,
        downloads,
        likes,
        unLikes,
        password,
        category
    }

    const newModelling = new Modelling(newModellingData);

    newModelling.save()
           .then(() => res.json('New Modelling Collection Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    Modelling.find().then((Modellings)=>{
        res.json(Modellings);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const downloads = Number(req.body.downloads) + 1;

    const updateModelling = {downloads};

    await Modelling.findByIdAndUpdate(ID , updateModelling)
    .then(()=>{
        res.status(200).send({status : "Modelling Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/like/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const likes = Number(req.body.likes) + 1;

    const updateModelling = {likes};

    await Modelling.findByIdAndUpdate(ID , updateModelling)
    .then(()=>{
        res.status(200).send({status : "Modelling Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/unlike/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const unLikes = Number(req.body.unLikes) + 1;

    const updateModelling = {unLikes};

    await Modelling.findByIdAndUpdate(ID , updateModelling)
    .then(()=>{
        res.status(200).send({status : "Modelling Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let ModellingID = req.params.id;

    await Modelling.findByIdAndDelete(ModellingID)
    .then(()=>{
        res.status(200).send({status : "Modelling Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;
