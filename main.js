// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log("- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)")
let min3=(num1,num2,num3) => {
    let result;
    if (num1 < num2 && num1<num3) {
        result=num1;
    }else if(num2<num1 && num2<num3){
        result=num2
    }
    else if(num3<num1 && num3<num2){
            result=num3
        }
    return result;
}
    console.log(min3(-100,2,3))

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log("- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)")
let max3=(num1,num2,num3) =>{
    let result;
    if (num1 > num2 && num1>num3) {
        result=num1;
    }else if(num2>num1 && num2>num3){
        result=num2
    }
    else if(num3>num1 && num3>num2){
        result=num3
    }
    return result;
}
console.log(max3(100,2,300));
// - створити функцію яка повертає найбільше число з масиву
console.log("- створити функцію яка повертає найбільше число з масиву")
// debugger;
let arrayNumbers=[1,4,3232,1221,55,333,222,1902,180,999,92]
let maxOfArray=(array)=>{
    return Math.max.apply(null,array)
}
console.log(maxOfArray(arrayNumbers));

// - створити функцію яка повертає найменьше число з масиву
console.log("- створити функцію яка повертає найменьше число з масиву")
let minOfArray=(array)=>{
    return Math.min.apply(null,array)
}
console.log(minOfArray(arrayNumbers));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log("- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13")
let numbersToSum=[10,20,100,300]
let sumNumsOfArray=(array)=>{
    let total=0;
    for (let num of array){
        total+=num
    }
    return total;
}
console.log(sumNumsOfArray(numbersToSum));
// - Дано натуральное число n. Выведите все числа от 1 до n.
console.log("- Дано натуральное число n. Выведите все числа от 1 до n.")
let naturalFunction=(n)=>{
   for(let i=1;i<=n;i++){
       console.log(i)
   }
   if(n===0 || n<0){
       console.log("Це число не натуральне!")
   }
}
console.log(naturalFunction(12));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
console.log("- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, " +
    "если A < B, или в порядке убывания в противном случае.")
let from1numTo2num=(A,B)=>{
    if(A<B){
        for(let i=0;i<=B;i++){
            console.log(i)
        }
    }else if(A>B){
        for (let i=A;i>=B;i--){
            console.log(i)
        }
    }else {
        console.log("Error")
        console.log("NUMBERS ARE EQUAL!!!")
    }
}
from1numTo2num(10,20)
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
console.log("-функція Приймає масив та число \"i\", та міняє місцями об`єкт який знаходиться в індексі \"i\" на \"i+1\"")
let foo=[9,8,0,4]
let swapsPlaces=(array,i)=>{
    let exp=array[i];
     array[i]=array[i+1]
     array[i+1]=exp
    return array
}
console.log(swapsPlaces(foo, 0));

//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
console.log("- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. " +
    "Зберігаючи при цьому порядок не нульових значень.\n" +
    "// Двожина масиву від 2 до 100")
let arrayWithZero=[0,0,1,0];

let zeroToBottom=(array)=>{
    for(let i=0;i<array.length;i++){
        if(array[i]===0){
            array[i]=null;
        }
    }
    for (let value of array){
        if(value===null){
            array.push(0)
        }
    }
    array=array.filter(function (el){
        return el!=null && el!=undefined || el===0;
    })
    return array
}
console.log(zeroToBottom(arrayWithZero));
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]