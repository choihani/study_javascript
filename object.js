// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

/*
const name = 'ellie';
const age = 4;
priint(name, age);
function print(name, age){
    console.log(name);
    console.log(age);
}
*/

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj = new Object(); // 'object constructor' syntax => 'new' 라는 키워드로 객체를 생성하면

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true; //자바스크립트는 Runtime(프로그램이 동작하고 있을때)때 동적으로 타입이 결정됨. 따라서 후에 뒤늦게 하나의 변수를 추가 가능
console.log(ellie.hasJob);

delete ellie.hasJob; //뒤늦게 삭제도 가능
console.log(ellie.hasJob); //undefined

// 2. Computed properties
// Key should be always string
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key){
    console.log(obj[key]); //Computed properties를 쓰는 이유
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = { name: ''};

// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check ( key in obj)
console.log('name' in ellie); //true
console.log('age' in ellie);
console.log('random' in ellie); //false
console.log(ellie.random); //undefined

// 6. for..in vs for..of
// for (key on obj)
console.clear();
for(key in ellie){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for(value of array){
    console.log(value); // 배열의 값이 출력
}

for(key in array){
    console.log(key); // 배열의 인덱스가 출력
}

// 7. fun cloning
// Object.assign(dest, [obj1, obj2, obj3 ...])
const user = { name:'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);


