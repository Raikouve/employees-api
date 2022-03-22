const express = require("express");
const bodyParser = require("body-parser");
const getAllEmployees = require("./handlers/getAllEmployees");
const getEmployeeById = require("./handlers/getEmployeeById");
const getEmployeeByName = require("./handlers/getEmployeeByName");
const createEmployee = require("./handlers/createEmployee");
const updateEmployee = require("./handlers/updateEmployee");
const deleteEmployee = require("./handlers/deleteEmployee");
const { error } = require("./middlewares");

const HTTP_STATUS_OK = 200;
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get("/", (_req, res) => res.status(HTTP_STATUS_OK).send());

app.get("/employees/search", error, getEmployeeByName);

app.get("/employees", error, getAllEmployees);

app.get("/employees/:id", error, getEmployeeById);

app.post("/employees", error, createEmployee);

app.put("/employees/:id", error, updateEmployee);

app.delete("/employees/:id", error, deleteEmployee);

app.listen(PORT, () => {
  console.log('Server On!');
});
