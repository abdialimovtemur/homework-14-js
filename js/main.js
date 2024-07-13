// 1. djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest
// "Najot ta'lim is the best" yozuvini hosil qiling


// let str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest"

// function najotTalim() {

//     let naj = (str.substring(19, 24)).split();
//     let tal = (str.substring(3, 9)).split();
//     let is = (str.substring(32, 34)).split();
//     let the = (str.substring(44, 47)).split();
//     let best = (str.substring(60, 67)).split();

//     let newStr = [...naj, ...tal, ...is, ...the, ...best].join(" ")
//     console.log(newStr)
// }
// najotTalim()










// 2. var searchMatrix = function(matrix, target) {};
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false


// let userNum = +prompt("Sonni kiriting")
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// let sum = 0
// function numSearch(userNum){
//     matrix.forEach((element, index) =>{
//         if(element.includes(userNum)){
//             sum++
//         }
//     })
//     if (sum > 0) {
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// numSearch(userNum)













// 3. Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]




// let arr = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16],];

// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     let sum = []
//     for (let j = 0; j < arr.length; j++) {
//         sum.push(arr[j][i]);
//     }
//     res.push(sum.reverse());
// }

// console.log(res)














// 4. Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

// let arr = [[1,2,3],[4,5,6],[7,8,9]];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     let sum = []
//     for (let j = 0; j < arr.length; j++) {
//         sum.push(arr[j][i]);
//     }
//     res.push(sum.reverse());
// }

// console.log(res)










// 5. sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping


// let userStr = prompt("gapni kiriting").split(" ");
// function strEndLenght() {
//     let Strlen = userStr.length - 1
//     userStr.forEach(element => {
//         console.log(userStr[Strlen].length)
//     });
// }
// strEndLenght()









// 6. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat array qaytaring. (Object.entries, map, join)
// Input: {a: 2, b: 5, c: 7}
// Output: ['a2', 'b5', 'c7']

// let obj = { a: 2, b: 5, c: 7 };
// let arr = []
// for (const [key, value] of Object.entries(obj)) {
//     let assign = key + value
//     arr.push(assign)
// }
// console.log(arr)









// 7. var findMedianSortedArrays = function(nums1, nums2) {};
// nums1 = [1,2], nums2 = [3,4]
// result: 2.5
// arraylar qushilib va sort lanib urtasidagi son topilsin


// let nums1 = [1, 2].sort((a, b) => a - b)
// let nums2 = [3, 4].sort((a, b) => a - b)

// function getArrArif() {
//     let len = nums1.length + nums2.length
//     let arr = [...nums1, ...nums2].reduce((a, b) => a + b, 0)
//     console.log("result  " + arr / len)
// }
// getArrArif()








// 8. Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok etgan item larni boshqa array ga ko’chiradigan function yarating

// let arr = ["apple", "shoptoli", "apple" , "banana" , "orange" , "orange" , "pomegranade", "penapple" , "cherry" , "cherry" ]
// let newArr = [arr]
// let result = []
// function GetDoulicatItem() {
//     arr.forEach(element => {
//         if (!newArr.includes(element)) {
//             newArr.push(element)
//         } else {
//             result.push(element)
//         }
//     }
//     )
//     console.log(result)
// }
// GetDoulicatItem()










// 9. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
// {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
// {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
// {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
// {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];


// let products = [
// {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
// {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
// {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
// {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
// ];
// function arrDelProduct() {
//     let newArr = products.filter((product) => product.id !== 4);
//     console.log(newArr)
// }
// arrDelProduct()











// 10. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
// {name: 'John', age: 13},
// {name: 'Mark', age: 56},
// {name: 'Rachel', age: 45},
// {name: 'Nate', age: 67},
// {name: 'Jeniffer', age: 65}
// ];
// Output: 54


// let arr = [
//     { name: 'John', age: 13 },
//     { name: 'Mark', age: 56 },
//     { name: 'Rachel', age: 45 },
//     { name: 'Nate', age: 67 },
//     { name: 'Jeniffer', age: 65 }
// ];

// function toArrSort(params) {
//     let smallNum = arr.sort((a, b) => a.age - b.age);
//     let largeNum = arr.length - 1
//     console.log(smallNum[largeNum].age - smallNum[0].age)
// }

// toArrSort()








// qo'shimcha masalalar




