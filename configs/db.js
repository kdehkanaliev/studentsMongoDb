import mongoose from "mongoose";

let connectDb = () => {
  mongoose
    .connect(process.env.DB_URL.replace("<db_password>", "pMBZOHY5f3J9PG0o"))
    .then(() => console.log("db is connected"))
    .catch((error) => {
      throw error;
    });
};

export default connectDb;
