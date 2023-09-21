const mongoose=require('mongoose');
const { Schema }=mongoose;

const problemSchema=new Schema({
    P_code: {
        type: String,
        required: true
    },
    Total_Submissions: {
        type: Number,
        default: 0
    },
    Correct_Submissions: {
        type: Number,
        default: 0
    },
    Accuracy: {
        type: Number,
        default: 0
    },
    Is_official: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports=mongoose.model('problem',problemSchema);