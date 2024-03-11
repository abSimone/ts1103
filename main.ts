interface Employee{
    salutation : string;
    lastname : string;
    firstname : string;
    department : string;
    salary: number;
    [key: string]: string | number;
}

const employees : Employee[] = [
    {
        salutation: "Mr.",
        lastname: "Lee",
        firstname: "John",
        department: "Sales",
        salary: 50000
    },
    {
        "salutation": "Ms.",
        "lastname": "Johnson",
        "firstname": "Emily",
        "department": "Marketing",
        "salary": 60000
    },
    {
        "salutation": "Dr.",
        "lastname": "Lee",
        "firstname": "David",
        "department": "Research",
        "salary": 70000
    },
    {
        "salutation": "Mrs.",
        "lastname": "Brown",
        "firstname": "Susan",
        "department": "Human Resources",
        "salary": 55000
    },
    {
        "salutation": "Mr.",
        "lastname": "Garcia",
        "firstname": "Jose",
        "department": "Finance",
        "salary": 65000
    },
    {
        "salutation": "Ms.",
        "lastname": "Martinez",
        "firstname": "Maria",
        "department": "Customer Service",
        "salary": 48000
    },
    {
        "salutation": "Dr.",
        "lastname": "Wang",
        "firstname": "Linda",
        "department": "Engineering",
        "salary": 75000
    },
    {
        "salutation": "Mr.",
        "lastname": "Kumar",
        "firstname": "Raj",
        "department": "IT",
        "salary": 72000
    },
    {
        "salutation": "Ms.",
        "lastname": "White",
        "firstname": "Jennifer",
        "department": "Public Relations",
        "salary": 58000
    },
    {
        "salutation": "Mr.",
        "lastname": "Nguyen",
        "firstname": "Michael",
        "department": "Operations",
        "salary": 60000
    }
];

function generateTable() :void {
    var section : HTMLTableRowElement | null = document.querySelector("tr:last-child");

    for (let i = 0; i < employees.length; i++) {
        section!.insertAdjacentHTML("afterend", `<tr></tr>`);
        section = document.querySelector("tr:last-child");
        for (let key in employees[i]) {
            section!.insertAdjacentHTML("beforeend", `<td> ${employees[i][key]} </td>`);
            console.log("ciao");
        }
    }
}

generateTable(); 

var tab = document.querySelector("#tab");
function orderByLastname() :void{
    tab!.innerHTML = `<table id= "tab" class="table table-primary table-bordered table-striped">
                                        <tr>
                            <th> salutation </th>
                            <th> lastname </th>
                            <th> firstname </th>
                            <th> departemnt </th>
                            <th> salary </th>
        </tr>
    </table>
    `
    employees.sort;
    var section : HTMLTableRowElement | null = document.querySelector("tr:last-child");
    for (let i = 0; i < employees.length; i++) {
        section!.insertAdjacentHTML("afterend", `<tr></tr>`);
        section = document.querySelector("tr:last-child");
        for (let key in employees[i]) {
            section!.insertAdjacentHTML("beforeend", `<td> ${employees[i][key]} </td>`);
        }
    }
}

orderByLastname();
