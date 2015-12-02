define('js/a', ['js/b'], function(b) {

	b.doWork();
	//c.doWork();
	
	var mod = {
		doWork : function() {
			console.log('Module-A work');
		}
	};

	return mod;

});