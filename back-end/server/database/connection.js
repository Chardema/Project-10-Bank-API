const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb+srv://christo59:2GOZJ6t0Pzjk1ROI@cluster0.fhwpryw.mongodb.net/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true})
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}

/*
mongodb+srv://christo59:<password>@cluster0.fhwpryw.mongodb.net/?retryWrites=true&w=majority

const mongoose = require("mongoose");
module.exports = async () => {
  try {
mongoose
    .connect(
        "mongodb+srv://christo59:2GOZJ6t0Pzjk1ROI@cluster0.fhwpryw.mongodb.net/meetlandDB/?retryWrites=true&w=majority",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false,
        }
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
*/

//process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'