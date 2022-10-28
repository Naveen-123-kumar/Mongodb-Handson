const {Employee}=require('../Schema/Module_schema')

const updateWithSalary = async () => {
    try {
        const result = await Employee.updateMany({"salary": {$gt: 30000}}, {$set: {"salary": 28000}});

        console.log("Updated with salary", result);
    } catch (e) {
        console.error("error", e)
    }
}

module.exports = {updateWithSalary}