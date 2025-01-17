// sum of all the odd numbers between 20 to 30 

let sum = 0;
for (i=20; i<=30;i++){
    if(i%2!==0){
        sum = sum +i;

    }
}
console.log("required sum is", sum);