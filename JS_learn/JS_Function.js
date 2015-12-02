/**
 * New node file
 */

// Function declaration
// console.log(add(12,13));
//
// function add(n1, n2) {
// return n1 + n2;
// }
// console.log(add(12,13));
// ------------------------------------------
// Function Expression
// console.log(add(12,13));
// var add=function(n1,n2){return n1+n2};
// console.log(add(12,13));
// --------------------------------------------
// Function as values
// function sayHi(){
// console.log('Hi');
// }
//
// var sayHi2=sayHi;
// sayHi2();
// ---------------------------------------------
// Function as arguments
// function sayHi(greet) {
// greet();
// }
//
// sayHi(function(){console.log('Hi');});
// var nums=[1,3,5,7,9,2,4,6,8,9,10];
// nums.sort(function(a,b){return a-b;});
// console.log(nums);
// -------------------------------------------------
// Function as return values
//
// function tng(){
// console.log('tng...');
// return function(){
// console.log('learn..');
// };
// }
//
// var learnFunc=tng();
//
// learnFunc();
// ------------------------------------------------------
//
// function reflect(arg1){
// return arguments[0];
// }
//
// console.log(reflect());
//
//
//
// ---------------------------------------------------
// Hoisting --> Lifting-up
// var i=100; // Global scope
//
// function f(){
// //var i;
// console.log(i);
// var i=200; // function scope
// }
//
// f();
// --------------------------------------------------
// function f() {
//
// var i = 100;
//
// {
// var i = 200;
// }
//
// console.log(i);
// }
//
// f();

// ---------------------------------------------------

// How to use 'this' keyword ?

// --------------------------------------------------

// why we need 'this' keyword ?
// var name='G';
//
// var person={
// name:'Nag',
// sayName:function(){
// //var name='A';
// console.log('im '+this.name);
// }
// };
//
// //person.sayName();
//
// var newPerson=person;
// person={name:'Riya'};
//
//
// newPerson.sayName();


// ---------------------------------------------------
//
//function sayNameForAll(){
//	console.log('im '+this.name);
//}

//var p1={name:'Nag',sayName:function(){console.log('im '+this.name);}};
//var p2={name:'Riya',sayName:function(){console.log('im '+this.name);}};
//
//var p1={name:'Nag',sayName:sayNameForAll};
//var p2={name:'Riya',sayName:sayNameForAll};
//
//sayNameForAll(); // Function invocation pattern  ( this --> Global  )
//p1.sayName();    // Method invocation pattern    ( this --> invoker )
//p2.sayName();


//----------------------------------------------------------

//var greetUtil={
//	sayNameForAll:function(message,anotherMesasge){
//		console.log(message+' im '+this.name+" "+anotherMesasge);
//	}
//};
//
//var p1={name:'Nag'};
//var p2={name:'Riya'};

//greetUtil.sayNameForAll();
//
//greetUtil.sayNameForAll.call(p1,"Hello"," from Chennai");    // Function Binding Pattern. ( this --> binded obj )
//greetUtil.sayNameForAll.call(p2,"Hi" , " from Universe");


//greetUtil.sayNameForAll.apply(p1,["Hello"," from Chennai"]);    // Function Binding Pattern. ( this --> binded obj )
//greetUtil.sayNameForAll.apply(p2,["Hi" , " from Universe"]);


// Lazy Invoking 

//var newF=greetUtil.sayNameForAll.bind(p2,"Hi" , " from Universe");

// On greet-event
// newF();

//--------------------------------------------------------------


//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	this.sayName=function(){console.log('im '+this.name);};
//}
//
//
//var p1=new Person('Naga', 31); // Constructor invocation pattern ( this --> new Obj )
//var p2=new Person('Riya', 0.6);
//
//p1.sayName();
//p2.sayName();
//

//------------------------------------------------------------

//Person("Person", 10);  // Avoid calling like this.


//---------------------------------------------------------------



//var tnr={
//		name:'Nag',
//		doTeach:function(){
//			console.log(this.name+" teaching JS");
//			var self=this;
//			function learn(){
//				console.log('JS leaning from '+self.name);
//			}
////			learn.call(this);
//			learn();
//		}
//};
//
//tnr.doTeach();

//---------------------------------------------------------------



// JS Closure
//----------------



//function tng(){
//	
//	var notes='JS Notes';
//	
//	function learn(){
//		console.log('learn by '+notes);
//	}
//	
//	return learn;
//	
//}
//
//var learnFunc=tng();
//
//learnFunc();
//learnFunc();
//learnFunc();

//--------------------------------------------------------



















































