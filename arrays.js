var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


var addElementToBeginningOfArray = (array, element) => {
  return [element, ...array];
}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  return array.unshift(element);
}

var addElementToEndOfArray = (array, element) => {
  return [...array, element];
}

var destructivelyAddElementToEndOfArray = (array, element) => {
  return array.push(element);
}

var destructivelyRemoveElementFromBeginningOfArray = (array) => {
  return array.shift();
}

var removeElementFromBeginningOfArray = (array) => {
  return array = array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = (array) => {
  return array.pop();
}

var removeElementFromEndOfArray = (array) => {
  return array = array.slice(0, array.length-1);
}
