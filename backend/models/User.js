const mongoose=require('mongoose');
const { Schema }=mongoose;

const subSchema1=new Schema({
    P_id: {
        type: String,
        required: true,
    }
}) // for problems
const UserSchema=new Schema({
    Username: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
    },
    Address: {
        type: String,
    },
    Title: {
        type: String,
        default: "White belt"
    },
    Questions_solved: [String],
    Questions_Created: [String]
});

module.exports=mongoose.model('User',UserSchema);