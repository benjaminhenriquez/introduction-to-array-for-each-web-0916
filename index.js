function changeCompletely(element, index, array){
  array.forEach(function(array){array[index] = element
  })
}

function doToElementsInArray(array, callback){
  array.forEach(callback);
}
