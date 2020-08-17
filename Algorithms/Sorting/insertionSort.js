function insertionSort(a){

    for(let i =1; i < a.length; i++){
        let currentVal = a[i];
        for(var j = i-1; j>=0 && a[j] > currentVal ; j--){
            a[j+1] = a[j]
        }
        a[j+1] = currentVal
    }
}

console.log(insertionSort([2,1,9,76,4]))