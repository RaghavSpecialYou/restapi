const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost:27017/specialyouproducts",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connection successful")}).catch((e)=>{console.log('no connection')});