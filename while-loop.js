// while loop 

// let num = 2;
// while (num <= 15){
//     console.log(num);
//     // num = num + 1;
//     // num +=1;
//     num++;
// }


// let num = 1;
// let sum = 0;

// while (num<=10){
  
//    sum = sum + num;
    
//     num++;
// }
// console.log("sum of the numbers is ", sum); 

// ...................1st task .........................
/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

let j = 1;
while (j <=60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!", j);
    j++;
}

// ...................2nd task .......................................

/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

let i = 61;
console.log("the odd numbers are - ")
while (i <=100){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

let m = 78;
console.log("the even numbers are -");
while (m <= 98){
    if (m % 2 === 0){
        console.log(m);
    }
    m++;
}


