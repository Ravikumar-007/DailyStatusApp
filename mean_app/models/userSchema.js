const mongoose = require('mongoose');
const bcrypt= require('bcryptjs');
const RegisterSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true,
        unique : true
        
    },
    password: {
        type: String,
        required: true
    },
    isroletype: {
        type: String,
        required: true,
        enum: ['1', '2', '3']
    },
    isactive:{
        type: String,
     
        required: true,
        enum: ['0','1']
    },
    userdetails:{type:Array, ref: 'UserDetail' }
});

const User = module.exports = mongoose.model('User', RegisterSchema );

module.exports.addData = (newList, callback) => {

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newList.password, salt, (err, hash) => {
          if(err) throw err;
          newList.password = hash;
          newList.save(callback);
        });
      });
}
module.exports.pushToModel=(Userd,UserDetailsModel, callback) => {
   



Userd.userdetails=UserDetailsModel;
    Userd.save(callback);

}

module.exports.getRoleByUsername = (username, callback) => {

        const query = {username: username}
        User.findOne(query,{password:0,_id:0,isactive:0})
        .populate('userdetails[0].[0]', '-userdetails[0].[0].[0]._id -userdetails[0].[0].[0].user_Id')
              .exec(callback);
    }
    module.exports.updateUserById = (id,active,role, callback) => {
        User.findByIdAndUpdate(id, { isactive: active, isroletype: role},function(err,data) {

            if(err) throw err;
         }).exec(callback);
        
    }
    
module.exports.getUserByUsername = (username, callback) => {

    const query = {username: username}
    User.findOne(query,callback);
}

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
  }
  
  module.exports.getAllUserDetails = function(userExcept, callback) {
 
    User.find({ }, {password:0,})
    .populate('userdetails[0].[0]', '-userdetails[0].[0].[0]._id -userdetails[0].[0].[0].user_Id')
          .exec(callback);
  }  
module.exports.comparePassword = (candidatePassword, hash, callback) => {

    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
      });
}