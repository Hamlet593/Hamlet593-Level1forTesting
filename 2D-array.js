// 2D-array
// Given a n x n matrix. The problem is to find all the distinct elements
// common to all rows of the matrix. The elements can be printed in any
// order.

// Input :

// 2 1 4 3
// 1 2 3 2
// 3 6 2 3
// 5 2 5 3


// Output : 2 3

***

//Solution

//Կոդն աշխատում է կամայական n * n չափանի մատրիցի և նրանում առկա կամայական կրկնվող թվերի դեպքում:

let matrix = [
  [2, 1, 4, 3],
  [1, 2, 3, 2],
  [3, 6, 2, 3],
  [5, 2, 5, 3],
];

let mainArr = [];//Ստեղծում ենք array որը պարունակելու է matrix-ի բոլոր նիշերրը:

function distinct(matrix){
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(!mainArr.includes(matrix[i][j])){
        mainArr.push(matrix[i][j]);
      }
    }
  }
  return mainArr;
}
distinct(matrix);//ֆունկցիան կանչում եմ, որպեսզի mainArr-ը առաջանա:(կարող եք mainArr-ը console.log անել և տեսնել, ես լոգ չեմ դրել զուտ խնդրի վերջնական պատասխանի մեջ ավելորդ արժեքներ չերևալու համար):

let lastArr = [];//Ստեղծում ենք նոր՝ վերջին array-ը, որը պարունակելու է միայն կրկնվող նիշերը:

function onlyRepeat(){
  for(let k = 0; k < mainArr.length; k++){
    let sum = 0;
    loop2:
    for(let l = 0; l < matrix.length; l++){
      if(matrix[l].includes(mainArr[k])){
        ++sum;
        if(sum === matrix.length){//եթե կրկնվող նիշերի թիվը sum-ին գումարելով հասցրեց 4-ի, ուրեմն դա նշանակեց որ մեր 4-չափանի մատրիցի բոլոր հորիզոնական տողերում միևնույն նիշը մեկական անգամ կրկնվեց:
                                  //matrix.length եմ գրել ոչ թե 4, որպեսզի կամայական length ունեցող մատրիցի դեպքում կոդն աշխատի:
          lastArr.push(mainArr[k]);//և այդ նիշը ներառեցինք lastArr-ի մեջ:
          break loop2;//որպեսզի matrix-i վերջին տողն էլ բավարարելուց հետո վերջին տողի մյուս ինդեքսների վրայով անիմաստ ցիկլ չֆռա:
        }
      }
    }
  }
  return lastArr + '';
}
console.log(onlyRepeat())

-----------------code ending-----------------

//Սա խնդրի Ձեր օրինակն էր, իսկ էստեղ matrix-ը փոխել եմ, դարձյալ կոդը նորմալ աշխատում է՝

* * *

let matrix = [
  [1, 5, 15, 3],
  [1, 15, 7, 3],
  [1, 6, 15, 3],
  [15, 5, 7, 3],
];

let mainArr = [];

function distinct(matrix){
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix.length; j++){
      if(!mainArr.includes(matrix[i][j])){
        mainArr.push(matrix[i][j]);
      }
    }
  }
  return mainArr;
}
distinct(matrix);

let lastArr = [];

function onlyRepeat(){
  for(let k = 0; k < mainArr.length; k++){
    let sum = 0;
    loop2:
    for(let l = 0; l < matrix.length; l++){
      if(matrix[l].includes(mainArr[k])){
        ++sum;
        if(sum === matrix.length){
          lastArr.push(mainArr[k]);
          break loop2;
        }
      }
    }
  }
  return lastArr + '';
}
console.log(onlyRepeat())