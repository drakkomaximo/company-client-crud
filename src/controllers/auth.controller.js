import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import { DICCIONARY, STATUS_CODES, TOKEN, TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (userFound)
      return res
        .status(STATUS_CODES.BADREQUEST)
        .json([DICCIONARY.EMAILALREADYEXISTS]);

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();

    res.json({
      id: userSaved._id,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: error.message });
  }
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });

    if (!userFound)
      return res.status(STATUS_CODES.BADREQUEST).json({
        message: DICCIONARY.USERNOTFOUND,
      });

    const isMatch = await bcrypt.compare(password, userFound.password);

    if (!isMatch)
      return res.status(STATUS_CODES.BADREQUEST).json({
        message: DICCIONARY.INVALIDPASSWORD,
      });

    const token = await createAccessToken({ id: userFound._id });

    res.cookie(TOKEN, token);
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNALSERVERERROR)
      .json({ message: error.message });
  }
};
export const logout = (req, res) => {
  res.cookie(TOKEN, "", {
    expires: new Date(0),
  });
  return res.sendStatus(STATUS_CODES.OK);
};
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id);

  if (!userFound)
    return res.status(STATUS_CODES.BADREQUEST).json({
      message: DICCIONARY.USERNOTFOUND,
    });

  return res.json({
    id: userFound._id,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  });
};
export const verifyToken = async (req, res) => {
  const { token } = req.cookies;

  if (!token)
    return res
      .status(STATUS_CODES.UNAUTHORIZED)
      .json({ message: DICCIONARY.UNAUTHORIZED });

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err)
      return res
        .status(STATUS_CODES.UNAUTHORIZED)
        .json({ message: DICCIONARY.UNAUTHORIZED });

    const userFound = await User.findById(user.id);
    if (!userFound)
      return res
        .status(STATUS_CODES.UNAUTHORIZED)
        .json({ message: DICCIONARY.UNAUTHORIZED });

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
