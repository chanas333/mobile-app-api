var mongoose = require('mongoose');

var appSchema = mongoose.Schema({
    appname:String,
    appversion:Number,
    download:Number
})

module.exports = mongoose.model("details",appSchema)
