const {Employee}=require('../Schema/Module_schema')

const deleteWithLastCompany = async () => {
    try {
        const result = await Employee.deleteMany({"lastCompany": "Y"});

        console.log("Succesfully updated with salary", result);
    } catch (e) {
        console.error("error", e)
    }
}

module.exports = { deleteWithLastCompany}