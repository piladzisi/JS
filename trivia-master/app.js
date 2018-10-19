
function print(message) {
  var doc = document.getElementById("output");
  doc.innerHTML = message;
}


/*
var questions = ['Which video game studio created the popular online game Fortnite?', 'Who was the king of Britain during the American revolutionary war?', '“Arco iris” is the Spanish term for what natural phenomenon?', 'Mario Kart is a video game series publish by which company?', 'The first person shooter video game Doom was first released in what year?'];
var answers = ['Epic Games', 'George III', 'Rainbow', 'Nintendo', '1993'];
var custAnswer = [];
var rightAnswer = [];
var wrongAnswer = [];

for (var i = 0; i < questions.length; i++) {
  custAnswer = prompt(questions[i]);  
}

for (var i = 0; i < custAnswer.length; i++) {
   for (var x = 0; x < answers.length; i++) {
     if (custAnswer[i] === answers[x]) {
       rightAnswer.push(answers[x]);
       console.log(rightAnswer);
     }
   } 
  console.log(rightAnswer);
}

console.log(rightAnswer);
*/

var questions = [
   ['Which video game studio created the popular online game Fortnite?', 'Epic Games'],
   ['Who was the king of Britain during the American revolutionary war?', 'George III'],
   ['“Arco iris” is the Spanish term for what natural phenomenon?', 'Rainbow'],
   ['Mario Kart is a video game series publish by which company?', 'Nintendo'],
   ['The first person shooter video game Doom was first released in what year?', '1993']
];


function buildList(list) {
  var listHtml = '<ol>';
  for (var i = 0; i < list.length; i+= 1) {
    listHtml += '<li>' + list[i] + '</li>';    
  } 
  listHtml += '</ol>'
  return listHtml;
}


var correctAnswers = [];
var wrongAnswer = [];
var question;
var answers;
var response;
var html;

for (var i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  
  if (response.toLowerCase() === answer.toLowerCase()){    
     correctAnswers.push(response);
   } else {
     wrongAnswer.push(response);
   }
}

html = "You got " + correctAnswers.length + " question(s) right, and " + wrongAnswer.length + " question(s) wrong";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correctAnswers);
html += '<h2>You got these questions WRONG:</h2>';
html += buildList(wrongAnswer);  
print(html);




