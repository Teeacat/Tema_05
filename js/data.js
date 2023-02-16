/*
//Data type
const box = 'string'; //<---Når det står med '' så er det en string.

const age = 345; // dette er nummer

const isLogIn = true // false, boolean

let firstName;
console.log(firstName);// undefined

let secondName = null;
console.log(secondName);// Null

//Arrays (starter alltid på 0)

const names= ['Thomas', 'Lise', 'Maria', 'Mario', 'Tor'];
names.push('Eivind');

console.log(names.length);

//------------------------------------------------------//

// OBJECTS //

const person = {
    firstName: 'Thomas',
    lastName: 'Johansen',
    age: 23,
    hobbies: ['sport', 'gaming', 'travel'],
    gender: 'male',
    isWorking: true,
}                            // <-----objects are presented by curly braces.

*/

const employees = [
    {
        person: {
            firstName:'Janne',
            lastName:'Eriksson',
            Age:'28',
            Nationality:'France',
            Dob:'2001-01-24',
        },
        address: {
            Street: 'monogata 5',
            Zipcode:'0249',
            City:'Bergen',

        },
        Department: ['sale','shipping'],

        email:'janne1234@gmail.com'

    },
    {
        person: {
            firstName:'Liam',
            lastName:'Smith',
            Age:'32',
            Nationality:'Germany',
            Dob:'1995-06-12',
        },
        address: {
            Street: 'chrisdalsveien 8',
            Zipcode:'0174',
            City:'Oslo',
        },
        Department: ['marketing','shipping'],
        email:'liam567@yahoo.com'
    },
    {
        person: {
            firstName:'Emma',
            lastName:'Johnson',
            Age:'25',
            Nationality:'Norway',
            Dob:'1997-03-22',
        },
        address: {
            Street: 'tordenskiolds gate 9',
            Zipcode:'0252',
            City:'Stockholm',
        },
        Department: ['finance','development'],
        email:'emma99@hotmail.com'
    },
    {
        person: {
            firstName:'Noah',
            lastName:'Williams',
            Age:'29',
            Nationality:'Sweden',
            Dob:'1993-05-17',
        },
        address: {
            Street: 'storgata 11',
            Zipcode:'0255',
            City:'Copenhagen',
        },
        Department: ['design','support'],
        email:'noah4321@outlook.com'
    },
    {
        person: {
            firstName:'Ava',
            lastName:'Jones',
            Age:'31',
            Nationality:'Denmark',
            Dob:'1992-07-14',
        },
        address: {
            Street: 'bronseveien 15',
            Zipcode:'0247',
            City:'Berlin',
        },
        Department: ['human resources','sales'],
        email:'ava7890@aol.com'
    },
    {
        person: {
            firstName:'Oliver',
            lastName:'Brown',
            Age:'26',
            Nationality:'Finland',
            Dob:'1996-09-18',
        },
        address: {
            Street: 'jernbaneveien 17',
            Zipcode:'0241',
            City:'Helsinki',
        },
        Department: ['operations','marketing'],
        email:'oliver1111@gmail.com'
    },
    {
        person: {
            firstName:'Isabella',
            lastName:'Davis',
            Age:'27',
            Nationality:'Iceland',
            Dob:'1994-11-15',
        },
        address: {
            Street: 'vegeneset 19',
            Zipcode:'0243',
            City:'Reykjavik',
        },
        Department: ['support','human resources'],
        email:'isabella888@hotmail.com'
    },
    {
        person: {
            firstName: 'Nina',
            lastName: 'Martinez',
            Age: '27',
            Nationality: 'France',
            Dob: '1996-12-07',
        },
        address: {
            Street: 'Happy Place 8',
            Zipcode: '0413',
            City: 'Paris',
        },
        Department: ['Development', 'Testing'],
        email:'nina2222@yahoo.com'
        
    },
    {
        person: {
            firstName: 'Pepe',
            lastName: 'Anderson',
            Age: '30',
            Nationality: 'United Kingdom',
            Dob: '1993-07-15',
        },
        address: {
            Street: 'Bright Avenue 7',
            Zipcode: '0235',
            City: 'Manchester',
        },
        Department: ['HR', 'Administration'],
        email:'pepe3456@outlook.com'
    },
    {
        person: {
            firstName: 'Turid',
            lastName: 'Smith',
            Age: '32',
            Nationality: 'Sweden',
            Dob: '1987-07-17'
        },
        address: {
            Street: 'Victoria Ave',
            Zipcode: '1115',
            City: 'Oslo'
        },
        Department: ['marketing', 'administration'],
        email:'kimmy6789@aol.com'
    }

    ]

const bodyElement=document.querySelector('body');
const ulElement=document.createElement('ul');

    employees.forEach(employee => {
        const liElement = document.createElement('li');
        liElement.textContent=`
        ${employee.person.firstName}
        ${employee.person.lastName}
        (${employee.Department[0]}) email: ${employee.email}
        `;
    
    ulElement.appendChild(liElement);

    });

    bodyElement.appendChild(ulElement);


   //-----------------------------------------------------------------------//
//MAP
const employeeEmails = employees.map(person =>{
    return {
        Email: person.email,
        DOB: person.dob
    }
})

console.log(employeeEmails);

//filter

const nationalityEmployees = employees.filter(employee =>{
    return employee.person.Nationality === 'Norway';
});

console.log(nationalityEmployees)