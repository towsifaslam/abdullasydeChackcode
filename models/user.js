 const mongoose = require('mongoose')
const userShema = mongoose.Schema({
  // name: { type: String, required: true },
  firstName:{type: String},
  lastName:{type: String},
  email: { type: String, required: true },
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  id: { type: String },
})

module.exports =  mongoose.model("User",userShema)