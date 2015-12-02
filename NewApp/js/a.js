
(function() {
	
	var v=100;
	
	myApp.b.doWork();
	
	var mod = {
		doWork : function() {
			console.log('A-Module Work');
		}
	};
	
	myApp.a=mod;
	
})();
