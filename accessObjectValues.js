const student = {
    name: 'Siam',
    age: 23
};
console.log(student.age);

let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitude: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
};
const result = data.location[0].city;
console.log(result);

const user = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'sincere@april.btz',
    address:{
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'dhaka',
        zipcode: 1200,
        geo:{
            lat: '-37.2342',
            lng: '81.1496'
        }
    },
    phone: '565324532',
    website: 'sdsf.com',
    company: {
        name: 'comapny-limited',
        catchPhrase: 'Multi layered client server',
        bs: 'harness real time'
    }
}

// email 
console.log(user.email);
//address
console.log(user.address);
//city
console.log(user.address.city);
console.log(user.address.geo.lat);
console.log(user.company.name);