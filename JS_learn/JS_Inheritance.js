/**
 * New node file
 */

function Person(name, age) {
	this.name = name;
	this.age = age;
}
//
//Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//};
//
var p1 = new Person('Nag', 31);
//var p1000 = new Person('Riya', 0.6);
//p1.sayName();
//p1000.sayName();



//-----------------------------------------------------------

var p11=Object.create(p1);
//console.log(p1.name);
//p11.name='New nag';
//console.log(p1.name);


//-------------------------------------

p21={__proto__:p1};



p21.name='NNNN';

p1.name='Naga';

console.log(p21.name);










