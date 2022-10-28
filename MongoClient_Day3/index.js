const mongoose = require("mongoose");
const {InsertMany}=require('./CRUD/InserMany')
const {findAllWithMongoose, findWithSalary, findWithExp, findWithTwoConditions}=require('./CRUD/Read')
const {updateWithSalary}=require('./CRUD/Update')
const {deleteWithLastCompany}=require('./CRUD/Delete')
mongoose
  .connect("mongodb://localhost:27017/employee-details")
  .then(() => {
    console.log("Connected to MongoDB...");
  })
  .catch((e) => console.error(e));

  InsertMany()
  findAllWithMongoose()
  findWithSalary()
  findWithExp()
  findWithTwoConditions()
  updateWithSalary()
  deleteWithLastCompany()

