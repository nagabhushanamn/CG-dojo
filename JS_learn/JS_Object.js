/**
 * New node file
 */

// var person={name:'Nag'};
// Property Existence
// if(person.name){
// console.log('name property exist');
// }
//
// if("name" in person){
// console.log('name property exist');
// }

// -------------------------------------------------
//
// var person={name:'Nag',age:31};
//
// for(prop in person){
// console.log(prop+':'+person[prop]);
// }

// ---------------------------------------------------

/*
 * obj , can have 2 types of properties
 * 
 * a. data property b. accessor property
 * 
 */
//
//var person = {
//	
//	_name : 'Naga',
//	
//	set name(newName){
//		console.log('setting new Name');
//		this._name=newName;
//	},
//	
//	get name(){
//		console.log('getting  Name');
//		return this._name;
//	}
//		
//};

//
//console.log(person._name);
//person._name = 'New Nag';
//console.log(person._name);

//console.log(person.name);   // READ
//
//person.name='New Nag';      // WRITE
//
//console.log(person.name);   // READ
//
//
//

//-------------------------------------------------------



//var person={name:'Naga'};

//Object.defineProperty(person, 'name', {configurable:false});
//delete person.name;

//Object.defineProperty(person, 'name', {configurable:false,writable:false});
//person.name='Nil';
//
//console.log(person.name);

//---------------------------------------------------------


//var person={name:'Naga',age:31};

//Object.preventExtensions(person);
//Object.seal(obj);
//Object.freeze(obj);


//--------------------------------------------------------------



















