abstract class Department {
    constructor(public name: string) { }
    abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing");
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let d: Department;
const accountingDepartment = new AccountingDepartment();
d = accountingDepartment;

d.printMeeting();
accountingDepartment.generateReports();
// Uncommenting the line below will result in a compilation error
// d.generateReports();
