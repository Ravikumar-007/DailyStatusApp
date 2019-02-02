//Require mongoose package
const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
//Define BucketlistSchema with title, description and category
const MeanlistSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    category: {
        type: String,
        required: true,
        enum: ['High', 'Medium', 'Low']
    }
});

const MeanList = module.exports = mongoose.model('MeanList', MeanlistSchema );

//BucketList.find() returns all the lists
module.exports.getAllLists = (callback) => {
  
    MeanList.find(callback);
}

//newList.save is used to insert the document into MongoDB
module.exports.addList = (newList, callback) => {

    newList.save(callback);
}

//Here we need to pass an id parameter to BUcketList.remove
module.exports.deleteListById = (id, callback) => {

    let query = {_id: id};
    MeanList.remove(query, callback);
}