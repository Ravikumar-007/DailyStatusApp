const mongoose = require('mongoose');
const EstimatedStatusSchema = mongoose.Schema({
    user_Id: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    datetime: {
        type: Date,
        required: true,
        //unique : true
        
    },
    amount: {
        type: Number,
        required: true
    },
  
    remarks:{
        type: String,
        required: true
    }
});

const EstimatedStatus = module.exports = mongoose.model('userEstimatedStatus', EstimatedStatusSchema );

EstimatedStatus.saveEstimatedStatus = (newList, callback) => {
    newList.save(callback);
    
    }

 
    EstimatedStatus.getEstimatedDataByUsername = (userId, callback) => {
        const query = {user_Id: userId}
        EstimatedStatus.findOne(query)
        // .populate('userdetails[0].[0]', '-userdetails[0].[0].[0]._id -userdetails[0].[0].[0].user_Id')
              .exec(callback);
        
        }
    


