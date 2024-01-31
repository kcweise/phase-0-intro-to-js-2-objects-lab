// Write your solution in this file!
const employee = {"name":"Keenan", "streetAddress":"road"}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee;
}
const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    
    return employee
}
const twoEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam")

function deleteFromEmployeeByKey(employee, key){
    const bestEmployee = {...employee}
    delete bestEmployee[key]
    return bestEmployee
}
const bestEmployee = deleteFromEmployeeByKey(employee, "streetAddress")

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
const worstEmployee = destructivelyDeleteFromEmployeeByKey(employee, "Name")
