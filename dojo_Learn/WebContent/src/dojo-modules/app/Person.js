/**
 * 
 */

define([ 'dojo/_base/declare' ], function(declare) {

	var Person = declare([], {
		name : '',
		age : 0,
		sayName : function() {
			console.log('im ' + this.name);
		}
	});

	return Person;

});