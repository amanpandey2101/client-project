const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30,
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    hash_password:{
        type: String,
        required: true,

    },
    role:{
        type:String,
        enum:[ 'admin','distributor','superadmin'],
        default:'admin'
    },
    contactNumber:{
        type:String
    },
    profilePicture: {
        type:String
    }

},{
    timeStamps:true
});

userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
});

userSchema.virtual('password').set(function(password){
    this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
    authenticate: function(password){
        return bcrypt.compareSync(password, this.hash_password);
    }
}


module.exports = mongoose.model('User', userSchema);

