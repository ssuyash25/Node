
function pivot(ary, start = 0, end = ary.length - 1) {

    function swap(arr, i, j) {
        const t = arr[j]
        arr[j] = arr[i]
        arr[i] = t;
    }

    let pivot = ary[start]
    let pindx = start
    for (let i = start + 1; i <= end; i++) {
        if (pivot > ary[i]) {
            pindx++
            swap(ary, pindx, i)
        }
    }

    swap(ary, pindx, start)
    // console.log(pivot, "     ", ary)
    return pindx;
}

function quickSort(ary, left = 0, right = ary.length - 1) {
    if (left < right) {
        let piv = pivot(ary, left, right)
        quickSort(ary, left, piv - 1)
        quickSort(ary, piv + 1)
    }
    return ary
}


console.log(quickSort([7,2,8,11,98,23,5,7,1]))