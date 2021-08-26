//  document.write("from js");  
//  alert("อย่าโง่");
//  console.log("เสือกเปิดมาเจออีกนะไอหน้าหมี");
//  console.error("damn");
//  console.warn("take care"); 

// let Name = "ไผ่" , name = "เพง" , Age = "20" , age = "19";
// console.log(Name,Age);
// console.log(name,age);

// let age = +"20.15"
// let number = 19.11 .toString();
// console.log(age);
// console.log(typeof(age));
// console.log(number);
// console.log(typeof(number));

// let days = Array(1,2,3,4,5);
// console.log(days);
// console.log(days[1]);

// let mount = [5,4,3,2,1];
// console.log(mount);

// console.log(15%5);

// let a = 10 , b = 5 ;
// console.log(a == b, a != b , a > b , a < b , a >= b , a <= b);

// let x = 13;
// if(x%2 == 0){
//     console.log("เลขคู่");
// }else{
//     console.log(false);
// }

// for (let i =1; i <= 5; i++){
//     console.log(i);
// }

// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++;
// }

// let trun = 1;
// let light;
// switch (trun){
//     case 0 : light = "เปิดไฟ";
//     break;
//     case 1 : light = "ปิดไฟ";
//     break;
// }

// console.log(light);

// let i = 1;
// do{
//     console.log(i);
//     i++;
// } while(i <= 100);

// function setSalary(saraly){
//     let bouns = saraly*6/100;
//     return saraly + bouns;
// }

// let totel = setSalary(15000);
// console.log(totel);

// let color =["red" , "blue" , "yellow"];
// let x = color.length;
// let y = color.sort();
// console.log(x);
// console.log(y);

// let colors =["red" , "blue" , "yellow"];
// let count = colors.length; 
// for (let i = 0; i < count; i++){
//     console.log(colors[i]);
// }
// colors.forEach(myData);
// function myData(item){
//     console.log(item);
// }

// let number = [12 , -4 , 52 , 13 , 9 , 1 , -230];
// number.sort(function(a,b){
//     return a - b
// });
// console.log(number);

// function more20(){
//     let result = confirm("คุณอายุมากกว่า 20 ปี ใช่หรือไม่ ?")
//     if(result){
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// alert(more20());

// const titleEl = document.getElementById('title');
// const contentEl = document.querySelector('.content');
// const allEl = document.querySelectorAll('p');

// titleEl.innerHTML = "fuck bitch";
// titleEl.style.color = "red";

// const textAll = document.querySelectorAll('p');
// console.log(textAll[0].innerHTML);

const lorem = document.getElementById('box');
const bott = document.getElementById('bott')

function switchTheme(){
    lorem.classList.toggle("darkMode");
    bott.innerText = "เปลี่ยนเป็น Light Mode";
}
