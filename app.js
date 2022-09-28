// Person constructor

// function Person(name, dob){
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// const kareem = new Person('kareem',30);
// const keoki = new Person('keoki', 31);

// console.log(keoki.age);

// const kareem = new Person('Kareem', '10-08-1990');
// console.log(kareem.calcAge());

// ------------------------------------------------------------------------ //

// // String
// const name1 = 'jeff';
// const name2 = new String('Jeff');

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// // Function
// const getSum1 = function(x,y){
//   return x + y;
// }
// const getSum2 = new Function('x','y', 'return 1 + 1');

// // Object
// const kareem = {name: 'Kareem'};
// const kareem2 = new Object({name: 'Kareem'});

// // Array
// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// // Regular Expression
// const re1= /\w+/;
// const re2 = new RegExp('\\w+');

// ------------------------------------------------------------------------ //

// Prototypes

// function Person(fname,lname,dob){
//   this.fname = fname;
//   this.lname = lname;
//   this.birthday = new Date(dob);
//   // this.calcAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// // calc age
// Person.prototype.calcAge = function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // get full name
// Person.prototype.getFullName = function(){
//   return `${this.fname} ${this.lname}`;
// }

// // gets married
// Person.prototype.getsMarried = function(newLastName){
//   this.lname = newLastName;
// }

// const kareem = new Person('Kareem', 'Gourdine', '10-08-1990');
// const keoki = new Person('Keoki', 'Park', '12-13-1987');

// console.log(keoki);
// console.log(kareem.calcAge());

// keoki.getsMarried('Chicken');
// console.log(keoki.getFullName());

// console.log(keoki.hasOwnProperty('fname'));
// console.log(keoki.hasOwnProperty('getFullName'));

// ------------------------------------------------------------------------ //

// // Prototype Inheritance

// function Person(fname, lname){
//   this.fname = fname;
//   this.lname = lname;
// }

// // greeting
// Person.prototype.greeting = function(){
//   return `Hello ${this.fname} ${this.lname}!`;
// }

// const person1 = new Person('Kareem', 'Gourdine');

// console.log(person1.greeting());

// // Customer constructor
// function Customer(fname, lname, phone, member){
//   Person.call(this, fname, lname);
//   this.phone = phone;
//   this.member = member;
// }

// // Inherit Person prototype
// Customer.prototype = Object.create(Person.prototype);
// // customer.prototype return Customer() constructor
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Keoki', 'Park', '281-330-8004', 'Loyal');

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function (){
//   return `Hello ${this.fname} ${this.lname}! Welcome to our company`;
// }
// console.log(customer1.greeting());

// ------------------------------------------------------------------------ //

// const personPrototypes = {
//   greeting: function(){
//     return `Hello ${this.fname} ${this.lname}`;
//   },
//   getsMarried: function(newLname){
//     this.lname = newLname;
//   }
// }

// const max = Object.create(personPrototypes);
// max.fname = 'Max';
// max.lname = 'Smith';
// max.age = 33;

// max.getsMarried('chicken')
// console.log(max.greeting());

// const brett = Object.create(personPrototypes, {
//   fname: {value: 'brett'},
//   lname: {value: 'williams'},
//   age: {value: 37}
// });

// console.log(brett);
// console.log(brett.greeting());

// ------------------------------------------------------------------------ //

// Classes

// class Person {
//   constructor(fname, lname, dob) {
//     this.fname = fname;
//     this.lname = lname;
//     this.birthday = new Date(dob);
//   }

//   greeting(){
//     return `Hello ${this.fname} ${this.lname}`
//   }

//   calcAge(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()- 1970);
//   }

//   getsMarried(newLname){
//     this.lname = newLname;
//   }

//   static addNumbers(x,y){return x + y}
// }


// const mary = new Person('Keoki', 'Park', '11-13-1980');
// mary.getsMarried('chicken');
// console.log(Person.addNumbers(1,2));

// ------------------------------------------------------------------------ //

// Sub Classes Ingeritance ES6

// class Person {
//   constructor(fname, lname) {
//     this.fname = fname;
//     this.lname = lname;
//   }
//     greeting() { return `Hello ${this.fname} ${this.lname}`  }
//   }

// class Customer extends Person {
//   constructor(fname,lname,phone,member){
//     super(fname, lname);
//     this.phone = phone;
//     this.member = member;
//   }

//   static getMemberCost(){
//     return 500;
//   }
// }

// const bill = new Customer('Bill', 'Bob','281-330-8004','loyal');

// ------------------------------------------------------------------------ //

// Callback Functions

// const posts = [{title: 'Post One', body: 'This is post one'},
// {title: 'Post two', body: 'This is post two'}];

// function createPost(post){
//   setTimeout(function(){
//     posts.push(posts);
//   },2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     })
//     document.body.innerHTML = output;
//   },1000)
// }

// createPost({title: 'Post three', body: 'THis is post three'});

// getPosts();

// function createPost(post, callback){
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   },2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   },1000);
// }

