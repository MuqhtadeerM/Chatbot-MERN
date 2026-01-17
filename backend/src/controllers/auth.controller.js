import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    // get user data from request
    const { name, email, password } = req.body;

    // check if user exists or not
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(409).json({
        message: "Email Already Exists",
      });
    }

    // hash paswword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //   create new user in database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    //   send response
    res.status(201).json({
      message: "user registered successfully",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "registation failed",
      error: error.message,
    });
  }
};

// user login function
export const loginUser = async (req, res) => {
  try {
    // get login data
    const { email, password } = req.body;

    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid Email or password" });
    }

    // compaire the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password or Email",
      });
    }

    // generate the tocken using jwt - this will tels the who is the user without storing the data on server side
    // it varifies the authenticity and generates the tocken which is automatically expires
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // success response
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Login Failed",
      error: error.message,
    });
  }
};
