let x = 20; // ใส่ semicoron
console.log(x); // run ได้
let y = 10 //ไม่ใส่ semicoron
console.log(y); // run ได้
// ใส่ semicoron หรือไม่ใส่ก็ได้ run ได้เหมือนกัน

console.log("hello"); // คำสั่งสำหรับปริ้นท์ 

// let null = 1; // เกิด error เนื่อง null เป็นคำเฉพาะ

let num = 0; console.log(typeof(num)); // number type
let name = 'phai'; console.log(typeof(name)); // string type
let i = {name: 'phai' , age: 20 }; // object type
console.log(typeof(null)); // object type
let o; console.log(o); // undefined


let myNum = 0;
console.log(`type of myNum is ${typeof myNum}`); //output : type of myNum is number $->เรียกใช้ค่า
let myString = 'Good';
console.log(`type of myString is ${typeof myString}`); //output : type of myString is string
let myBool = true;
console.log(`type of myBool is ${typeof myBool}`); //output : type of myBool is boolean
let myUndefined;
console.log(`type of myUndefined is ${typeof myUndefined}`); //output : type of myUndefined is undefined
let mySymbol = Symbol();
console.log(`type of mySymbol is ${typeof mySymbol}`); //output : type of mySymbol is symbol
let myNull = null;
console.log(`type of myNull is ${typeof myNull}`); //output : type of myNull is object
let myArr = [1, 2, 3];
console.log(`myArr Length: ${myArr.length}`); //output : myArr Length: 3
console.log(`type of myArr is ${typeof myArr}`); //output : type of myArr is object
let myObj = {id: 1, task: 'grading exam'};
console.log(`${JSON.stringify(myObj)}`); // JSON.stringify น่าเป็นการเรียนดูข้อมูลใน Array output : {"id":1,"task":"grading exam"}
console.log(`type of myObj is ${typeof myObj}`); // type of myObj is object




