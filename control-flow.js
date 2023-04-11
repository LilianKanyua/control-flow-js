//Question one

function printElement(arrStrings){

   for(let i=0;i<arrStrings.length;i++){
console.log(arrStrings[i]);
}
}
let arrStrings=["my","happy","place"];
printElement(arrStrings);

//Question two

function multiply(arrNum1){

   arrNum1.forEach(element =>{
console.log(element*2);
})
}
let arrNum1=[33,12,45,67,90];
multiply(arrNum1);

//Question three
function numArray(num1){
    const fourItems = num1.slice(0, 4).map(number => number * 8);
    const twoItems = num1.slice(-2).map(number => number + 5);
    const combined = [...fourItems, ...twoItems];
    console.log(combined);
}
let my_array= [19, 89, 57, 40,98 , 60, 76, 51, 90, 100];
numArray(my_array);

//Question four

function breakAtFour(arrNum){
for(let i=0; i<arrNum.length;i++){
    if(i===5){
        break;
    }
    console.log({"num":arrNum[i]});
    }
}
    let arrNum=[1,2,3,4,5,6,7,8,9];
    breakAtFour(arrNum);

    //Question five
  
    function fruits(arrFruits){
    
    for(let i=0; i<arrFruits.length;i++){
        if(i===2){
            continue;
        }
        console.log({"continue":arrFruits[i]});
        }

    }
    let arrFruits= ['apple','plum','banana','strawberries','kiwi'];
    fruits(arrFruits);