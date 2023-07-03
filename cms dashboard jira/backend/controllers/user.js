import User from "../models/User.js";

// signup user

export const signupUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    let user = await User.findOne({ email: email });
    if (user) {
      return res
        .status(400)
        .json({ msg: "User already exists with this Email " });
    }
    user = await User.create({
      userName,
      email,
      password,
    });
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

//  login user->
