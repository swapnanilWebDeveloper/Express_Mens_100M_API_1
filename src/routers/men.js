const express = require("express");
const  MensRanking  = require("../models/mens");

const router = express.Router();

// POST request
router.post("/mens", async (req,res) => {
    
    try{
        const addingMensRecords = new MensRanking({
               ranking : req.body.ranking,
               name : req.body.name,
               dob : req.body.dob,
               country : req.body.country,
               score : req.body.score,
        });
     
        console.log(addingMensRecords);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(err){
        res.status(400).send("Something went wrong !! : "+err);
    }
});

// GET all mens
router.get("/mens", async (req,res) => {
    try{
        const getMens = await MensRanking.find({}).sort({ ranking : 1});
        
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send("Something went wrong !! : "+err);
    }
});

// GET men by id
router.get("/mens/getById/:id", async (req,res) => {
    try{
        const menId = req.params.id;
        console.log("men's player id = "+req.params.id+" = "+menId)
        const getMens = await MensRanking.findOne({_id : menId});
        
        console.log(getMens);
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send("Something went wrong !! : "+err);
    }
});

// GET men by name
router.get("/mens/getByName/:name", async (req,res) => {
    try{
        const menName = req.params.name;
        console.log("men's player name = "+req.params.name+" = "+menName)
        const getMens = await MensRanking.findOne({ name : menName});
        
        console.log(getMens);
        res.status(201).send(getMens);
    }catch(err){
        res.status(400).send("Something went wrong !! : "+err);
    }
});

// PUT or Update or patch men by id 
router.patch("/mens/updateById/:id", async (req,res) => {
      try{
        const menId = req.params.id;
        console.log("mens id = "+menId+" = "+req.params.id);
        const menUpdate = await MensRanking.findOneAndUpdate({_id : menId}, 
                            {
                             $set :
                                { 
                                    ranking : req.body.ranking,
                                    name : req.body.name,
                                    dob : req.body.dob,
                                    country : req.body.country,
                                    score : req.body.score,
                                } 
                             },
                             {
                                returnDocument : "after",
                            });
            console.log(menUpdate);
            res.status(201).send(menUpdate);
      }
      catch(err){
           res.status(400).send("Something went wrong !! : "+err);
      }
});

// PUT or Update or patch men by name 
router.patch("/mens/updateByName/:name", async (req,res) => {
    try{
      const menName = req.params.name;
      console.log("mens name = "+menName+" = "+req.params.name);
      const menUpdate = await MensRanking.findOneAndUpdate({name : menName}, 
                          {
                           $set :
                              { 
                                  ranking : req.body.ranking,
                                  name : req.body.name,
                                  dob : req.body.dob,
                                  country : req.body.country,
                                  score : req.body.score,
                              } 
                           },
                           {
                              returnDocument : "after",
                          });
          console.log(menUpdate);
          res.status(201).send(menUpdate);
    }
    catch(err){
         res.status(400).send("Something went wrong !! : "+err);
    }
});

// Delete men by id 
router.delete("/mens/deleteById/:id", async (req,res) => {
    try{
      const menId = req.params.id;
      console.log("mens id = "+menId+" = "+req.params.id);
      const menDelete = await MensRanking.findOneAndDelete({_id : menId});
          
          console.log(menDelete);
          res.status(201).send(menDelete);
    }
    catch(err){
         res.status(400).send("Something went wrong !! : "+err);
    }
});

// Delete men by name
router.delete("/mens/deleteByName/:name", async (req,res) => {
    try{
      const menName = req.params.name;
      console.log("mens name = "+menName+" = "+req.params.name);
      const menDelete = await MensRanking.findOneAndDelete({name : menName});
          
          console.log(menDelete);
          res.status(201).send(menDelete);
    }
    catch(err){
         res.status(400).send("Something went wrong !! : "+err);
    }
});

module.exports = router;