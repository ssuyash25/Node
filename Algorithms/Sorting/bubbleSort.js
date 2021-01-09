function sort(a){
    let noswaps;        //for almost sorted array : do not go on sorting if last time no swap happened
    for(let i=a.length-1; i>= 0; i--){
        noswap = true;
        for(let j=0; j<= i-1; j++){
            if(a[j] > a[j+1]){
                let temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                noswaps = false
            }
        }
        if(noswaps) break;  //Optimizations
    }
    return a;
}

console.log(sort([1,5,7,3,10,9,4]))