//Require the express package and use express.Router()
const express = require('express');
const router = express.Router();
const meanlist = require('../models/model');
//GET HTTP method to /bucketlist
router.get('/',(req,res) => {
    meanlist.getAllLists((err, lists) => {
        if(err) {
            res.json({success:false, message: `Failed to load all lists. Error: ${err}`});
        }
        else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();

    }
    }); 
});

//POST HTTP method to /bucketlist

router.post('/', (req,res,next) => {
   
    let newList = new meanlist({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    });
    meanlist.addList(newList,(err, list) => {
        
        if(err) {
            res.json({success: false, message: `Failed to create a new list. Error: ${err}`});

        }
        else
            res.json({success:true, message: "Added successfully.", insertedData:list});

    });
});

//DELETE HTTP method to /bucketlist. Here, we pass in a param which is the object id.

router.delete('/:id', (req,res,next)=> {
  //access the parameter which is the id of the item to be deleted
    let id = req.params.id;
  //Call the model method deleteListById
  meanlist.deleteListById(id,(err,list) => {
        if(err) {
            res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
        }
        else if(list) {
            res.json({success:true, message: "Deleted successfully",
        });
        }
        else
            res.json({success:false});
    })
});

module.exports = router;