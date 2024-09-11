//data type and variable 
// we basically initiate vaible by let and cons 
let a=5;
a="this is satyam singh"
console.log("the men is",a);
let b=3;
b=Boolean(b);
console.log(b);
// loop in js
for(let i=0;i<=4;i+=2){
    console.log(i,"satyam");
}
// normal function expression
function sum(a, b){
    console.log(a+b); 
}
sum("ehdgswd",4);
// function decleration in variable and call by its name only
let result=function squre(number){
    return number*number;
}
console.log(result(3));
// nested function ka range internal function me hi hota hai mtlb if a function 
// is called inside a function then its effect will only seen inside the function only bahar usko call nhi kr skte


// arrow function 
()=>{

}
//callback-function: if any function is called as a parameter inside a another function then that parameter wala function is called as calback function;
 const calculate=(a,b,operation)=>{
    return operation(a,b); 
 }
 const operation=(a,b)=>{
 return a*b;}
 
  const s=calculate(2,4,operation);
 console.log(s);


 // callback hell:uses in asycronous function where there is settimeout or delay 
 function getCheese(data){
    setTimeout(() => {
        const cheese="🧀";
        console.log("here is the cheese",cheese);
        data(cheese);
    }, 3000);
 }

 // here data is a call back function which is use to recognise when we got the cheese after settimout
 getCheese((cheese)=>{
console.log("got the cheese",cheese);
 });



 //cheese->dough
 function getCheese(data){
    setTimeout(() => {
        const cheese="🧀";
        console.log("here is the cheese",cheese);
        data(cheese);
    }, 3000);
 }
 
 function getdough(cheese,data){
    setTimeout(() => {
        const dough=cheese+"🍩";
        console.log("here is the dough",dough);
        data(dough);
    }, 3000);
 } 
 getCheese((cheese)=>{
    getdough(cheese,(dough)=>{
        console.log("got the dough",dough);
});
   
    });
    //promises:to reduce multiple nested callback fumction in callback hell we use promises to handle asynchrous operation and see it is secsefully executed or not
 //prmises for norml function having no settimeout
 let ticket=new Promise(function(resolve,reject){
    const isboded=true;
    if(isboded){
        resolve("your seat is rryy4");
    }
    else{
        reject("your flight is canceeled");
    }
 }
);
ticket
.then((data)=>{
    console.log("youe flight is ready to depart ",  data);
})
.catch((data)=>{
    console.log("sorry for the inconvenient",  data);
})
.finally((data)=>{
    console.log("please visit again");
})
// promise call for asynxronous function having delay
// cheese wala hi dekte hai
function getcheese(){
    return new Promise(function (resolve,reject){
     setTimeout(()=>{
        const cheese="🧀";
        resolve(cheese);
     },4000);
    });
}
function getdough(cheese){
    return new Promise(function (resolve,reject){
     setTimeout(()=>{
        const dough=cheese+"🍩";
        resolve(dough);
     },4000);
    });
}

getcheese()
.then((cheese)=>{
    console.log("finally got  the cheese",cheese);
    return getdough(cheese);
})
.then((dough)=>{
    console.log("finally got the dough",dough);
})

.catch(()=>{
    console.log("some error found");
    
})
// await function is use instesd of .then(),.catch() in that case ek function phke clegga then dusra clegaa ek bar dekh lena video me

// in dom manuplation you can acess your html file throuh the js code and modify its property and also add html elements through js 
// for acessing element of html
//1.const box=document.getElementById('id use element ka jisko acess krna hai);
   //console.log(box);
  // 2. const box =document.getElementByClassName('class use element ka jisko acess krna hai);
 // 3.const box=document.getElementByTagName('id use element ka jisko acess krna hai);

 // modification in that acesed html elemnt
 // box.inner html             isse uska inner text ya proprty change hoga
 // box.style.backGroundcolor     isse uss element ka background colur change hogs
 //bo.clsssList.add('jo css proprty add krna hoga woh')
 // bos.clssList.remove('jo proprty remove krna hoga woh');

 // creating html through js jo mai html document me append ho jayeggaa
 // const newCreate=document.createElement('p'/'div');
// newCreate.innerText="this is new text";
// jaha is proprty ko dalna hai usko uper line me acess krke yaha.apppendChild(newCreate);



// event handling in js
// anuj bhaiya ka video dekh lena 