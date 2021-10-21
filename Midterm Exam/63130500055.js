// 63130500055 ธราเทพ ศิริพิศ

//2.1 
let year2563term1 = [ //เปลี่ยนจากสร้างคลาสเพื่อรับข้อมูลมาเก็บเป็นสร้างตัวแปลเก็บค่า เพราะคลาสซับซ้อนเกินไป ใช้เวลาเยอะ
     {
        subjectCode: "GEN101",
        cradit: 1 ,
        grade: "A" 
    } ,
    {
        subjectCode: "GEN121",
        cradit: 3 ,
        grade: "A" 
    } ,
    {
        subjectCode: "LNG120",
        cradit: 3 ,
        grade: "B+" 
    } ,
    {
        subjectCode: "INT114",
        cradit: 3 ,
        grade: "C" 
    } ,
    {
        subjectCode: "INT100",
        cradit: 3 ,
        grade: "B" 
    } ,
    {
        subjectCode: "INT101",
        cradit: 3 ,
        grade: "C+" 
    } ,
    {
        subjectCode: "INT102",
        cradit: 1 ,
        grade: "C+" 
    } ,
]

let year2563term2 = [
    {
        subjectCode: "GEN111",
        cradit: 3 ,
        grade: "B+" 
    } ,
    {
        subjectCode: "LNG220",
        cradit: 3 ,
        grade: "A" 
    } ,
    {
        subjectCode: "INT103",
        cradit: 3 ,
        grade: "D+" 
    } ,
    {
        subjectCode: "INT104",
        cradit: 3 ,
        grade: "C+" 
    } ,
    {
        subjectCode: "INT105",
        cradit: 1 ,
        grade: "C+" 
    } ,
    {
        subjectCode: "INT200",
        cradit: 1 ,
        grade: "D+" 
    } ,
]

function allCraditq(year2563term1) {
    this.allCradit += year2563term1.cradit;
    return allCradit
}


console.log(allCradit());