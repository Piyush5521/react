// enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize);


// function calculateTax(income: number, taxYear = 2022) : number {
//     if (taxYear < 2022)
//         return income * 1.2;
//     return income * 1.3;
// } 

// calculateTax(10_000, 2023);

// case 1
// let employee: {
//     id: number,
//     name?:string        // ? ---> optional
// } = {id: 1};
// employee.name = 'Test2'; 


// // case2
// let employees: {
//     id: number,
//     name?:string
// } = {id: 1};
// employees.name = 'Test2';


// let employeess: {
//     readonly id: number,
//     name:string        // ? ---> optional
// } = {id: 1, name: ''};
// employeess.name = 'Test2'; 
// employeess.id = 0;


type Student = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let student: Student = {
    id: 1,
    name: 'Testing',
    retire: (date: Date) => {
        console.log(date);
    }
}
