const express = require('express');
const router = express.Router();
const UserModel = require('../models/userSchema');
const UserDetailsModel = require('../models/userDetailsSchema');
const passport = require('passport');
const userDailyStatus= require('../models/userDailyStatusSchema');
const userEstimatedStatus= require('../models/userEstimatedStatusSchema');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const mongoose = require('mongoose');
router.post('/registeruser', (req, res, next) => {

  let newUserModel = new UserModel({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.userName,
    password: req.body.password,
    isactive: req.body.isActive,
    isroletype: req.body.isRoleType

  });
  let newUserDetailsModel = new UserDetailsModel({
    user_Id: newUserModel._id,
    firstname: req.body.firstName,
    lastname: req.body.lastName
  });
  UserModel.addData(newUserModel, (err, list) => {

    if (err) {
      res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });

    }
    else {
      UserDetailsModel.addRole(newUserDetailsModel, (err, rolelist) => {
        if (err) {
          res.json({ success: false, message: `Failed to create a new list. Error: ${err}` });
        } else {
          console.log(newUserDetailsModel);
          UserModel.pushToModel(newUserModel, newUserDetailsModel, (err, list) => {
            if (err) throw err;
            if (list) {
              console.log(list);

              UserModel.find()
                .populate('userdetails[0].[0]')
                .exec(function (error, posts) {
                  if (err) throw err;
                  if (posts) {
                    console.log(JSON.stringify(posts, null, "\t"));
                    res.json({ success: true, message: "Added successfully.", insertedData: posts });
                  }

                })
            }


          });


        }
      })
    }


  });


});
router.post('/getEstimatedDataByUserId', (req, res, next) => {
  const userId=req.body.UserId;
  userEstimatedStatus.getEstimatedDataByUsername(userId, (err, user) => {
debugger;
if(err) throw err;
if(user){
  console.log(user);
  res.json({ success: true, message: "",isAvailableRecords:true, availableData: user});
}

  });

});
router.post('/updateuser', (req, res, next) => {
  const Id = req.body.id;
  const isActive = req.body.isActive;
const isRoleType=req.body.isRoleType;
UserModel.updateUserById(Id,isActive,isRoleType,(err,details)=>{
  if(err) throw err;
  console.log(details);
  return res.json({ success: false, msg: 'User Updated Successfully'});
})
});
router.post('/login', (req, res, next) => {

  const username = req.body.userName;
  const password = req.body.password;
  UserModel.getUserByUsername(username, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'User not found' });
    }
      if(user.isactive=="0") {
        return res.json({ success: false, msg: "You Don't have access to login" });
      }
    
    console.log(user);

    UserModel.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign({ data: user }, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({ success: false, msg: 'Wrong password' });
      }
    });
  });

});
router.post('/getRoleByUserId', (req, res, next) => {

  //return res.json({success: true, msg: 'yes'});
  const username = req.body.UserId;
  UserModel.getRoleByUsername(username, (err, user) => {

    if (err) throw err;
    if (user) {
       return res.json({ success: true, user: user });

    }
  });
});

router.post('/getAllUserDetails', (req, res, next) => {
  const username = req.body.UserId;
  UserModel.getAllUserDetails(username, (err, users) => {
    if (err) throw err;
    if (users) {
      console.log(users);
      returnedUsers = [];
      for (var i = 0; i < users.length; i++) {
        console.log(users[i]);
        if (users[i].username != username) {
          returnedUsers.push(users[i]);
        }
      }
      console.log(returnedUsers);
      return res.json({ success: true, users: returnedUsers });
    }
  })
});
router.post('/getDailyStatusUpdate', (req, res, next) => {
  let statusData = new userDailyStatus({
    user_Id:req.body.userId,
    amount: req.body.Amount,
    datetime: req.body.DateTime,
    remarks: req.body.Remarks,
    amounttype: req.body.TransactionType

  });
  userDailyStatus.saveDailyStatus(statusData, (err, savedData) => {
 debugger;
 if(err) throw err;
 if(savedData){
  return res.json({ success: true, returnedData: savedData });
 }
})
});

router.post('/getEstimatedStatusUpdate', (req, res, next) => {
  let EstimatedstatusData = new userEstimatedStatus({
    user_Id:req.body.userId,
    amount: req.body.Amount,
    datetime: req.body.DateTime,
    remarks: req.body.Remarks,
  });
  userEstimatedStatus.saveEstimatedStatus(EstimatedstatusData, (err, savedData) => {
    if(err) throw err;
    if(savedData){
     return res.json({ success: true, returnedData: savedData });
    }
})
});


module.exports = router;