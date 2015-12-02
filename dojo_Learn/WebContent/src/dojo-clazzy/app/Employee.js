/**
 * 
 */

define([ 'dojo/_base/declare' ,
         'dojo/_base/lang',
         'app/Person'],

        function(declare,lang,Person) {
	
			var Employee=declare([Person],{
				
				salary:0,
				
				constructor:function(cArgs){
					console.log('Employee.constructor invoked...');
					lang.mixin(this,cArgs);
				},
				askForRaise:function(){
					return this.salary*.02;
				}
				
			});
			
			return Employee;
			
		
	});
