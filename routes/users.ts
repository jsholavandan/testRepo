import * as express from 'express';
import * as mongoose from 'mongoose';

let User = require('../models/user');


let router = express.Router();

/* GET users listing. */
router.post('/login', function(req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  User.findOne({username:username}, function(err, user){
    if(err){
      res.status(400).json(err);
    }
    if(!user){
      res.status(400).json({message: "Unknown user"});
    }
    if(!user.validatePassword(password)){
      res.status(400).json({message: "Incorrect password"});
    }
    res.json(user);
  });
});


router.post('/register', function(req, res, next){

  let user = new User();
  user.username = req.body.username;
  user.email = req.body.email;
  user.setPassword(req.body.password) ;
  user.save(function(err, user){
    if(err){
      res.status(400).json(err);
    }
    res.send("Registration is complete. Please login");
  });
});

export default router;
