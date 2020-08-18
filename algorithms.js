function convertToF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertToF(30);

// reverse a string
function reverseString(str) {
    let words = str.split("");
    words.reverse();
    str = words.join('')
    return str;
}

reverseString("hello");


function reverseString(str) {
    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

//factorial of numbers
function factorialize(num) {
    if (num === 0) return 1;
    return num * factorialize(num - 1);
}

factorialize(5);

//find the longest word in a string 
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }

    return maxLength;
}


//return largest numb in arrays not working

function largestOfFour(arr) {
    let subArr = [];
    for (let i = 0; i < arr.length; i++) {
        let largeNumb = arr[i][0];
        for (let x = 1; x < arr[i].length; x++) {
            if (arr[i][x] > largeNumb) {
                largeNumb = arr[i][x];
                subArr.push(largeNumb);
            }
        }
    }
    return subArr;
}
//example works
function largestOfFour(arr) {
    let results = [];
    for (let n = 0; n < arr.length; n++) {
        let largestNumber = arr[n][0];
        for (let sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
                largestNumber = arr[n][sb];
            }
        }

        results[n] = largestNumber;
    }

    return results;
}


// confirm the ending
function confirmEnding(str, target) {
    for (let i = 0; i < str.length; i++) {
        if (str[...] === target) {
            return true;
        } else {
            return false;
        }
    }
    return str;
}

confirmEnding("Bastian", "n");


function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor

    return str.slice(str.length - target.length) === target;
}

// repeat a string
function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

//truncate a string 
function truncateString(str, num) {
    if (str.length > num) {
        str = str.slice(0, num);
        str += '...';
    }

    return str;
}

//finders keepers function that looks through an array and returns first element that passes the test
//not working 
function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            num = arr[i];
            break;
        } else {
            return undefined;
        }
    }
    return num;
}

//working now

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
            return num;
        }
    }
    return undefined;
}

// boo who check if value is a primitave boolean;
function booWho(bool) {
    if (typeof(bool) === 'boolean') {
        return true;
    } else {
        return false;
    }
}

//SLICE AND SPLICE
function frankenSplice(arr1, arr2, n) {
  let arr4 = arr2.slice();
  for(let i=0; i<arr1.length; i++) {
     arr4.splice(n,0,arr1[i]);
     n++;
  }
  return arr4;
}