// createPost({title: 'Post three', body: 'This is post three'}, getPosts);

// ------------------------------------------------------------------------ //

// ES6 Promises

// const posts = [{title: 'Post One', body: 'This is post one'},
// {title: 'Post two', body: 'This is post two'}];

// function createPost(post){
//   return new Promise(function(resovle, reject){
//     setTimeout(function(){
//       posts.push(post);
//       let error = false; // mimic error to test

//       if(!error){
//         resovle();
//       }else{
//         reject('ERROR: Something went wrong');
//       }
//     },2000);
//   })

// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   },1000);
// }

// createPost({title: 'Post three', body: 'This is post three'})
// .then(getPosts)
// .catch(function(err){
//   console.log(err);
// });


// ------------------------------------------------------------------------ //

// Arrow Functions

// const sayHello = function(){
//   console.log('Hello');
// }

// // one-line function/returns
// const sayHello = () => console.log('Hello');
// const sayHello = () => 'Hello'

// // return obj
// const sayHello = () => ({msg: 'Hello'})

//  sinlge / multiple para
// const sayHello = name => console.log(`Hello ${name}`);
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('chicken', 'kool-aid');

// callback functions
// const users = ['bob', 'bill', 'ned'];
// const nameLengths = users.map(function(name){
//   return name.length;
// });

// // const nameLengths = users.map(name => name.length);

// console.log(nameLengths);

// ------------------------------------------------------------------------ //



// ------------------------------------------------------------------------ //

// function Person(fname, lname, dob){
//   this.fname = fname;
//   this.lname = lname;
//   this.birthday = new Date(dob);
//   // this.calcAge = function () {
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// Person.prototype.calcAge = function () {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Person.prototype.getFullName = function(){
//   return ` ${this.fname} ${this.lname}`;
// }

// ------------------------------------------------------------------------ //

// function Person(fname, lname, dob){
//   this.fname = fname;
//   this.lname = lname;
// }

// Person.prototype.greeting = function name(params) {
//   return `Hello ${this.fname} ${this.lname}`;
// }

// const person1 = new Person('bob', 'todd');

// Costumer.prototype = Object.create(Person.prototype);
// Costumer.prototype.constructor = Costumer;

// function Costumer(fname, lname, phone, membership) {
//   Person.call(this,fname,lname);
//   this.phone = phone;
//   this.membership = membership;
// }

// const costumer1 = new Costumer('Bill','Smith','555-555-555', 'standard');

// console.log(costumer1.greeting());

// ------------------------------------------------------------------------ //

// class Person {
//   constructor(fname, lname){
//     this.fname = fname;
//     this.lname = lname;
//   }

//   greeting(){
//     return ` Hello there ${this.fname} ${this.lname}`;
//   }
// }

// const bill = new Person('Bill','Smith');

// class Customer extends Person {
//   constructor(fname, lname, phone, membership){
//     super(fname, lname);
//     this.phone = phone;
//     this.membership = membership;
//   }

//   static getMembershipCost(){
//     return 500;
//   }
// }

// const bob = new Customer('bob','bob','222-222-222','standard');
// console.log(bob.greeting());
// console.log(Customer.getMembershipCost());

// ------------------------------------------------------------------------ //

// const numbers = [1,2,3,4,5,6];
// const people = [
//   {name: 'lin', age: 38, gender: 'male'},
//   {name:'fem', age: 38, gender: 'male'},
//   {name:'mike', age: 31, gender: 'male'},
//   {name: 'jr', age: 33, gender: 'female'},
//   {name: 'mom', age: 49, gender: 'female'}
// ]

