let arr = [3, 5, 7];
arr.palavra = "Olá";
console.log(arr);

console.log()

for (let i in arr) { // for-in
    console.log(i); // "3", "5", "7", "palavra"
};

console.log()

for (let i of arr) { // for-of
    console.log(i); // "3", "5", "7"
};