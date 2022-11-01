export function mergeSort(arr){
    const n = arr.length;
    if(n<=1)
    return arr;
    const animateArr = [];
    mergeSortUtility(arr,0,n-1,animateArr);
    return animateArr;
}

function mergeSortUtility(arr,l,r,animateArr){
    if(l===r)
        return;
    const mid = Math.floor((l+r)/2);  
    mergeSortUtility(arr,l,mid,animateArr);
    mergeSortUtility(arr,mid+1,r,animateArr);
    merge(arr,l,mid,r,animateArr);
}

function merge(arr,l,mid,r,animateArr){
 

    let i=0,j=0;
    let k=l;
    const tempArr = [];
    //creating the array containing index
    const size1 = mid-l+1;
    const size2 = r-mid;
    while(k <= r){
        tempArr.push(k);
        k++;
    }
    

    const left = arr.slice(l,mid+1);
    const right = arr.slice(mid+1,r+1);

    animateArr.push([0,tempArr.slice(0,mid-l+1),left]); //display the invisible chart left in diff colour

    animateArr.push([1,tempArr.slice(mid-l+1,r-l+1),right]); //display the invisible chart right in diff colour

    k=l;
    
    //compare th two parts 
    while(i < size1 && j < size2){
        animateArr.push([2,l+i,mid+1+j]);//deals with invisible array
        if(left[i] <= right[j]){
            animateArr.push([3,k,left[i]]);//changes height and colour
            animateArr.push([4,k]);//back to same colour
            arr[k++] = left[i++];
        }
        else{
            animateArr.push([3,k,right[j]]);//changes height and colour
            animateArr.push([4,k]);//back to same colour
            arr[k++] = right[j++];
        }   
    }
    while(i < size1){
        animateArr.push([2,l+i,mid+j]);
        animateArr.push([3,k,left[i]]);//changes height and colour
        animateArr.push([4,k]);//back to same colour
        arr[k++] = left[i++];
    }

    while(j < size2){
        animateArr.push([2,l+i-1,mid+1+j]);
        animateArr.push([3,k,right[j]]);//changes height and colour
        animateArr.push([4,k]);//back to same colour
        arr[k++] = right[j++];
    }

    animateArr.push([5,tempArr]); //display off second arr

}

//TABLE
// 0 - (inv - vis ), colour change
// 1 - (inv - vis), colour change
//2 -  (inv waale), colour chage to red
// 3 - the one which is edited in vis array change to diff colour
// 4 above step back to same colour
// 5 - change colour to before then turn the display off