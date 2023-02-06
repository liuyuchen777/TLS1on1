// jwt secret
let JWT_SECRET: string =
  typeof process.env.JWT_SECRET === "undefined"
    ? "jwt12345"
    : process.env.JWT_SECRET;

// port
const PORT: string =
  typeof process.env.PORT === "undefined" ? "8080" : process.env.PORT;

export {
  // config string
  JWT_SECRET,
  PORT,
};
