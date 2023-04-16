// Problem 1
const sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
};

const mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
};

const bill = {
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
};

console.log(JSON.stringify(sam));
console.log(JSON.stringify(mary));
console.log(JSON.stringify(bill));



console.log("Problem 1")


// Problem 2
const techStarsEmployees = [sam, mary, bill];

const techStars = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: techStarsEmployees,
};


console.log(JSON.stringify(techStars));
console.log("Problem 2")

// Problem 3
const anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false,
};

techStars.employees.push(anna);


console.log(JSON.stringify(techStars));

console.log("Problem 3")

// Problem 4
let totalSalary = 0;
for (let i = 0; i < techStars.employees.length; i++) {
    totalSalary += techStars.employees[i].salary;
}


console.log(JSON.stringify(totalSalary));

// Problem 5
function giveRaise(employee) {
    if (employee.raiseEligible) {
    employee.salary *= 1.1;
    employee.raiseEligible = false;
    }
}

console.log("Problem 5")

techStars.employees.forEach(giveRaise);
console.log(JSON.stringify(techStars));

// Problem 6
const workingFromHome = ["Anna", "Sam"];

techStars.employees.forEach((employee) => {
    employee.wfh = workingFromHome.includes(employee.firstName);
    });

console.log(JSON.stringify(techStars));

console.log("Problem 6")

