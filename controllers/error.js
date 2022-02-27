exports.get404 = (req, res, next) => {
  res.status(404).json({ message: "Not Found, Please use /Search instead" });
};
