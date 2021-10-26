const _ = {
  clamp(number, lower, upper){
  const lowerClampedValue = Math.max(number, lower);
  const clampedValue = Math.min(lowerClampedValue, upper);
  return clampedValue;
  },

  inRange(number, start, end){
    if(end === undefined){
      end = start;
      start = 0;
    }
    if(start > end){
      let temp = end;
      end = start;
      start = temp;
    }
    const isInRange = start <= number && number < end;
    return isInRange;
  },

  words(str){
    let words = str.split(' ');
    return words;
  },

  pad(str, len){
    if(len <= str.length){
      return str;
    }
    let startPaddingLength = Math.floor((len - str.length) / 2);
    let endPaddingLength = len - str.length - startPaddingLength;
    let paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);

   return paddedString;
  },

  has(obj, key){
    let hasValue = obj[key] != undefined;
    return hasValue
  },

  invert(object) {
    let invertedObject = {};
    for(let key in object) {
      const originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },

  findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      }  
    } 
    return undefined;
  },

  drop(array, n){
    if(n === undefined){
      n = 1;
    }
    let droppedArray = array.slice(n, array.length);
    return droppedArray;
  },

  dropWhile(array, predicate){
    const cb = (element, index) => {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  chunk(array, size=1){
     let arrayChunks = [];
     for(let i = 0 ;i < array.length; i += size){
       let arrayChunk = array.slice(i, i + size);
       arrayChunks.push(arrayChunk);
     }
     return arrayChunks;
  }
}; 

// Do not write or modify code below this line.
module.exports = _;