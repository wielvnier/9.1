var triangleArea1 = getTriangleArea(10, 15);

function getTriangleArea(a, h) {
	if (a <= 0 || h <= 0) {
	console.log('Nieprawidłowe dane')
	} else {
	return a*h/2;
	}
}

console.log(triangleArea1)
console.log( getTriangleArea(10,6) )

var triangleArea2 = getTriangleArea(4, 6);

console.log(triangleArea2);


var triangleArea3 = getTriangleArea(8, 12);

console.log(triangleArea3);
