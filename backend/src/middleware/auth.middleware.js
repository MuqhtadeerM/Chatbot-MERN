// this is auth middleware
import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  try {
    // get authorization header
    const authHeader = req.headers.authorization;

    // check the if header exist
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({
        message: "Not Authorized, token missing",
      });
    }

    // extract token
    const token = authHeader.split(" ")[1];

    //  varify tocken
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // attach user to request
    req.user = decoded;

    // move to next middleware/controller
    next();
  } catch (error) {
    //catches the error if try fails..abs
    return res.status(401).json({
      message: "Not authorized, token invalid",
    });
  }
};

export default protect;
