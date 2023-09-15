const mongoose = require("mongoose");

MONGOURI =
  "mongodb+srv://chiragmathur27:nwUeTnoZS7H85kio@twitter-cluster.nhhmswo.mongodb.net/?retryWrites=true&w=majority";

const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(MONGOURI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log(`Connected to database ${connection.connections[0].name}`);
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectToDb;
