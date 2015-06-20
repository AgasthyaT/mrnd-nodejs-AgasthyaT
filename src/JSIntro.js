
exports.Sum = function(num1, num2){
	return num1+num2
}

exports.SumOfArray = function(arrayOfNums){
	sum=0;
	
	for (var i in arrayOfNums )
	{
		sum=sum+arrayOfNums[i];
	}
	return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function(arrayOfNums){
	var	sum=0;
	var dist=[];
	var i=0;
	for (i in arrayOfNums )
	{
		for(j=0;j<dist.length;j++)
		{
			if(arrayOfNums[i]==dist[j])
				break;
		}
		if(j==dist.length)
			dist.push(arrayOfNums[i])
		//if (arrayOfNums[i] in dist)
		//{
				
		//}
		//else
			//dist.push(arrayOfNums[i]);
	}
	var j=0;
	for (var j in dist )
	{
		sum=sum+dist[j];
	}
	return sum;
}

exports.ReverseString = function(str){
	var o='';
	var j=str.length;
	for(j=str.length-1;j>=0;j--)
		o+=str[j];
	return o;
}

exports.ReverseArrayOfStrings = function(arrayOfStrings){
var arr=[]
var i=0
for ( i=0;i<arrayOfStrings.length;i++)
{
	arr[i]=ReverseString(arrayOfStrings[i]);
}
return arr;
}