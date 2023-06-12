// Solve Using Map Method:

let nums = [5, 10, 15, 20];

let result= nums.map(function(e){
	ans =e*2;
	if(ans>20){
		return (" "+ans+" ")
	}
	else{
		return (" "+undefined+" ")
	}
})
document.write(result)