// // const even = numbers.filter( number =>  number % 2 === 0)
// const name = people.map( person => {
//   return person.name;
// })

// const overThirtyThree = people.filter( person => {
//   return person.age >= 33;
// })

// const female = people.filter( person => {return person.gender === 'female'}).map(person => person.name)
// //console.log(even);
// //console.log(name);
// // console.log(overThirtyThree);
// // console.log(female);

// const total = people.reduce((groupPeople, person) => {
//   const age = person.age;
//   if (groupPeople[age] == null) groupPeople[age] = [];
//   groupPeople[age].push(person);
//   return groupPeople
// }, {})

// console.log(total);

// ------------------------------------------------------------------------ //

// TRY AND CATCH

// const user = {email: 'jdoe@mail.com'}

// try {
//   //myFuncation();
//   //null.myFunction();
//   //eval('Hello world');
//   //decodeURIComponent('%');

//   if(!user.name){
//     //throw 'User has name';
//     throw new SyntaxError('User has no name');
//   }
// }
// catch(err) {
//   console.log(`User Error: ${err.message}`);
//   //console.log(err);
//   //console.log(err.message);
//   //console.log(err.name);
//   //console.log(err instanceof TypeError);
// }
// finally {
//   console.log('finally run reguardless of result');
// }

// console.log('program continues...');

// ------------------------------------------------------------------------ //

// REGULAR EXPRESSIONS

// let re;
// re = /hello/
// re = /hello/i; // i = case insensitive
//re = /hello/g; // global search

// console.log(re);
// console.log(re.source);

//exec() - return result in array or null
//const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() - return true or false
// const result = re.test('Hello');
// console.log(result);

//match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

//search() - return index of the first match if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

//replace() - return a new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi ');
// console.log(newStr);

// METACHARACTER SYMBOLS

// let re;
// // literal characters
// re = /hello/;
// re = /hello/i;

// // metacharacter symbols
// re = /^h/i;   //must start with
// re = /d$/i;   //must end with
// re = /^hello$/i;   //must begin & end with
// re = /h.llo/i;   //matches any ONE character
// re = /h*llo/i;   //matches any character 0 or more times
// re = /gre?a?y/i;   //optional character
// re = /gre?a?y\?/i;   //escape character

// // Brackets [] - Character Sets
// re = /gr[ae]y/i;    // must be a or e ( one or other )
// re = /[GF]ray/;    //  must be G or F 
// re = /[^GF]ray/i;    //  match anything except G or F 
// re = /[A-Z]ray/;    //  match any uppercase letter 
// re = /[a-z]ray/;    //  match any lowercase letter 
// re = /[A-Za-z]ray/;    //  match any letter 
// re = /[0-9]ray/;    // match any digit

// // Braces {} - Quantifiers
// re = /Hel{2}o/;   // must occur exactly {m} times
// re = /Hel{2,4}o/;   // must occur exactly {m,a} times
// re = /Hel{2,}o/;   // must occur atleast {m} times

// // Paretheses () - Grouping
// re = /^([0-9]x){3}$/   

// // Shorthand Character Classes
// re = /\w/;    // word characters - alphanumeric or _
// re = /\w+/;    // + = one or more
// re = /\W/;    // non-word characters
// re = /\d/;    // match any digit
// re = /\d+/;    // match any digit 1 or more 
// re = /\D/;    // match any non-digit
// re = /\s/;    // match whitespace character
// re = /\S/;    // match non-whitespace character
// re = /Hell\b/i;   // word boundary

// // Assertions
// re = /x(?=y)/;    // match x only if followed by a y
// re = /x(?!y)/;    // match x only if not followed by a y

// // string to match
// const str = 'fsdfsdfxydsda';
// // log results
// const result = re.exec(str);
// console.log(result);

// function reTest(re, str) {
//   if (re.test(str)){
//     console.log(`${str} matches ${re.source}`);
//   }
//   else {
//     console.log(`${str} does not match ${re.source}`);
//   }
// }

// reTest(re,str);

