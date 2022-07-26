var nearestValidPoint = function (x, y, points) {
	// use pythagorean, without sqrt
	let distance = Math.abs(x - points[0][0]) + Math.abs(y - points[0][1]);
	let nearestPoint = -1;
	let nearest = 10000;

	for (let i = 0; i < points.length; i++) {
		if (points[i][0] === x || points[i][1] === y) {
			let test = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);
			if (test < nearest) {
				nearest = test;
				nearestPoint = i;
			}
		}
	}
	return nearestPoint;
};

const numX = 3;
const numY = 4;
const arr = [[2,3]];
console.log(nearestValidPoint(numX, numY, arr));

/*
3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]] = 2
3, 4, [[3,4]] = 0
3, 4, [[2,3]] = -1
*/
