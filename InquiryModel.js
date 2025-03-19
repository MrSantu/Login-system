// require('./dbConnect')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/user')
console.log('Db connected')
const AutoIncrement = require('mongoose-sequence')(mongoose);


const InquirySchema = mongoose.Schema({
    name:String,
    username:String,  
     mobile:Number,
     password:Number
})

InquirySchema.plugin(AutoIncrement, { inc_field: 'id' });


module.exports = new mongoose.model("info",InquirySchema)

