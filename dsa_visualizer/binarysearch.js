
export function binarySearch(arr,target){
    const animateArr = [];
    //const n = arr.length; 
    binarySearchUtility(arr,animateArr,target);
    return animateArr;

}

function binarySearchUtility(arr,animateArr,target){
    const n =  arr.length;
    let l=0,r=n-1;
   
 while(l<r){
     let mid = Math.floor((l+r)/2);
     animateArr.push([1,mid]);
     if(arr[mid]==target){
         break;
     }
     //animateArr.push([0,mid]);
     if(arr[mid]<target){
        l = mid+1;
     }
     
     else{
        r = mid-1;
     }
     animateArr.push([0,l,r]);
 }
 if(l==r)
    animateArr.push([1,l]);
}

// 1 found the index
// 0 highlight mid