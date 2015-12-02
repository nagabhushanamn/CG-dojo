/**
 * 
 */

define([ 'dojo/_base/declare' ,'dojo/_base/lang'], function(declare,lang) {

	var Person = declare([], {

		name:'Anonymous',
		age : 0,
		address:'universe',
		
		constructor : function(cArgs) {
			console.log('Person.constructor invoked...');
			// this.name = name;
			// this.age = age;
			// this.address = address;
			lang.mixin(this,cArgs);
		}

	});

	return Person;

});