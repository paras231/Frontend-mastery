import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    console.log(decoded);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};