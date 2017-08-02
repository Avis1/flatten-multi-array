Array.prototype.flatten = function(){

	var flatArr = [];

	this.forEach(function cb(val){
		if(Array.isArray(val))
			val.forEach(cb);
		else
			flatArr.push(val);
	});

	return flatArr;

}
