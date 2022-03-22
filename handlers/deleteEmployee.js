const fs = require("fs").promises;

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    
    const data = await fs.readFile("employees.json", "utf-8");
    const parsedData = JSON.parse(data);

    const newEmployees = parsedData
      .filter((employee) => Number(employee.id) !== Number(id));

    await fs.writeFile("employees.json", JSON.stringify(newEmployees));

    return res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    return next(error);
  }
}