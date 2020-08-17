
function getDigit(num, place){
 return  Math.floor(Math.abs(num) / Math.pow(10,place)) % 10;
}

function digitCount(num){
if(num === 0) return 1;
return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums){
    let max = 0
    for(let i =0; i< nums.length; i++){
        max = Math.max(max , digitCount(nums[i]) )
    }
    return max
}

function redixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for(let k =0; k< maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i =0; i< nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

console.log(redixSort ([22342343,65,5478,98,12,4665,67,1657,3436456,2343425]))