//array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ['spiderman', 'ironman', 'thor']


const myArr2 = new Array(6, 7, 8, 9, 10);

// console.log(myArr.length);
// console.log(myArr[3])
// myArr[3] = 98
// console.log(myArr)

// Array methods 

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)

// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(newArr)


// console.log(myArr);

// Slice , Splice

// console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C ", myn1);
console.log(myn2);


