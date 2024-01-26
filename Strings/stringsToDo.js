//? Strings To Do 1
// Write functions using the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. Do not use built-in methods (unless otherwise instructed). (.length is a property, and is allowed.)

//? Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
function removeBlanks(str){
    var newstr="";
    for (i=0; i<str.length;i++){
        if (str[i]!==" "){
            newstr+=str[i];
        }
    }
    return newstr
}
console.log( removeBlanks(" Pl ayTha tF u nkyM usi c "))//PlayThatFunkyMusic
console.log( removeBlanks("I can not BELIEVE it's not BUTTER")) //IcannotBELIEVEit'snotBUTTER



// ?Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
function getDigits(str){
    var newStr="";
    for (i=0; i<str.length;i++){
        if (!isNaN(Number(str[i]))){
            newStr+=str[i];
        }
    }
    return newStr
}
console.log(getDigits("abc8c0d1ngd0j0!8")) //=> 801008
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")) //=> 01357924680


//? Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). 
//You are allowed to use .split() and .toUpperCase().

function acronym(str){
    var x = str.trim().toUpperCase();
    var strArr=x.split(" ");
    var newstr = ""
    for (var i=0; i<strArr.length;i++){
        var y= strArr[i];
        newstr += y[0];
    }
    return newstr;
}
console.log(acronym(" there's no free lunch - gotta pay yer way. ")) //=> "TNFL-GPYW". 
console.log(acronym("Live from New York, it's Saturday Night!")) //=> "LFNYISN".



// ?Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
function countNonSpaces(str){
    var strNoSpace=removeBlanks(str);
    var count=0;
    for (var i=0; i<strNoSpace.length;i++)
    {
        count++
    }
    return count
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))//=>29
console.log(countNonSpaces("Hello world !") )//=>11




// ?Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.
function removeShorterStrings(arr,val){
    var newArr=[];
    for (var i=0; i<arr.length;i++){
        var element=arr[i];
        var length= element.length;
        if (length>=val){
            newArr.push(element);
        }
    }
    return newArr;
}
// Examples:
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']