const fs = require("fs").promises;

module.exports = async (_req, res, next) => {
  try {
    const data = await fs.readFile("employees.json", "utf-8");
    const parsedData = JSON.parse(data);
    return res.status(200).json(parsedData);
  } catch (error) {
    return next(error);
  }
};
