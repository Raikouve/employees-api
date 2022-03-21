const fs = require("fs").promises;

module.exports = async (req, res, next) => {
  try {
    const data = await fs.readFile("employees.json", "utf-8");
    const parsedData = JSON.parse(data);
    const { name, age, occupation } = req.body;
  
    const newEmployee = { name, age, occupation, id: (parsedData.length + 1) };
  
    const newEmployees = [...parsedData, newEmployee];
  
    fs.writeFile("employees.json", JSON.stringify(newEmployees));
  
    return res.status(201).json(newEmployee);
  } catch (error) {
    return next(error);
  }
}