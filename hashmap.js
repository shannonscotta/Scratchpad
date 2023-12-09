 let nums1 = [7,3,1,8,2,4,10];
 let target1 = [11];

function twoSum(nums, target) {
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let neededNumber = target - nums[i];

    if (hashMap.has(neededNumber)) {
      return [i, hashMap.get(neededNumber)];
    }

    hashMap.set(nums[i], i);
  }
}

 console.log(twoSum(nums1, target1));
