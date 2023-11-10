
let arr = [8,2,1,5,4,9,0];
let tar = [2];


function twoSum(nums, target) {
    let hashMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        let neededNumber = target - nums[i];

        if(hashMap.has(neededNumber)) {
            return [i, hashMap.get(neededNumber)];
        } 
        hashMap.set(nums[i], i);

    }
};


console.log(`Expected: [1, 6], got:`, twoSum(arr, tar));

