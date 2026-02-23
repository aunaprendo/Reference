function primeTest(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const smallestCommons = (array) => {
	let min = Math.min(...array);
	let max = Math.max(...array);
	
	let span = [];
	for (let i = min; i <= max; i++) {
		span.push(i);
	}
	
	const primeTree = [];
	span.forEach((num) => {
	if (primeTest(num) === true) {
		primeTree.push(num)
	} else if (num % 2 ===0) {
		
	}
	});
	return primeTree;
}

console.log(smallestCommons([1, 5]));


2 y
3 y
4
5 y
6
7 y
8
9
10

	const primeTree = [];
	span.forEach((num) => {
	if (primeTest(num) === true) {
		primeTree.push(num)
	}
	});
	return primeTree;
}
