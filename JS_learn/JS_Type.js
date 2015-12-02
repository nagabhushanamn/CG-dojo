/**
 * New node file
 */

// JS - Types
// --------------
// 1. Primitives

// a. string type
//
// var name="Naga";
// var selection='a';
//
// console.log(typeof name);
// console.log(typeof selection);

// --------------------------------------------

// b. Number
//
// var count=5;
// var cost=12.12;
//
// console.log(typeof cost);

// ---------------------------------------------
// c. Boolean
// var found=false;
/*
 * IN JS , falsy values
 * 
 * false,null,undefined,"",0
 * 
 */

// console.log(typeof found);
// -----------------------------------------------
// d. udefined
// var v;
// console.log(typeof v);

// --------------------------------------------------

// e. Null
//
// var objVar=null;
// console.log(typeof objVar);
//
// console.log(objVar===null);

// console.log(undefined===null);
// console.log("5"==5);
// console.log("5"===5);
// -----------------------------------------------------

// var v=false;
// if(v){
// console.log('TRUE');
// }else{
// console.log('FALSE');
// }
//

// -----------------------------------------------------

// ReferenceTypes
//
// var o=new Object();
// o.name='Naga';
// o.age=31;
// o.doWork=function(){
// console.log('Teaching JS');
// };
// 
// console.log(o.name);
// o.doWork();
// 
// delete o.age;
// 
// console.log(o.age);
//

// ------------------------------------------------

// How to access JS-Object's propeties
/*
 * 2-ways
 * 
 * 1. '.' notation 2. '[]' notation
 * 
 * 
 */

// var person=new Object();
// person.name='Naga';
// person['full-name']='Naga N';
//
// console.log(person.name);
// console.log(person['name']);
// console.log(person['full-name']);
//
//
// ----------------------------------------------------

/*
 * Some built-in Types
 * 
 * 
 * 1. Object 2. Array 3. RegExp 4. Function
 * 
 */

// 1. Object
// new CF()
// var person=new Object();
// person.name='Naga';
// person.age=31;
// person.doWork=function(){
// console.log('Teaching JS');
// }

// Literal style
// var newPerson={
// name:'Naga',
// 'full-name':'Naga N',
// age:31,
// doWork:function(){
// console.log('Teaching JS');
// }
// };

// ----------------------------------------------

// Array
// new CF()
// var colors=new Array();
// colors[0]='Red';
// colors[1]='Green';
// colors[2]='Blue';
// Litral style
// var newColors=["Red","Green",'Blue'];
// ----------------------------------------------

// RegExp
// New CF()
// var re=new RegExp('\\d');
// console.log(re.test("fgdfg"));

// Literal style
// var newRe=/\d/;
// console.log(newRe.test("23424"));

// ------------------------------------------------------------

// Function

// new CF();

//var add = new Function("n1", "n2", "var result=n1+n2;return result;");
//console.log(add(12, 13));
//
//// literal style
//
//function newAdd(n1, n2) {
//	var result = n1 + n2;
//	return result;
//}
//
//console.log(newAdd(12,13));
//
//
//







