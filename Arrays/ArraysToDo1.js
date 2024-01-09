//? Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
arr= [10,2,5,6,9];
arr1=[1,3,4,5,6,7,8,9,10];
arr2=[3,6,9,0,8]
function pushFront(arr,val){
    arr=[val,...arr];
    console.log(arr);
    return(arr);
}    
pushFront(arr2,2);


// ?Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
arr3=[1,3,4,5,6];
function popFront(arr){
    temp=arr[0];
    for (i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    }
    arr.pop();
    console.log("array after popFront ",arr);
    arr=[temp,...arr];
    console.log(arr);
    return(arr);
}
popFront(arr3);

function popFront2(arr){
    const removed = arr.shift();
    console.log(arr);
    arr.unshift(removed);
    console.log(arr);
    return arr;
}
popFront2(arr3);

//? Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!
arr=[1,3,4,5,6,7,8,9,10];
function InsertAt(arr,index,val){
    const left=arr.slice(0,index);
    const right=arr.slice(index, arr.length);
    // left.push(val);
    // newArr=left.concat(right);
    newArr=[...left,val,...right];
    console.log(newArr);
    return newArr;
}
InsertAt(arr,6,100);

//? BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).
function RemoveAt(arr,index){
    temp=arr[index]
    const left = arr.slice(0, index);
    const right= arr.slice(index+1, arr.length);
    newArr=[...left,...right]
    console.log(newArr);
    finalArr=[...left,temp,...right]
    return finalArr;
}
RemoveAt([1000,3,204,77],2)


// ?BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.
function SwapPairs(arr){

    for (var i=0; i<Math.floor(arr.length/2);i++){
        j=i*2
        k=(i*2)+1
        temp=arr[j]
        arr[j]=arr[k]
        arr[k]=temp
    }
    console.log(arr);

    return (arr);
}
SwapPairs([1,2,3,4,5])
SwapPairs(["Brendan",true,42])


//? BONUS: Remove Duplicates
// *Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

// *Examples:
// *removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// *removeDupes([9,19,19,19,19,19,29]) => [9,19,29]
