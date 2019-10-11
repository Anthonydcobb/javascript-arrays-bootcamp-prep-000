let chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


let addElementToBeginningOfArray = (array, element) => {
  return [element, ...array];
}

let destructivelyAddElementToBeginningOfArray = (array, element) => {
  return array.unshift(element);
}
