/**
 * 
 */

define([ 'dojo/_base/declare' ], function(declare) {

	var A = declare([], {
		m1 : function() {this.inherited(arguments);console.log('A-old');},
		m2 : function() {this.inherited(arguments);console.log('A-old');}
	});
	var B = declare([], {
		m2 : function() {this.inherited(arguments);console.log('B-old');},
		m3 : function() {this.inherited(arguments);console.log('B-old');}
	});
	var C = declare([], {
		m3 : function() {this.inherited(arguments);console.log('C-old');},
		m4 : function() {this.inherited(arguments);console.log('C-old');}
	});
	
	var ABC=declare([A,B,C],{});
	
	var abc=new ABC();
	
	//abc.m1();  A-old
	//abc.m2();  A-old,B-old
	//abc.m3();  B-old,C-old
	//abc.m4();  C-old
	
	
	A.extend({
		m1 : function() {this.inherited(arguments);console.log('A-new');},
		m2 : function() {this.inherited(arguments);console.log('A-new');}
	});
	B.extend({
		m2 : function() {this.inherited(arguments);console.log('B-new');},
		m3 : function() {this.inherited(arguments);console.log('B-new');}
	});
	
	C.extend({
		m3 : function() {this.inherited(arguments);console.log('C-new');},
		m4 : function() {this.inherited(arguments);console.log('C-new');}
	});
	
	//abc.m1();    //A-new
	//abc.m2();    //A-new,B-old
	//abc.m3();    //B-new,C-old
	abc.m4()       //C-old 

});





