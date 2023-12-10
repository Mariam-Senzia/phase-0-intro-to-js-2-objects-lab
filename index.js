 //Write your solution in this file!
const employee = {
    name : "Mariee",
    streetAddress: "00342",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...updateEmployeeWithKeyAndValue.employee , "name": "Sam","streetAddress": "11 Broadway"};
    newObj[key] = value;
    return newObj 
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    const newObj2 = {...employee, key}
    delete newObj2[key]
    return newObj2
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
};
