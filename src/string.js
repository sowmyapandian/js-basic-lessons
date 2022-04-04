/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable quotes */
/* eslint-disable camelcase */

const my_name = 'NamefieldEmpty' // singlequotes
const middle = "gabbar" // double quote
const last = `singh`
console.log(my_name)
console.log(middle)
console.log(last)

const sentence1 = 'shes\'s so "cool"'
console.log(sentence1)
const sentence2 = "she's so cool"
console.log(sentence2)
const sentence3 = '\'she\'s so "cool"\''
console.log(sentence3)


// multi line string using single quotes

const song1 = `I like Kookie songs ang Jimins voice`;
console.log(song1);

const hello3 = 'hello my name is' + my_name + ". nice to meet you";
console.log(hello3);

const hello4 = `hello my name is  ${my_name} . nice to meet you. Iam ${1 + 100} years old`;
console.log(hello4); 


const html = `<div> <h2> ${my_name} </h2> <p> ${hello4} </p> </div>`;
console.log(html);
//document.body.innerHTML = html;

