Array.prototype.flatten = function(flatArr = []){
	while(this.length != 0){
		if(Array.isArray(this[0])){
			this[0].flatten(flatArr);
			this.splice(0, 1);
		}
		else{
			flatArr.push(this[0]);
			this.splice(0, 1);
		}
	}
	return flatArr;
}
