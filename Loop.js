// sum of the number.
let n = 153;
let sum = 0;
for( let digit of String(n)){
    sum = sum + Number(digit)
}
console.log("EX - Number",n,"sum of its digit:",sum);


// print the table where n is variable
let p = 4;
console.log("Table of",p);
for ( let m = 1; m <= 5; m++){
console.log(p + "x" + m + "=" +(p*m));
}

//prime number

let primeNumber = n;
let isPrime =true;

if (primeNumber <= 1){
    isPrime = false;
}else{
    for (let i = 2; i < primeNumber; i++){
        if (primeNumber % i === 0){
            isPrime = false;
            break;
        }
    }
}
if (isPrime){
    console.log(n,"prime number");
}else{
    console.log(n,"not a prime number")
}

//print all its factor

let factorNumber = n;
for (let i = 1; i<=factorNumber; i++){
    if (factorNumber % i === 0){

        console.log("factors of factorNumber are",i);
    }
    
}

//sum of all the numbers

let s = 112;
 let sum1 = 0;
 for (let i = 1; i <=s; i++){
    sum1 = sum1 + i; 
 }
 console.log("sum of the numbers are:",sum1);

 
//armstrong

let armstrongNumber = n;
let temp = armstrongNumber;
let armstrongSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum = armstrongSum + (digit * digit * digit);
    temp = Math.floor(temp / 10);
}
if (armstrongSum === armstrongNumber) {
    console.log(armstrongNumber, "is an Armstrong Number");
} else {
    console.log(armstrongNumber, "is NOT an Armstrong Number");
}



