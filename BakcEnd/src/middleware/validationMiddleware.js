const Joi = require("joi");

const locationSchema = Joi.object({
  title: Joi.string().required(),
  fileUrl: Joi.string().uri().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

function validateLocationData(req, res, next) {
  const { error } = locationSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
}

module.exports = { validateLocationData };
