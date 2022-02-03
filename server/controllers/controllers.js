import User from '../models/user';

export const register = async (req, res) => {
  console.log(req.body.data);
  const {
    name,
    surname,
    email,
    telephone,
    gender,
    day,
    month,
    year,
    comments,
  } = req.body.data;

  const user = new User(req.body.data);
  try {
    await user.save();

    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};

export const registeredUsers = async (req, res) => {
  try {
    const user = await User.find().sort({ _id: -1 });

    res.json(user);
  } catch (err) {
    console.log(err);
  }
};
