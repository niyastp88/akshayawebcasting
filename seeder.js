const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Admin = require("./models/Admin");
const bcrypt=require("bcryptjs")


dotenv.config();

// Connect to mongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed data

const seedData = async () => {

  try {

    // Create a default admin User
    const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("Nisam@123", salt);
    // Create a default admin User
    const createdUser = await Admin.create({
      username: "akshayavml",
      password: hashedPassword,
      
    });

    console.log("Admin created successfully!");
    process.exit();
  } catch (error) {
    console.error("Error creating admin ", error);
    process.exit(1);
  }
};

seedData();
