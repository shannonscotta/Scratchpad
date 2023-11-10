
let nums1 = [8,2,1,5,4,9,0];
let target1 = [2];


function twoSum(nums, target) {

    let hashMap = new Map();
    let iterations = 0;

    for(let i = 0; i < nums.length; i++) {

        iterations++;

        let neededNumber = target - nums[i];
        // 2 - 8 = -6
        // neededNum = -6

        console.log(`neededNumber: ${target - nums[i]} = target: ${target} - nums[i]: ${nums[i]}`);

        //does our hashMap have -6?
        if(hashMap.has(neededNumber)) {

            console.log(`inside of if \n hashMap.has(${neededNumber})`);

            // if it does, we will return i and neededNum
            console.log(`hashMap.get(neededNumber) ***********`, hashMap.get(neededNumber))
            console.log(`Total iterations: ${iterations}`);
            return [i, hashMap.get(neededNumber)];
        } 
        // regardless of if our hashmap has the num, we will add it to our hashmap, 
        // hashmap.set(value, index)
        hashMap.set(nums[i], i);
        console.log(`SETTING HASHMAP ----> nums[i]:${nums[i]}, i: ${i}`);
        // set(8, 0)
        console.log('\n')
    }
};


console.log(`Expected: [1, 6], got:`, twoSum(nums1, target1));

