// REMEMBER TO PSEUDOCODE
// First I'm going to determine the length of the array 
// so that if the minSize is equal to 0 or the size of the original array, I could just return the array and get it out of the way. 
// Next I'm going to determine if there's anything inside value by asking what it's type is and if it doesn't match string or number than it can push None
// into the array. 
// Then I'm going to subtract length of the array from minSize and 
// have a for i loop to iterate value into the array
exports.padArray = (array, minSize, value) => {
    lngt=array.length
    // console.log(typeof(''))
    if(minSize===0){
        return(array)
    }
    else{
        if(lngt===minSize){
            return(array)
        }
        else{
            iterate=minSize-lngt
            if(typeof(value)===typeof('') || typeof(value)===typeof(1)){
                for(i=iterate;i>0;i--){
                    array.push(value)
                }
                return(array)
            }
            else{
                for(i=iterate;i>0;i--){
                    array.push('None')
                }
                return(array)
            }
        }
    }

}

// pad([1,2,3],5)