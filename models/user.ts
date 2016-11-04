import * as mongoose from 'mongoose';
import crypto = require('crypto');

let UserSchema = new mongoose.Schema({
  username : { type:String, lowercase:true, uinque:true},
  email: {type:String, lowercase:true, unique:true},
  passwordHash: String,
  salt: String
});

UserSchema.method("setPassword", function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
});

UserSchema.method('validatePassword', function(password){
  let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha1').toString('hex');
  return (hash === this.passwordHash);
});

export let User = mongoose.model('User', UserSchema);
