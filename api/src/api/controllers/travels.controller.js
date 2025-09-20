const createError = require("http-errors");
const Travel = require("../../lib/models/travel.model");
const Follow = require("../../lib/models/follow.model");

const TravelNotFound = createError(404, "Travel not found");

module.exports.create = async (req, res, next) => {
  const schedule = [];

  for (let i = 0; i < req.body.days; i++) {
    schedule.push({ title: `Day ${i+1}`, content: ""})
  }
  const travel = await Travel.create({
    ...req.body,
    user: req.sessionUser.id,
    schedule: schedule
  });
  res.status(201).json(travel);
};

module.exports.list = async (req, res, next) => {
  let [travels, followingTravels] = await Promise.all([
    Travel.find({ user: req.sessionUser.id })
      .populate("user", ["username", "avatar"]),
    Follow.find({ user: req.sessionUser.id })
      .populate({ 
        path: "travel", 
        populate: {
          path: "user",
          select: ["username", "avatar"]
        }
      })  
  ]);
  
  travels = travels.map((travel) => {
    travel = travel.toJSON();
    travel.follow = false;
    return travel;
  });
  
  followingTravels = followingTravels.map((follow) => {
    const travel = follow.travel.toJSON();
    travel.follow = true;
    return travel;
  });

  res.json([...travels, ...followingTravels]);
};

module.exports.detail = async (req, res, next) => {
  const criterial = { _id: req.params.id, user: req.sessionUser.id };
  const travel = await Travel.findOne(criterial)
    .populate("user");
  if (travel) res.json(travel);
  else next(TravelNotFound);
};

module.exports.update = async (req, res, next) => {
  delete req.body.user;
  const criterial = { _id: req.params.id, user: req.sessionUser.id };
  const travel = await Travel.findByIdAndUpdate(
    criterial,
    req.body,
    {
      new: true,
      runValidators: true
    }
  ).populate("user");
  if (travel) res.json(travel);
  else next(TravelNotFound);
};

module.exports.delete = async ( req, res, next) => {
  const criterial = { _id: req.params.id, user: req.sessionUser.id };
  let [ travel, follows ] = await Promise.all([
    Travel.findOneAndDelete(criterial),
    Follow.deleteMany({ travel: req.params.id })
  ]) 
  
  if (travel) res.json(204).send();
  else next(TravelNotFound);
};
