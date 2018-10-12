function add (numbers) {
  var numbers = numbers.replace(/\n/g,",");
  if(numbers == ""){
  return 0;
  }

  if(numbers.includes(",")){
    var numberArray = numbers.split(",");
    return sumOfNumbers(numberArray);
  }
  /*else if(numbers.includes("\n")){
    var numberArray = numbers.split("\n");
    return sumOfNumbers(numberArray);
  }*/
  else
    return parseInt(numbers);
}

function sumOfNumbers(numberArray){
  var total = 0;
  for(var i = 0; i < numberArray.length; i++){
    total += parseInt(numberArray[i]);
  }
  return total;
}

module.exports = add;
