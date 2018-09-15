function find(array, criteriaFn) {
  let current = array
  let next = []
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

function find(input, criteria) {
  for(element in input) {
    if (criteria(element)) {
		  return input[element];
  	} else if (Array.isArray(input[element]) || typeof input[element] == "object") {
      return find(input[element], criteria);
  	}
	return null;
  }
}