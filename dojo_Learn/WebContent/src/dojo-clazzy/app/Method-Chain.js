/**
 * 
 */

define(['dojo/_base/declare'],function(declare){
	
	var Parent=declare([],{
		'-chains-':{
			init:'after',
			destroy:'before'
		},
		init:function(){
			console.log('Parent.init()');
		},
		destroy:function(){
			console.log('Parent.destroy');
		}
	});

	var Child=declare([Parent],{
		init:function(){
			//this.inherited(arguments);
			console.log('Child.init()');
		},
		destroy:function(){
			console.log('Child.destroy');
			//this.inherited(arguments);
		}
	});
	
	var Child2=declare([Child],{
		init:function(){
			console.log('Child2.init()');
		},
		destroy:function(){
			console.log('Child2.destroy');
		}
	});
	
	var child=new Child2();
	child.init();
	
	
	child.destroy();
	
	
});