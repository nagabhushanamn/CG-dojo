/**
 * 
 */

define([ 'dojo/_base/declare' ], function(declare) {

	var VannilaSoftServ = declare([], {
		constructor : function() {
			console.log('vaniila Soft-Serv');
		}
	});

	var CookieDoughMixin = declare([], {
		constructor : function() {
			console.log('cooie-dough');
		}
	});

	var OreoMixin = declare([], {
		constructor : function() {
			console.log('oreo-mixin');
		}
	});

	var IceCream = declare([ VannilaSoftServ, CookieDoughMixin, OreoMixin ], {
		constructor : function() {
			console.log('Icrea cream');
		}
	});

	return IceCream;

});