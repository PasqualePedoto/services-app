// ** User model
module.exports = {
  User: {
    attributes: {
      id: {
        type: "number",
        isInteger: true,
      },
      firstName: {
        type: "string",
        isRequired: true,
        minLength: 2,
      },
      lastName: {
        type: "string",
        isRequired: true,
        minLength: 2,
      },
      email: {
        type: "string",
        isRequired: true,
        isEmail: true,
        unique: true,
      },
      cellNumber: {
        type: "string",
        isRequired: true,
        isEmail: true,
        minLength: 5,
        maxLength: 15,
      },

      service: {
        collection: "service",
        via: "owner",
      },
    },
  },
};
