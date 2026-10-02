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
    let answer = Number($("#answer").val());
    if (answer == correctAnswer) {
        score++;

        $("#message").text("Correct!");
        $("#message").css("color", "green");
    }
    else {
        $("#message").text("Wrong! Correct answer is " + correctAnswer);
        $("#message").css("color", "red");
    }

    $("#score").text(score);
    $("#answer").val("");
    
    generateQuestion();
    if (score >= 5) {
        $("#div-question").hide();
        $("#div-score").show();
    }
}


function playAgain() {

}
