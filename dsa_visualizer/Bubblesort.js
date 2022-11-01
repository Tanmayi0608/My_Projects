export function bubbleSort(arr){
    const n = arr.length;
    const animateArr = [];
    for(var i = 1; i <= n; i++){
        for(var j = 0; j < n-i; j++){
           animateArr.push([0,j]);
           if(arr[j]>arr[j+1]){
               [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            animateArr.push([1,j]);//for swapping add animation + length change + colour change
           } 
           else {
            animateArr.push([2,j]); //do nothing change back the colour
           }
        }
        animateArr.push([3,n-i]);
    }
    return animateArr;
}