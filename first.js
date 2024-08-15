// console is used here to print anyhing,and same that is used inside the browser also actually console is not a feature of javascript,this is the feature of eiether webbrowser or nodejs.
// console.log("hello")
let age=14
// if(age>18){
//     console.log("You can drive")
//     console.log("I am second line.")
// }

// else{
//     console.log("You cant")
//     console.log("But u will")
// }

// if(age===14) console.log("Matched") //here everything is checked like value with dtype
// age='14'
// if(age==14) console.log("Matched")//but here only value is checked not the dtype.

// for(let i=0;i<=10;i++) console.log(i)
// const arr=[1,2,3,4,5,6]
// console.log(arr)

// in javascript u can import the code that has been present in the another file which was start with export.
// import {x} from './values_to_be_exported' this is no the right way.
// const obj=require('./values_to_be_exported')

// console.log("the value of name  is :- ",obj.Name)
// console.log("the value of age is :- ",obj.age)


// const arr=[1,2,3,4,5,6,7,8,9,10]
// const new_arr=arr.filter((elem)=>
// {
//     if(elem%2==0) return elem
// })
// console.log("All the even numbers:- ",new_arr)

// in javacript there are modules are there one is core module and another one is external module, in core module one is global module and another one is non global module, for example like console  this is gloval module u can directly use it ,but there is a function in js through which u can create a file but that will be non gloval so for that u need to import.
// const fs=require("fs");
// fs.writeFileSync("new_one.txt","in javacript there are modules are there one is core module and another one is external module, in core module one is global module and another one is non global module, for example like console  this is gloval module u can directly use it ,but there is a function in js through which u can create a file but that will be non gloval so for that u need to import.");
//to check directory name
// console.log("directory name:- ",__dirname)
// console.log("file name:- ",__filename)
// fs=require('fs')
// fs.writeFileSync("new_one2.py","print('hello world')")

//actually file system is a large module so when u r building a bigger application then it is prior that u have to use some specific function instead of total module.

new_fs=require('fs').writeFileSync
new_fs("p1.py","print('hello world')\nprint('chomu')")