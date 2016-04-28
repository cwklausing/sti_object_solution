var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

//Run iterateEmployees using the employees array
iterateEmployees(employees);

//Function to iterate over employees
function iterateEmployees(employeeArray) {
    for(var i = 0; i < employees.length; i++) {
        individualCalc(employeeArray[i]);
    }
}

//first step: Build function to calculate STI
function calculateSTI (eNum, salary, rating) {
    //defining a 'bonus' variable
    var bonus = 0;
    //bonus based on rating
    switch (rating) {
        case 0:
        case 1:
        case 2:
        case 3:
            bonus = 0.04;
            break;
        case 4:
            bonus = 0.06;
            break;
        case 5:
            bonus = 0.10;
            break;
        default:
            console.log("This isn't a number between 1 and 5");
    }

    //bonus based on seniority
    if(eNum.length == 4) {
        bonus += 0.05;
    }

    //bonus reduced by 1% if salary is over threshhold
    if(salary > 65000){
        bonus -= 0.01;
    }

    if(bonus > 0.13) {
        bonus = 0.13;
    }

    //return the value of bonus
    return bonus;
}

//Function to calculate values for each employee
function individualCalc (employee) {
    //Create Array
    var individualArray = [];

    //Define employee variables;
    var eName = employee[0];
    var eNumber = employee[1];
    var eSalary = Number(employee[2]);
    var eRating = employee[3];

    //Calculating new values
    var eSTI = calculateSTI(eNumber, eSalary, eRating);
    var eBonus = Math.round(eSTI * eSalary);
    var eCompensation = eBonus + eSalary;


    //Pushing all this to the new Array
    individualArray.push(eName, eSTI, eCompensation, eBonus);

    //logging the array
    console.log(individualArray);
}