let quest = { id: 1, quest: 'what is it' }; //implicit class => let quest= new Object()
console.log(typeof quest);

class Question {
    constructor(id, question = 'unknown') {
        this._id = id;
        this._question = question;
    }

    get id() {
        return this._id;
    }

    set question(question) {
        console.log("This is setter Question")
        if (question === '') {
            this._question = 'unknown';
        }
    }

    get question() {
        console.log("This is getter Question")
        return this._question;
    }
}

let quest1 = new Question(1);
let quest2 = new Question(2, "What is your name?");
let quest3 = new Question(3, "");
quest2.question = '';
console.log(quest2);
console.log(quest2.question);

class Question {
    constructor(id, question) {
        this._id = id;
        if (question === undefined || question.length === 0)
            this._question = 'unknown';
        else this._question = question;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get question() {
        return this_question;
    }

    set question(question) {
        this._question = question;
    }

    displayQuestion() {
        return `id: ${this._id}, question: ${this._question} }`;
    }

}

let quest1 = new Question(1, 'Q1');
let quest2 = new Question(2, 'Q22');

Question.prototype.getQuestLength = function () {
    return this._question.length;
};

console.log(quest1.getQuestLength());
console.log(quest2.getQuestLength());