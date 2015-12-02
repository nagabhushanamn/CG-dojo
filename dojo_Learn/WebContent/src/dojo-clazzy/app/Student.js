/**
 * 
 */

define([ 'dojo/_base/declare' ], function(declare) {

	var Student = declare([], {

		// instance var

		name : '',
		favFoods : null,
		//byeCount:0,
		
		constructor:function(){
			this.favFoods=[];
		},
		sayBye:function(){
			Student.byCount++;
			console.log(Student.byCount);
		}
	
	

	});
	
	Student.byCount=0;   // static var

	return Student;

});