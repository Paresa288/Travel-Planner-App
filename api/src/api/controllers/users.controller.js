const createError = require("http-errors");
const User = require("../../lib/models/user.model");

const UserNotFound = createError(404, "User not found");
const UsernameAlreadyExists = createError(
  409, {
    message: "User validation failed: username: Username already exists",
    errors: { username: "Username already exists" },
  },
);

module.exports.list = async (req, res, next) => {
  const users = await User.find()
    .populate("travels");
    
  res.json(users);
};

module.exports.detail = async (req, res, next) => {
  const user = await User.findById(req.params.id)
    .populate("travels");

  if (user) res.json(user);
  else next(UserNotFound);
};

module.exports.create = async (req, res, next) => {
  const { username } = req.body;

  let user = await User.findOne({ username });
  if (user) next(UsernameAlreadyExists);
  else {
    user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      birthDate: req.body.birthDate,
      avatar: `https://i.pravatar.cc/60?u=${req.body.username}`
    });
    res.status(201).json(user);
  }
};

module.exports.update = async (req, res, next) => {
  const permittedParams = ["username", "password", "birthDate"];

  Object.keys(req.body).forEach((key) => {
    if (!permittedParams.includes(key)) {
      delete req.body[key];
    }
  });

  if (req.file) {
    req.body.avatar = req.file.path;
  };

  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  )
  if (user) res.json(user);
  else next(UserNotFound);
};

module.exports.delete = async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) res.status(204).send();
  else next(UserNotFound);
};
