import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

var incorrects=0;
var corrects=0;

let correctbutton = document.querySelector("#Apply");
correctbutton.addEventListener("click",()=>{
    var run=0;
    sendApiRequest()
});

async function sendApiRequest(){
  
    document.getElementById("score").innerHTML= ("Correct: "+corrects+" / "+"Inccorect: "+incorrects);
    

    document.getElementById("Apply").disabled = true;
    
    

    var apiString = "https://opentdb.com/api.php?amount=1";
    var difficulty = document.getElementById("diff").value;
    var Category = document.getElementById("categories").value;
    apiString = apiString + Category + difficulty + "&type=multiple";
let response = await fetch(apiString);

let data = await response.json();

document.querySelector("#outputdiff").innerHTML = `Difficulty: ${data.results[0].difficulty} `

document.querySelector("#category").innerHTML = `Category: ${data.results[0].category} `

document.querySelector("#output").innerHTML = `Question: ${data.results[0].question} `

var choice1 = Math.floor(Math.random()*4)+1;
var choice2 = Math.floor(Math.random()*4)+1;
var choice3 = Math.floor(Math.random()*4)+1;
var choice4 ;

while (choice1===choice2) {
     choice2 = Math.floor(Math.random()*4)+1;
  }
while(choice1===choice3||choice2===choice3){
    choice3 = Math.floor(Math.random()*4)+1;
}

if(!(choice3===1||choice2===1||choice1===1)){
    choice4=1;
}
else if(!(choice3===2||choice2===2||choice1===2)){
    choice4=2;
}
else if(!(choice3===3||choice2===3||choice1===3)){
    choice4=3;
}
else if(!(choice3===4||choice2===4||choice1===4)){
    choice4=4;
}

document.getElementById("answer"+choice2).disabled = false;
document.getElementById("answer"+choice3).disabled = false;
document.getElementById("answer"+choice4).disabled = false;
document.getElementById("answer"+choice1).disabled = false;
document.getElementById("i").style.backgroundColor = "#ffffff";


document.querySelector("#answer"+choice1).innerHTML =  data.results[0].correct_answer;

document.querySelector("#answer"+choice2).innerHTML = data.results[0].incorrect_answers[0];

document.querySelector("#answer"+choice3).innerHTML = data.results[0].incorrect_answers[1];

document.querySelector("#answer"+choice4).innerHTML = data.results[0].incorrect_answers[2];



let correctbutton = document.querySelector("#answer"+choice1);
correctbutton.addEventListener("click",()=>{
    document.getElementById("answer"+choice2).disabled = true;
    document.getElementById("answer"+choice3).disabled = true;
    document.getElementById("answer"+choice4).disabled = true;
    document.getElementById("answer"+choice1).disabled = true;
    document.getElementById("i").style.backgroundColor = "#008000";
    document.getElementById("Apply").disabled = false;
   corrects= corrects+1;

});

let incorrect_answers2 = document.querySelector("#answer"+choice2);
incorrect_answers2.addEventListener("click",()=>{
    document.getElementById("answer"+choice2).disabled = true;
    document.getElementById("answer"+choice3).disabled = true;
    document.getElementById("answer"+choice4).disabled = true;
    document.getElementById("answer"+choice1).disabled = true;
    document.getElementById("i").style.backgroundColor = "#ff0000";
    document.getElementById("Apply").disabled = false;
    incorrects = incorrects+1;
});

let incorrect_answers3 = document.querySelector("#answer"+choice3);
incorrect_answers3.addEventListener("click",()=>{
    document.getElementById("answer"+choice2).disabled = true;
    document.getElementById("answer"+choice3).disabled = true;
    document.getElementById("answer"+choice4).disabled = true;
    document.getElementById("answer"+choice1).disabled = true;
    document.getElementById("i").style.backgroundColor = "#ff0000";
    document.getElementById("Apply").disabled = false;
    incorrects=incorrects+1;
});

let incorrect_answers4 = document.querySelector("#answer"+choice4);
incorrect_answers4.addEventListener("click",()=>{
    document.getElementById("answer"+choice2).disabled = true;
    document.getElementById("answer"+choice3).disabled = true;
    document.getElementById("answer"+choice4).disabled = true;
    document.getElementById("answer"+choice1).disabled = true;
    document.getElementById("i").style.backgroundColor = "#ff0000";
    document.getElementById("Apply").disabled = false;
    incorrects=incorrects+1;
});


}

