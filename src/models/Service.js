// ** Service model
module.exports = {
  Service: {
    attributes: {
      id: {
        type: "number",
        isInteger: true,
      },
      name: {
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

      // $ Add relation hasMany with User
      owner: {
        model: "user",
      },
    },
  },
};
