Array.prototype.flatten = function(){
	if(!Array.isArray(this))
		return this;

	var flatArr = [];

	this.forEach(function cb(val){
		if(Array.isArray(val))
			val.forEach(cb);
		else
			flatArr.push(val);
	});

	return flatArr;

}
