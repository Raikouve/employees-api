const fs = require("fs").promises;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, age, occupation } = req.body;

    const data = await fs.readFile("employees.json", "utf-8");
    const parsedData = JSON.parse(data);

    const filteredEmployees = parsedData
      .filter((employee) => Number(employee.id) !== Number(id));

    const modifiedEmployee = { name, age, occupation, id: Number(id) };

    filteredEmployees.push(modifiedEmployee);

    await fs.writeFile("employees.json", JSON.stringify(filteredEmployees));

    return res.status(200).json(modifiedEmployee);
  } catch (error) {
    return next(error);
  }
}