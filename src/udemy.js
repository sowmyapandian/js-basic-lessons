//let a = 10;
/* b = 5;
c = a+b;
console.log("c", c);
name = "sowmi";
age = 21;
// console.log("hi " + name + ", your age is" + age);
var f;
const d = 35;
f = (d * 1.8) + 32;
console.log("the farenheit is " , f);
console.log(`hello ${name} , your age is ${age} and degree is ${f}`);*/
/*const a = 5;
if(a>0)
console.log("a is positive ",a);
else
console.log("a is negative ",a);*/
/*console.log('Prime number or not');
let n = 9;
var flag;
for (i = 2; i < n; i++) {
  if (n % i == 0) {
    flag=1;
    break;
  }
 } 
 if(flag==1)
 {
     console.log(" not prime",n);
 }
else{
    console.log("prime",n);
}*/
/*function sum(a,b){
    if(a==b)
    console.log(a+a+a);
    else
    console.log(a+b);
}
var a=5;
var b=5;
sum(a,b);*/

// function fact(n){
//     if (n==1)
//   {
//     return 1;
//   }
//   else 
//   {
//     return fact(n-1)*n;
//   }
// }
// console.log(fact(5));
// function  sayhello()
// {
//   console.log("hello");
// }
// function  saybye()
// {
//   console.log("bye");
// }
// sayhello();
// setTimeout(saybye,1000)
function sayhello()
{
  console.log('hey sowmi,you are doing great');
}
let myInterval=setInterval(sayhello,1000);
function stopInterval()
{
  clearInterval(myInterval);
}
setTimeout(stopInterval,2000);