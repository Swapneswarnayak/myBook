import User from "../models/User";

export const getUser = async (req, res) => {
  try {
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
