const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
const RoleSchema = mongoose.Schema({
    user_Id: {type: mongoose.Schema.Types.ObjectId,ref: 'User'},
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
  
});
const UserDetail = module.exports = mongoose.model('UserDetail ', RoleSchema );

module.exports.addRole = (newList, callback) => {
newList.save(callback);

}


