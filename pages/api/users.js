import { User } from "../../database/models/User";
import main from "./../../database/db";
const GetUsers = async (req, res) => {
  const { name, email, password } = req.body;
  main().then(() => {
    console.log("Database connected successfully.");
  });
  if (req.method === "POST") {
    const result = await User.create({
      name,
      email,
      password,
    });
    if (result) {
      res.json({
        success: true,
        message: "User created successfully.",
        user: result,
      });
    } else {
      res.json({ success: false, message: "Something went wrong." });
    }
  }
};

export default GetUsers;
