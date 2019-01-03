const mongoose = require('mongoose');
const StatusSchema = mongoose.Schema({
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
    amounttype: {
        type: String,
        required: true,
        enum: ['cc', 'dc', 'pm']
    },
    remarks:{
        type: String,
        required: true
    }
});

const UserStatus = module.exports = mongoose.model('userDailyStatus', StatusSchema );

UserStatus.saveDailyStatus = (newList, callback) => {
    newList.save(callback);
    
    }


