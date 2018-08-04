const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    name:String,
    password:String,
    created:{
        type:Date,
        default:Date.now
    }
});

UserSchema.pre('save',function(next){
    let user = this;
    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password,null,null,function(err,hash){
        if(err) return next(err);
        user.password = hash;
        next();
    }); 
});

UserSchema.methods.comparePassword = function(password){
   return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',UserSchema);