const fs = require("fs").promises;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await fs.readFile("employees.json", "utf-8");
    const parsedData = JSON.parse(data);

    const findEmployeeById = parsedData.find(
      (employee) => employee.id === parseInt(id, 10)
    );

    if (findEmployeeById) {
      return res.status(200).json(findEmployeeById);
    } else {
      return res.status(404).json({ message: "Employee not found" });
    }
  } catch (error) {
    return next(error);
  }
};
