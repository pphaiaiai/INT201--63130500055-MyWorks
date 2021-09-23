//num1 and num2 are primitive variables
let num1 = 20;
let num2 = 10;
num2 = num1;

console.log(num1 == num2); //10==20
num2 = 55;
console.log(num1);
//----------------------------------------------------------------------------------

//per1 and per2 are Object variables
let per1 = { id: 1, name: "Pichaya" };
let per2 = { id: 1, name: "Pichaya" };

per2 = per1; //memory addree that points to its properties //FFEE
console.log(per1 == per2); //true, compare memory address
per2.name = "Thiti";
console.log(per1.name); //Thiti
//----------------------------------------------------------------------------------

let arr1 = [0, 2, 4, 6];
let arr2 = [0, 2, 4, 6];

console.log(arr1 == arr2); //false
arr2 = arr1;
arr2[1] = 5;
console.log(arr1[1]); // 5
console.log(arr1); //[ 0, 5, 4, 6 ]
console.log(arr2); //[ 0, 5, 4, 6 ]
//----------------------------------------------------------------------------------

function doSomething1(value) {
  value.name = "unknown";
}

let item1 = { name: "ABC" };
doSomething1(item1);
console.log(item1.name);
//----------------------------------------------------------------------------------

function doSomething2(value) {
  value = 100;
}
let isNum = true;
doSomething2(isNum);
console.log(isNum);
//----------------------------------------------------------------------------------

function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  console.log(`keys1: ${keys1}`);
  console.log(`keys2: ${keys2}`);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
let book1 = {
  isbn: 123456789,

  title: "JavaScript",
};
let book2 = {
  isbn: 123456789,
  title: "JavaScript",
};

console.log(shallowEquality(book1, book2));
