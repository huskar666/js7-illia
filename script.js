const arr = [1,2,3];
arr[1] = 10;
console.log(arr);


const arr1 = ['dota', 'eto', 'erunda'];
arr1.push('polnaya');
console.log(arr1);


const arr2 = [1,2,3,4,5];
let sum = arr2.reduce((num,num1) => num + num1, arr2[0]);
console.log(sum);


const arr3 = [1,2,3,4,5];
for (let i = 0; i < arr3.length; i++){
    console.log(arr3[i]);
}


const arr4 = ['adaads', 'baddas', 'csds', 'dsddsd','es'];
for (let i = 0; i < arr4.length; i++){
    if (arr4[i].length > 5){
        console.log(arr4[i])
    }
}


const arr5 = [1,2,3,4,5,6,7,8,9,10];
let max = Math.max(...arr5)
console.log(max) 


const arr6 = [1,2,3,4,5,6,7,8,9,10];
for ( let i = 0; i < arr6.length; i++){
    if (arr6[i] % 2 === 0){
        console.log(arr6[i])
    }
}