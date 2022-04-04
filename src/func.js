/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new-wrappers */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-new-object */
const cody = new Object()
cody.living = true
cody.age = 33
cody.gender = 'male'
cody.getGender = 'male'
cody.getGender = function () { return cody.gender }
console.log(cody.getGender())

const myObject = new Object();
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

const myString = new String('foo');
console.log(myString);

const Person = function (living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function () { return this.gender; };
};
const smith = new Person(true, 33, 'male');
console.log(smith);

const myNumber = new Number(23);
const myString = new String('male');
const Boolean = new Boolean('false');

