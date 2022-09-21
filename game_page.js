player1name = localStorage.getItem("player1Name");
player2name = localStorage.getItem("player2Name");
player1score = 0;
player2score = 0;
document.getElementById("player1Name").innerHTML = player1name + ":";
document.getElementById("player2Name").innerHTML = player2name + ":";
document.getElementById("player1Score").innerHTML = player1score;
document.getElementById("player2Score").innerHTML = player2score;
document.getElementById("playerQuestion").innerHTML = "turno de pergunta-" + player1name;
document.getElementById("playerAnswer").innerHTML = "turno de resposta-" + player2name;
function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("palavra em caixa baixa:" + word);
    charAt1 = word.charAt(1);
    console.log(charAt1);
    lengthDivide1 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthDivide1);
    lengthMinus1 = word.length-1;
    charAt3= word.charAt(lengthMinus1);
    console.log(charAt3);
    removeCharAt1 = word.replace(charAt1,"_");
    removeCharAt2 = removeCharAt1.replace(charAt2,"_");
    removeCharAt3 = removeCharAt2.replace(charAt3,"_");
    console.log(removeCharAt3);
    questionWord = "<h4 id='wordDisplay'> P."+removeCharAt3 + "</h4>"
    input_box = "<br> Resposta : <input type='text' id='inputCheckBox'>"
    checkButton = "<br><br> <button class='btn btn-info' onclick = 'check()'> Checar </button>";
    row = questionWord + input_box + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
questionTurn = "player1";
answerTurn = "player2";
function check(){
    getAnswer = document.getElementById("inputCheckBox")
    answer = getAnswer.toLowerCase();
    console.log(answer);
    if(answer == word){
        if(answerTurn == "player1"){
            player1Score = player1Score +1;
            document.getElementById("player1Score").innerHTML = player1Score;
           }
           else{
           player2Score = player2Score + 1;
           document.getElementById("player2Score").innerHTML = player2Score;
           }
    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("playerQuestion").innerHTML = "Turno de perguntas:" + player2Name;
    }
    else{
        questionTurn = "player1"
        document.getElementById("playerQuestion").innerHTML = "Turno de perguntas:" + player1Name;
    }
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta" + player2Name;
    }
    else{
        answerTurn = "player";
        document.getElementById("playerAnswer").innerHTML = "Turno de resposta" + player1Name;
    }
    document.getElementById("output").innerHTML = "";
}