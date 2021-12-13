const router = require("express").Router();
const PreShoot = require("../models/preShoot");

router.route('/add').post((req, res) => {
    const coupleName = req.body.coupleName;
    const imgURL1 = req.body.imgURL1;
    const imgURL2 = req.body.imgURL2;
    const imgURL3 = req.body.imgURL3;
    const collectionURL = req.body.collectionURL;
    const category = req.body.category;
    const password = req.body.password;
    const downloads = Number(req.body.downloads) + 1;
    const likes = Number(req.body.likes) + 1;
    const unLikes = Number(req.body.unLikes) + 1;
    

    const newPreShootData = {
        coupleName,
        imgURL1,
        imgURL2,
        imgURL3,
        collectionURL,
        downloads,
        likes,
        unLikes,
        password,
        category
    }

    const newPreShoot = new PreShoot(newPreShootData);

    newPreShoot.save()
           .then(() => res.json('New PreShoot Collection Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    PreShoot.find().then((PreShoots)=>{
        res.json(PreShoots);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const downloads = Number(req.body.downloads) + 1;

    const updatePreShoot = {downloads};

    await PreShoot.findByIdAndUpdate(ID , updatePreShoot)
    .then(()=>{
        res.status(200).send({status : "PreShoot Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/like/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const likes = Number(req.body.likes) + 1;
    
    const updatePreShoot = {likes};

    await PreShoot.findByIdAndUpdate(ID , updatePreShoot)
    .then(()=>{
        res.status(200).send({status : "PreShoot Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});


router.route("/unLike/:id").put(async (req , res)=>{  //update data
    const ID = req.params.id;
    const unLikes = Number(req.body.unLikes) + 1;
    
    const updatePreShoot = {unLikes};

    await PreShoot.findByIdAndUpdate(ID , updatePreShoot)
    .then(()=>{
        res.status(200).send({status : "PreShoot Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});


router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let PreShootID = req.params.id;

    await PreShoot.findByIdAndDelete(PreShootID)
    .then(()=>{
        res.status(200).send({status : "PreShoot Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;
