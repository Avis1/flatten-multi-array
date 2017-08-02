Array.prototype.mergeArr = function(mergedArr = []){
	while(this.length != 0){
		if(Array.isArray(this[0])){
			this[0].mergeArr(mergedArr);
			this.splice(0, 1);
		}
		else{
			mergedArr.push(this[0]);
			this.splice(0, 1);
		}
	}
	return mergedArr;
}
