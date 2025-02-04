const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true ,  
            minlenght:[3, 'First name must be of 3 characters long'],
            
        },
      lastname:{
        type:String,
        minlenght:[3, 'Last name must be of 3 characters long'],
      }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        // validate: {
        //     validator: function(v) {
        //       return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        //     },
        //     message: props => `${props.value} is not a valid email address!`
        //   }
        minlenght:[5, 'Email name must be of 5 characters long'],
    },
    password:{
        type:String,
        required:true,
        select:false
    },
   socketId:{
         type:String,
   },



})

userSchema.methods.generateAuthToken =  function(){
const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
return token;
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){

    return await bcrypt.hash(password, 10);
}

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;