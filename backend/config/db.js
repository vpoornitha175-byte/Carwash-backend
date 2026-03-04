// backend/config/db.js
const connectDB = async () => {
  console.log("Skipping MongoDB connection for local testing");
};

module.exports = connectDB;