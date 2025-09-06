const createError = require("http-errors");

const Follow = require("../../lib/models/follow.model");

module.exports.create = async (req, res, next) => {
  const follow = await Follow.create({ user: req.sessionUser.id, travel: req.params.id });
  res.json(follow);
};

module.exports.list = async (req, res, next) => {
  const follows = await Follow.find({ user: req.sessionUser.id });

  if (follows) res.json(follows);
  else next(createError(400, "No follows yet"));
};

module.exports.delete = async (req, res, next) => {
  const follow = await Follow.findByIdAndDelete(req.params.followId);
  if (follow) res.status(204).send();
  else next(createError(404, "Follow not found"));
};