// ------------------------------------------------------------------------ //

// ITERATORS

// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length ?
//       { value: names[nextIndex++], done: false } :
//       { done: true }
//     }
//   }
// }

// const namesArr = ['Jack', 'Jill', 'John'];
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// GENERATORS

// function* sayNames() {
//   yield 'Jack';
//   yield 'Jill';
//   yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID creator

// function* createIds(){
//   let index = 1;
//   while(true){
//     yield index++;
//   }
// }

// const gen = createIds();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// ------------------------------------------------------------------------ //

// SYMBOLS //

// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);


// ------------------------------------------------------------------------ //

// DECONSTRUCTURING //

//let a, b;
//[a,b] = [100, 200];

//const numbers = [1,2,3,4,5]

//const low = Math.min(...numbers);
//rest pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500]; 

// ({a,b} = {a:100, b:200, c:300, d:400, e:500});
// ({a,b,...rest} = {a:100, b:200, c:300, d:400, e:500});

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// const person = {
//   name: 'jim',
//   age: 32,
//   address: {
//     city: 'houston',
//     state: 'texas'
//   }
// }

// function printUser({name, age}) {
//   console.log(`Name is: ${name} Age is: ${age}`);
// }

// printUser(person);

// console.log(a,b);
// console.log(rest);
// console.log(low);

// ------------------------------------------------------------------------ //

// MAPS - KEY-VAULE pairs//

// const map1 = new Map();
// const numbers = [1,2,3,4,5];

// const key1 = 'some string',
//       key2 = {},
//       key3 = function () {};

// map1.set(key1, 'value of key1');
// map1.set(key2, 'value of key2');
// map1.set(key3, 'value of key3');

// // get value by key
// console.log(map1.get(key1));

// // size of map
// console.log(map1.size);

// get keys & value
// for (let [key, value] of map1){
//   console.log(`${key} = ${value}`);
// }

// only keys
// for (let key of map1.keys()){
//   console.log(key);
// }

// only values
// for (let value of map1.values()){
//   console.log(value);
// }

// forEach
// map1.forEach( (key, value) => {
//   console.log(`${key} = ${value}`);
// })

// // convert to array
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// // array of values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// // array of keys
// const keyArr = Array.from(map1.keys()); jbfsjdhfksjhk jhfkj shdf n
// console.log(keyArr);


// ------------------------------------------------------------------------ //

// SETS //

// const set1 = new Set();
// const set2 = new Set([1,true,'string']);

// //add values
// set1.add(100).add('string').add({name: 'john'}).add(true);

//get size
// console.log(set1.size);

// //check values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'john'})); // false

// //delete
// set1.delete(100)
// console.log(set1);

// // for ..of
// for(let item of set1){
//   console.log(item);
// }

// // forEach
// set1.forEach( (value) => {
//   console.log(value);
// })

//convert to array
// const setArr = Array.from(set1);
// console.log(setArr);

// async function getData() {
//   const url = 'https://pokeapi.co/api/v2/pokemon/ditto'
//   const response = await fetch(url)
//   const data = await response.json()
//   return data
// }

// getData().then(data => console.log(data)).catch( (error) => {console.error('errors: ' + error.message)} )

// const obj = {
//   'name': 'kareem',
//   'age': 31,
//   'gamer': 'yes'
// }

// for (const key in obj){
//   console.log(key +':' + obj[key]);
// }

// const arr = [ 1,3,4,5,5,4,2];
// const set = new Set(arr);

// set.add(6);
// console.log(set);

function Guy(fname, lname, age) {
  this.fname = fname,
  this.lname = lname
  this.age = age;
}

Guy.prototype.getFullName = function(){
  return `${this.fname} ${this.lname}`
}

const me = new Guy('kareem','gourdine',32);

//console.log(`${me.fname} ${me.lname} ${me.age}`);
console.log(me.getFullName());

class Person{
  constructor(fname,lname,age){
    this.fname = fname,
    this.lname = lname,
    this.age = age
  }

  getFullName() {
    return `${this.fname} ${this.lname}`;
  }
}

const keoki = new Person('keoki','park',32)

console.log(keoki.getFullName());
console.log(keoki);




// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //


// ------------------------------------------------------------------------ //

