const { Employee } = require("../Schema/Module_schema");



const findAllWithMongoose = async () => {
    try {
        const result = await Employee.find();

        console.log("Succesfully found all", result);
    } catch (e) {
        console.error("error", e)
    }
}

const findWithSalary = async () => {
    try {
        const result = await Employee.find({"salary": {$gt: 30000}});

        console.log("Succesfully found with salary", result);
    } catch (e) {
        console.error("error", e)
    }
}

const findWithExp = async () => {
    try {
        const result = await Employee.find({"overallExp": {$gt: 1}});

        console.log("Succesfully found with Experience", result);
    } catch (e) {
        console.error("error while finding records", e)
    }
}

const findWithTwoConditions = async () => {
    try {
        const result = await Employee.find({$and: [{"yearGrad": {$gt: 2015}}, {"overallExp": {$gt: 1}}]});

        console.log("Data", result);
    } catch (e) {
        console.error("error", e)
    }
}

module.exports = { findAllWithMongoose, findWithSalary, findWithExp, findWithTwoConditions};