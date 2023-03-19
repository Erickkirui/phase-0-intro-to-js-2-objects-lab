// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress: '11 Broadway'
}

//update to new employee
function updateEmployeeWithKeyAndValue(employee, key, value){
const updatedEmployee = {... employee}
updatedEmployee[key] = value;
return updatedEmployee

}
//destructive update 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
//non destructive update 
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}
//delete employee
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
