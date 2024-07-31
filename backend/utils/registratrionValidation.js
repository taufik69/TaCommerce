const Joi = require("joi");
const registrationValidation = (registrationInput) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 1,
        tlds: { allow: ["com"] },
      })

      .required(),
    password: Joi.string().min(3).max(15).required(),
  });

  const result = schema.validate(registrationInput, { abortEarly: false });
  return result;
};

module.exports = registrationValidation;
