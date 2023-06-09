const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  // console.log("Currente environment =", env, "isDevelopment?", isDevelopment);
  return isDevelopment ? "debug" : "warn";
};

export default level;
