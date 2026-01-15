import User from "../models/User.model.js";

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

    //   create new user in database
    const user = await User.create({
      name,
      email,
      password,
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
