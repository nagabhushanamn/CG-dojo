/**
 * 
 */

define([ 'dojo/_base/declare', 'dojo/_base/lang', 'app/Employee' ],

function(declare, lang, Employee) {

	var Boss = declare([ Employee ], {

		constructor : function(cArgs) {
			console.log('Boss.constructor invoked...');
			lang.mixin(this, cArgs);
		},
		askForRaise : function() {
			return this.salary * 0.2 + this.inherited(arguments);
		}

	});

	return Boss;

});