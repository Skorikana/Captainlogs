const express = require("express");
const router = express.Router();
const Logs = require("../models/logs")

//Index
router.get("/" ,(req,res) =>{
    //res.send("Welcome to Captain Logs")
    Logs.find({}, (error, allLogs)=>{
        res.render('Index', {
            logs: allLogs
        });
    })
})

//NEW

router.get("/new" ,(req,res)=>{
    res.render("New")
})

//DELETE

router.delete('/:id', (req, res)=>{
    //res.send('deleting...');
    Logs.findByIdAndRemove(req.params.id, (err, data)=>{
    res.redirect("/logs");  
   })
})

//UPDATE

router.put('/:id',(req, res)=>{
    
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true;
    } else {
        req.body.shipIsBroken = false;
    }
    console.log(req.body)
    Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLogs)=>{
       console.log(updatedLogs)
        res.redirect(`/logs/${req.params.id}`);
    });
});

//CREATE

router.post("/" ,(req,res)=>{
    //res.send("data received")
    if(req.body.ShipIsBroken ==="on"){
        req.body.ShipIsBroken = true;
    }else{
        req.body.ShipIsBroken =false;
    }
     Logs.create(req.body, (error, createdLogs)=>{
        //res.send(createdLogs)
        res.redirect("/logs")
    })
   
})

//EDIT

router.get("/:id/edit", (req,res) =>{
    Logs.findById(req.params.id, (err, foundLogs)=>{
       if(!err){            //error handling
        res.render("Edit",{
            logs:foundLogs    //pass in the found fruit so we can prefill the form
        }
        );
       }else{
        res.send({msg:err.message})
       }    
    })
})

//SHOW

router.get('/:id', (req, res)=>{
    Logs.findById(req.params.id, (err, foundLog)=>{
        //res.send(foundLog);
        res.render('Show', {
            logs:foundLog
        })
    });
});
module.exports =router;