var array= [-1,1,1,7,3]
function challenge_1(array){

    var newArray=[];
    var tmp=[];
    for (var i=0;i<array.length;i++){
        if (array[i]>tmp)
        {
            tmp= array[i]
            newArray.push(array[i])
        }
    }
    return newArray

}
console.log(challenge_1(array));

function challenge_2(array){
    var left =0;
    var right= word.length-1;
    while (left<right){
       if(word.charAt(left)!=word.charAt(right)){
           return false
       }
        left+=1;
        right-=1;
    }
    return true
}