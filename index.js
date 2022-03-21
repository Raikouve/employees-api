const express = require("express");
const bodyParser = require("body-parser");
const getAllEmployees = require("./handlers/getAllEmployees");
const getEmployeeById = require("./handlers/getEmployeeById");
const getEmployeeByName = require("./handlers/getEmployeeByName");
const createEmployee = require("./handlers/createEmployee");
const updateEmployee = require("./handlers/updateEmployee");

const HTTP_STATUS_OK = 200;
const PORT = 3000;

const app = express();


app.use(bodyParser.json());

app.get("/", (_req, res) => res.status(HTTP_STATUS_OK).send());

app.get("/employees/search", (req, res, next) => getEmployeeByName(req, res, next));

app.get("/employees", (_req, res, next) => getAllEmployees(_req, res, next));

app.get("/employees/:id", (req, res, next) => getEmployeeById(req, res, next));

app.post("/employees", (req, res, next) => createEmployee(req, res, next));

app.put("/employees/:id", (req, res, next) => updateEmployee(req, res, next));

app.listen(PORT, () => {
  console.log('Server On!');
});
