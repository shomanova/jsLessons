// function check(n) {
//   if(n% 2 == 0){
//     return "zhup";
//   }
//   else{
//     return "tak"
//   }
// }

// console.log(check(12)); 

// function count(num1, num2, method) { 
//      switch (method) { 
//        case "+": 
//          return num1 + num2; 
//          break; 
//        case "-": 
//          return num1 - num2; 
//          break; 
//      } 
//    }

  //  function findMax(a,b,c){
  //   return Math.max(a,b,c);
  //  }
  //  console.log(findMax(2,23,45));

  // function factorial(n){
  //   if(n <=1){
  //     return 1;
  //   }
  //   else{
  //     return n * factorial(n-1);
  //   }
  // }

// let arr = [12,23,34,45,56,67,78,89];
// console.log(typeof arr);
// console.log(arr[0]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// for(let i = o; i < arr.length; i++){
//   console.log(arr[i]);
// }

// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//   sum = sum + arr[i];
// }
// console.log(sum);


// function sum (){
//   let arr= [1, 2, 3, 4, 5];
//   let s= 0;
//   for (let i = 0; i < arr.length; i++){
//     s = s + arr[i]
//   }
//   console.log(s)
// }
// sum();

// let arr =[22,25,26,27,28];
// for(let i = 0; i < arr.length; i++){
//   if (arr[i]%2==0)
//   console.log(arr[i])
// }
 

// let arr = [6,8,9,4];
// let sum = 0;
// for (let i = 0; i<arr.length; i++){
//     sum = sum + arr[i];
// }
// console.log(sum);


// let arr = [19,50,63,77,67];
// console.log(Math.max(...arr));

// let max = 0;
// for(let i = 0;i<arr.length;i++){
//   if(arr[i] > max){
//     max = arr[i];
//   }
// }
// console.log(max);

// function  average(arr) 
// {
//     if(arr.length == 0) 
//         return 0; 
  
//     let sum = 0; 
  
//     for(let i = 0; i < arr.length; i++) { 
//         sum += arr[i]; 
//     }  
//     return sum / arr.length; 
// } 
  
// let k = [1, 3, 2, 8, 5,]; 
// console.log(average(k));

// let array1 = [1, 2, 3, ]; 
// let array2 = [2, 3, 4 ]; 
 
// let data = {}; 
// array1.concat(array2).forEach(function(item) { 
//   data[item] = true; 
// }); 
// let result = Object.keys(data); 
// console.log(result)

// let arr = [1, 3, 2, 8, 5];
// let sum = 0;
// for(let i = 0; i<arr.length;i++){
//   sum = sum + arr[i];
// }

// let res = sum / arr.length;
// console.log(res);

let arr = [11,42,59,86];
function arraySum(array){
  let sum = 0;
  for (let i = 0; i < array.lenght; i++){
    sum += array[i];
  }
  console.log(sum);
}
arraySum(arr)