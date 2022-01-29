console.log("this is a javascript functions tutorial");
function greet(name,greettext="Greetings from VS code")
{
    console.log(greettext + " " + name);
    console.log(name + " is a good girl/boy");
}
function sum(a,b,c)
{
    let d=a+b+c;
    return d;
}
let name="Aarchishya";
let name1="Aouli";
let name2="Vidhi";
let name3="Pranjal";
let greettext1="Good Morning";

greet(name,greettext1);
greet(name1,greettext1);
greet(name2,greettext1);
greet(name3);

let valreturn=sum(3,2,4);
console.log(valreturn);

// console.log(name + " is a good girl");
// console.log(name1 + " is a good girl");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good boy");
