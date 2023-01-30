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
        job: {
            Department: ['sale','shipping'],
        }

},
{
    person2: {
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
    job: {
        Department: ['marketing','shipping'],
    }
},
{
    person3: {
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
    job: {
        Department: ['finance','development'],
    }
},
{
    person4: {
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
    job: {
        Department: ['design','support'],
    }
},
{
    person5: {
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
    job: {
        Department: ['human resources','sales'],
    }
},
{
    person6: {
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
    job: {
        Department: ['operations','marketing'],
    }
},
{
    person7: {
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
    job: {
        Department: ['support','human resources'],
    }
},
{
    person8: {
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
    job: {
        Department: ['Development', 'Testing'],
    }
    
},
{
    person9: {
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
    job: {
        Department: ['HR', 'Administration'],
    }
},
{
    person10: {
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
    job: {
        Department: ['marketing', 'administration']
    }
}

]