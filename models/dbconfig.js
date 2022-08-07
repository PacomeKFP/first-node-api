const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pacomekfp:<password>@cluster0.a8liq3r.mongodb.net/node-api?retryWrites=true&w=majority",
  { useNewUrlParser: true , useUnifiedTopology: true },
  (error) => {
    if (!error) console.log("Mongodb connected well");
    else console.log("Conection error" + error);
  }
);
