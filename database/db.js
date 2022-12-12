import mongoose from "mongoose";
const main = () => {
  return mongoose.connect(
    "mongodb+srv://siam:ohiduzzamansiam@siamcluster.3rza3p7.mongodb.net/withnextjs?retryWrites=true&w=majority"
  );
};
export default main;
