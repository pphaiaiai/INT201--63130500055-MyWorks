
class info {
    constructor(year , student , classed , grade , cumulative ){
        this._year = year;
        this._student = student;
        this._classed = classed;
        this._grade = grade;
        this._cumulative = cumulative
    }
    toString(){
        return `${this._year}
        ${this._student}
        ${this._classed}
        ${this._grade}
        ${this._cumulative}`;
    }
}

class infoSet { //เป็น class ที่รวบรวม question หลายๆ question มาไว้ด้วยกัน
    constructor() { 
        this._questions = []; //เก็บ Array ของคำถามหรือ question
    }

    addInfo() { // เป็น function ที่เอาไว้เพิ่มข้อมูลลงใน Array
        let choiceList = { 
            subjectCode: choice1,
            cradit: choice2,
            grade: 
        }
        this._questions = new Question(title, choiceList, trueAnswer); //สร้าง object ของข้อมูลขึ้นใหม่เพื่อเอามาเก็บใน Array

    }
    toString() { //เอาไว้ return เป็นข้อมูลของ QuestionSet
        let result = "";
        let count = 0;
        for (let quiz of this._questions) { //loop คำถามทุกคำถามเพื่อเอามาเก็บไว้ใน result
            result +=
                `----------------Question ${count+1}----------------\n${quiz}\n`;
            count++;
        }
        return result;
    }
}

function setUp(questionSet) { //Function เอาไว้เพิ่มคำถามเริ่มต้นให้ questionSet

    questionSet.addQuestion(
        "GEN101", 
        "1", 
        "A" 
    );
}