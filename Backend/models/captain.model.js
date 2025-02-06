const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
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
     lowercase: true,
     match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
 },
 password:{
     type:String,
     required:true,
     select:false,
     minlenght:[6, 'Password must be of 6 characters long'],
 },
 socketId:{
       type:String,
 },
 status:{
     type:String,
     enum:['active', 'inactive'],
     default:'inactive'
 },
 vehicle:{
    color:{
        type:String,
        required:true,
        minlenght:[3, 'Color must be of 3 characters long'],
    }
    ,
    plate:{
        type:String,
        required:true,
        minlenght:[3, 'Plate must be of 3 characters long'],
    },
    capacity:{
        type:Number,
        required:true,
        min:[1, 'Capacity must be greater than 0'],
        
    },
    vehicleType:{
        type:String,
        enum:['car', 'bike','auto'],
        required:true,
    } ,
    location:{
    lat:{
        type:Number,
       
    },
    lng:{
        type:Number,
       
    }
 }
},

});

captainSchema.methods.generateAuthToken =function(){
   const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
   return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function(password){

    return await bcrypt.hash(password, 10);
}
const captainModel = mongoose.model('captain', captainSchema);
module.exports =  captainModel;