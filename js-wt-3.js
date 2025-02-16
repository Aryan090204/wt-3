// Program to create a function that return thre reverse of a string

// function reverse(str) {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         rev+= str[i];
//     }
//     return rev;
// }
// console.log(reverse("Palindrome"));
// console.log(reverse("Jai Shree Ram"));
// console.log(reverse("Geekster"));

//Program to  Implement an algorithm to check if two strings are anagrams of each other (contain the same characters with the same frequency)

// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length){
//         return false;
//     }
    
//     const countChar = (str) => {
//         let count = {};
//         for (let char of str) {
//             count[char] = (count[char] || 0) + 1;
//         }
//         return count;
//     };

//     let c1 = countChar(str1);
//     let c2 = countChar(str2);

//     for (let char in c1) {
//         if (c1[char] !== c2[char]) return false;
//     }
//     return true;
// }
// console.log(isAnagram("listen", "silent")); 

// function arrayIntersection(arr1, arr2) {
//     let result = [];
    
//     for (let i = 0; i < arr1.length; i++) {
//         let found = false;
//         for (let k = 0; k < result.length; k++) {
//             if (result[k] === arr1[i]) {
//                 found = true;
//                 break;
//             }
//         }
        
//         if (!found) {
//             for (let j = 0; j < arr2.length; j++) {
//                 if (arr1[i] === arr2[j]) {
//                     result.push(arr1[i]);
//                     break;
//                 }
//             }
//         }
//     }
//     return result;
// }
// console.log(arrayIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
// console.log(arrayIntersection([1, 2, 3, 4], [9, 7, 81, 9])); 


// function isPalindrome(str) {
//     let cleanStr = "";
    
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char >= 'A' && char <= 'Z') {
//             char = String.fromCharCode(char.charCodeAt(0) + 32); 
//         }
//         if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
//             cleanStr += char;
//         }
//     }
//     let left = 0, right = cleanStr.length - 1;
//     while (left < right) {
//         if (cleanStr[left] !== cleanStr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
// console.log(isPalindrome("Elephant"));
// console.log(isPalindrome("pop")); 

// function rotateArray(arr, k) {
//     let n = arr.length;
//     if (n === 0 || k === 0) return arr; 

//     while (k >= n) {
//         k -= n;
//     }

//     let rotated = [];
    
//     for (let i = n - k; i < n; i++) {
//         rotated.push(arr[i]);
//     }
    
//     for (let i = 0; i < n - k; i++) {
//         rotated.push(arr[i]);
//     }

//     return rotated;
// }

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); 
// console.log(rotateArray([1, 2, 3, 4, 5], 7)); 

function compressString(str) {
    let compressed = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}
console.log(compressString("aabcccccaaa")); 
console.log(compressString("dddddddddddddkkkkkkkkkkkkkkkcccccccnnnnnnnnnnndddddddddddddiiiiiiirrrrrntoooooooooowwwmmmmsnnnnnnnndddddddd"));

function findPairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === target) {
            return [arr[left], arr[right]];
        } else if (sum < target) {
            left++; 
        } else {
            right--; 
        }
    }
    return [];
}

console.log(findPairWithSum([2, 7, 11, 15], 9)); 
console.log(findPairWithSum([1, 3, 4, 5, 6, 8], 10)); 
console.log(findPairWithSum([1, 2, 3, 9], 8)); 


function longestUniqueSubstring(s) {
    let seen = {}; 
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        if (seen[char] !== undefined && seen[char] >= left) {
            left = seen[char] + 1; 
        }

        seen[char] = right; 
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); 
console.log(longestUniqueSubstring("bbbbb"));   
console.log(longestUniqueSubstring("pwwkew"));  
