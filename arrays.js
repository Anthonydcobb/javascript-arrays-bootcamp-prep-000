var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];


var addElementToBeginningOfArray = (array, element) => {
   return array.unshift(element);

}

var destructivelyAddElementToBeginningOfArray = (array, element) => {
  return array[0] = element;
}

addElementToBeginningOfArray(chocolateBars,)
