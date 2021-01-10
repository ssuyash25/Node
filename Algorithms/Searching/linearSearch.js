// Binary Search 
// Find the smallest element and move it to leftmost position of unsorted array
// After each cycle the size of un-sorted array will be reduced by 1
// Time Complexity => O(n^2) 
function search(a){
    for(let i=0; i<a.length ; i++){
        let changed = false
        let smallest = i; // By Default choose the current element as the smallest one
        for(let j=i+1; j<a.length ; j++){
            if(a[j]<a[smallest]){
            smallest = j
            changed = true // set flag to true if we are able to find a value less than current value
        }
        }
        if(changed){      // If we did find a Value less than the current value then do the swapping
            const temp = a[smallest]
            a[smallest] = a[i] 
            a[i] = temp
        }
    }
    return a; // return the Sorted Array
}

//Test
console.log(search([4,6,2,8,9,3,5]))