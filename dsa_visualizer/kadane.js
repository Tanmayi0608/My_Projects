export function kadane(arr){
    const animateArr = [];
    kadaneUtility(arr,animateArr);
    return animateArr;
}

function kadaneUtility(arr,animateArr){
    let highlighArr = [];
    let subarrayMaxSum = Number.MIN_VALUE;
    let sum=0;
    let index = -1;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
        animateArr.push([0,i,sum]);
        highlighArr.push(i);
        if(subarrayMaxSum<sum){
            animateArr.push([1,i]);
            subarrayMaxSum = sum;
            index = i;
        }
        if(sum<0){
            animateArr.push([2,highlighArr,index]);
            sum=0;
            highlighArr = [];
        }
    }
    animateArr.push([index]);
}

//0 keep highlighting and changing sum
//1 global max sum yet
//2 - make normal th highlighted once, except index
//see the CSS property of top..changed in many places ..in visualiser, in the css of div in thebottom