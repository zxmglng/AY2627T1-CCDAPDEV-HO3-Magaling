let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateQuestion() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = Math.floor(Math.random() * operators.length);

    if (operator == "+"){
        correctAnswer = num1 + num2;
    }
    else if (operator == "-") {
        correctAnswer = num1 - num2;
    }
    else if (operator == "*") {
        correctAnswer = num1 * num2;
    }

    $("#question").text(num1 + " " + operators[operator] + " " + num2);
}

function checkAnswer() {
    let answer = Number

}

