
function search(a, ele){
    let start = 0;
    let end = a.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(a[mid] === ele)
        return mid;
        else if(a[mid] > ele)
        end = mid-1;
        else
        start = mid+1;
    }
    return undefined;
}

console.log(search([1,2,3,4,5,7], 5))