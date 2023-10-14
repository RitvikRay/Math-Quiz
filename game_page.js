player1Name = localStorage.getItem("player 1 name");
player2Name = localStorage.getItem("player 2 name");
player1Score = 0;
player2Score=0;
question_turn = player1Name;
answer_turn = player2Name;
document.getElementById("player1_name").innerHTML = player1Name + ":";
document.getElementById("player2_name").innerHTML = player2Name + ":";
document.getElementById("player1_score").innerHTML = player1Score;
document.getElementById("player2_score").innerHTML = player2Score;
document.getElementById("player_question").innerHTML = "Question Turn: "+player1Name;
document.getElementById("player_answer").innerHTML = "Answer Turn: "+player2Name;
function send(){
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actualAnswer=parseInt(number1) * parseInt(number2);
    question="<h4>"+number1+"x"+number2+"</h4>";
    input="<br>Answer: <input type='number' class='form-control' id='inputBox'>";
    check = "<br><br><button class='btn btn-info'>Check</button>";
    row = question +input+check;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value='';
    document.getElementById("number_2").value='';
}
function check(){
    answer=document.getElementById('inputBox').value;
    if (answer == actualAnswer) {
        if (answer_turn == player1Name) {
            player1Score = player1Score+1;
            document.getElementById("player1_score").innerHTML = player1Score;
        } 
        else {
            player2Score = player2Score+1;
            document.getElementById("player2_score").innerHTML = player2Score;
        }
    } 
    else {
        if (answer_turn == player1Name) {
            player2Score = player2Score+1;
            document.getElementById("player1_score").innerHTML = player2Score;
        } 
        else {
            player1Score = player1Score+1;
            document.getElementById("player2_score").innerHTML = player1Score;
        }
    }
    if (question_turn == player1Name) {
        question_turn = player2Name;
        answer_turn = player1Name;
        document.getElementById("player_question").innerHTML = "Question Turn: "+question_turn;
document.getElementById("player_answer").innerHTML = "Answer Turn: "+answer_turn;
    } else {
        question_turn = player1Name;
        answer_turn = player2Name;
        document.getElementById("player_question").innerHTML = "Question Turn: "+question_turn;
document.getElementById("player_answer").innerHTML = "Answer Turn: "+answer_turn;
    }
    document.getElementById("output").innerHTML ='';
}