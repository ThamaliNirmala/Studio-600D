const router = require("express").Router();
const WeddingShoot = require("../models/weddingShoot");

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
    

    const newWeddingShootData = {
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

    const newWeddingShoot = new WeddingShoot(newWeddingShootData);

    newWeddingShoot.save()
           .then(() => res.json('New WeddingShoot Collection Added'))
           .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/").get((req , res)=>{ //route for display all
    
    WeddingShoot.find().then((WeddingShoots)=>{
        res.json(WeddingShoots);
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/update/:id").put(async (req , res)=>{  //update data
    let WeddingShootID = req.params.id;
    const coupleName = req.body.coupleName;
    const imgURL1 = req.body.imgURL1;
    const imgURL2 = req.body.imgURL2;
    const imgURL3 = req.body.imgURL3;
    const category = req.body.category;
    const password = req.body.password;
    const downloads = Number(req.body.downloads) + 1;
    const likes = Number(req.body.likes) + 1;
    const unLikes = Number(req.body.unLikes) + 1;

    const updateWeddingShoot = {coupleName , imgURL1 , imgURL2 , imgURL3 ,category, password, downloads, likes, unLikes};

    await WeddingShoot.findByIdAndUpdate(WeddingShootID , updateWeddingShoot)
    .then(()=>{
        res.status(200).send({status : "WeddingShoot Collection Updated"});
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with updating data" , error : err.message});
    });
});

router.route("/delete/:id").delete(async (req , res)=>{  //delete data
    let WeddingShootID = req.params.id;

    await WeddingShoot.findByIdAndDelete(WeddingShootID)
    .then(()=>{
        res.status(200).send({status : "WeddingShoot Collection has successfully deleted"});

    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status : "Error with deleting data" , error : err.message});
    });
});


module.exports = router;
