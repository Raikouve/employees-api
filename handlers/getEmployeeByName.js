const fs = require("fs").promises;

module.exports = async (req, res, next) => {
  try {
    const query = req.query.q;
    const data = await fs.readFile("employees.json", "utf-8");
    const parsedData = JSON.parse(data);

    const filterEmployeeByName = parsedData.filter((employee) =>
      employee.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filterEmployeeByName) {
      return res.status(200).json(filterEmployeeByName);
    } else {
      return res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    return next(error);
  }
};
