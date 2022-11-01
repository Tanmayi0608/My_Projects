export function quickSort(arr){
    const n = arr.length;
    if(n<=1)
    return arr;
    const animateArr = [];
    

    quickSortUtility(arr,0,n-1,animateArr);
    return animateArr;
}
function quickSortUtility(arr,l,r,animateArr){
    const tempArr = [];
    if(l==r)
    animateArr.push([-5,[l],l]);
else if(l<r){
    for(var k=l;k<=r;k++)
    tempArr.push(k);

    animateArr.push([5,tempArr]);
    animateArr.push([1,r]); 
    const partitionIndx = partition(arr,l,r,animateArr);
    animateArr.push([-1,r]); 
    animateArr.push([2,partitionIndx]);
    animateArr.push([-5,tempArr,partitionIndx]);
    quickSortUtility(arr,l,partitionIndx-1,animateArr);
    quickSortUtility(arr,partitionIndx+1,r,animateArr);
}
}
function partition(arr,l,r,animateArr){
    var i=l;
    for(var j=l;j<r;j++){
        animateArr.push([3,[i,j]]);//compare those two values--change color
        if(arr[j]<arr[r]){
            animateArr.push([4,[i,j]]);//swap succeful change the lengths and colours
            [arr[j],arr[i]]=[arr[i],arr[j]];
            i++;
        }
        else
        animateArr.push([-3,[i,j]]); 
    }
    animateArr.push([4,[i,r]]);
    [arr[r],arr[i]]=[arr[i],arr[r]];
    return (i);
}

//TABLE
//0-color the array we are dealing with
//1- color the end pivot
//-1 to revert the black color to normal
//2 set the new partion index as black
//3 highlight for swapping
//4 - swap successful change the colors and lengths
