const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);
// mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/SpecialYouDatabase", {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((e) => {
    console.log("no connection");
    console.log(e);
  });
