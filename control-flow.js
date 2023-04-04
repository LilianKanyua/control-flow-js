//Question one
let arrStrings=["my","happy","place"];
for(let i=0;i<arrStrings.length;i++){
console.log(arrStrings[i]);
}

//Question two
let arrNum1=[33,12,45,67,90];
arrNum1.forEach(element =>{
    console.log(element*2);
})

//Question three
//Question four

let arrNum=[1,2,3,4,5,6,7,8,9];
for(let i=0; i<arrNum.length;i++){
    if(i==5){
        break;
    }
    console.log({"num":arrNum[i]});
    }

    //Question five
    let fruits= ['apple','plum','banana','strawberries','kiwi'];
    for(let i=0; i<fruits.length;i++){
        if(i==2){
            continue;
        }
        console.log({"continue":fruits[i]});
        }

