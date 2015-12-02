/**
 * 
 */

define([ 'app/HelloDialog','dojo/dom','dojo/on' ],
		
		function(HelloDialog,dom,on) {

			var app={};
			app.dialog = new HelloDialog();
			
			
			on(dom.byId('helloBtn'),'click',function(){
				
				app.dialog.show();
		
				setTimeout(function() {
					app.dialog.hide();
				}, 5000);
		
			});
			
			
	   });