var merge = function merge(array1, a, array2, b) {
    let i = a - 1;
    let j = b - 1;
    let z = a + b - 1;

    while (j >= 0) {
        if (i >= 0 && array1[i] > array2[j]) {
          array1[z] = array1[i];
            i--;
        } else {
          array1[z] = array2[j];
            j--;
        }
        z--;
    }
};


let nums1 = [1, 2, 3, 0, 0, 0];
let a = 3;
let nums2 = [2, 5, 6];
let b = 3;

merge(nums1, a, nums2, b);

console.log(nums1);
console.log(nums2);