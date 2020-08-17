
function mergeSort(a) {
//base case
if(a.length<=1) return a;

let mid= Math.floor(a.length/2);
let left = mergeSort(a.slice(0,mid));
let right = mergeSort(a.slice(mid));

//console.log('left =', left, "   right = ", right);

return merge(left, right)
}

function merge(a1, a2) {
    let mergedArray = []
    let i = 0; let j = 0;
    while (i < a1.length && j < a2.length) {
        if (a1[i] < a2[j]) {
            mergedArray.push(a1[i]);
            i++;
        }
        else {
            mergedArray.push(a2[j]);
            j++;
        }
    }
    while (i < a1.length) {
        mergedArray.push(a1[i]);
        i++;
    }
    while (j < a2.length) {
        mergedArray.push(a2[j]);
        j++;
    }
    return mergedArray;
}


console.log(mergeSort([10,23,73,37,56]))