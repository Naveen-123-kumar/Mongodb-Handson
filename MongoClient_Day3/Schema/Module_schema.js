const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        salary: {
            type: Number,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        lastCompany: String,
        lastSalary: Number,
        overallExp: Number,
        contactInfo: {
            type:Number,
            required:true
        },
        yearGrad: Number,
        gradStream: String

  });
  const Employee = mongoose.model('employee', employeeSchema);
  module.exports={Employee}