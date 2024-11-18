const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let isPrime=true;
  let primeArray=[];
  for(let i =0;i<numbers.length;i++){
    let isPrime=true;
if(numbers[i]<=1){
    isPrime=false;
}
else{
for(let j =2;j<Math.sqrt(numbers[i]);j++){
   if(numbers[i]%j===0){
    isPrime=false;
    break;
   }
}
  }
  if(isPrime){
    primeArray.push(numbers[i]);
  }
}

//Finding Max, min or sum
let maxPrime=Math.max(...primeArray);

let minPrime=Math.min(...primeArray);



let sumPrime=0;
for(let i =0;i<primeArray.length;i++){
    sumPrime+=primeArray[i];
}
console.log("Prime numbers :", primeArray);
console.log("Maximum prime : ", maxPrime);
console.log("Minimum prime : ", minPrime);
console.log("Sum of prime numbers : ", sumPrime);