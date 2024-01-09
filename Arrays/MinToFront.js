arr =[1,2,-2,6,8,4]
arr1=[10,5,9,3,8,-1]
arr2=[5,8,6,30,0,7,8]
function MinToFront(arr){

    let min = arr[0]
    for (var i=0;i<arr.length;i++){
        if (arr[i]<min)
        {
            min=arr[i]
            val= i
            const left= arr.slice(0,i);
            const right=arr.slice(i+1,arr.length);
            newArr = [min,...left,...right]
        }
    }
    return newArr
}
console.log(MinToFront(arr))
console.log(MinToFront(arr1))
console.log(MinToFront(arr2))


