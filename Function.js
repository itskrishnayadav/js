// find the maxmimum number 

 const MaxmiumNumber=[1,2,3,4,5,6,7,8,9,100];
 

let findMaxium = () =>{
    let max = MaxmiumNumber[0];
    for (i=0; i<MaxmiumNumber.length; i++){
        if (MaxmiumNumber[i]>max){

           max = MaxmiumNumber[i]; 
        }
    }
    console.log("the max number in this array are:",max);
};
findMaxium();

// calculate the sum of the elements in the array.

const arrSum = [1,2,3,4,2,1,3,3,23,0];
 let sum =0;

 let Sumof = ()=>{
    for (i=0;i<arrSum.length;i++){
        sum += arrSum[i]
    }
    console.log("the sum of the array:",sum);
 }
 Sumof();

 //count the odd number 

  
 let Odd =[1,2,3,4,5];
 let count =0;
   let oddOf = ()=>{
    for(let i=0;i<Odd.length;i++){
      
    if (Odd[i] %2 !== 0 ){
          //console.log("odd number are:",Odd[i]);
          count++;
    }
    
  }
}
oddOf();
console.log("count of odd number are :",count);

