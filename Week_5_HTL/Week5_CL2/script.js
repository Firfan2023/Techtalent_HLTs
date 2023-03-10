

function generateAnswer() {

  let username = document.getElementById("username").value;

  let question = document.getElementById("question").value;


  let answers = [

    "It is certain",

    "It is decidedly so",

    "Try again",

    "Unsure for now",

    "Don't count on it",

    "Don't think so",

    "Not looking too good",

    "Probably",

    "Not really",

    "Why not"


  ];



  let randomIndex = Math.floor(Math.random() * answers.length);  

  let answer = answers[randomIndex];



  document.getElementById("answer").innerHTML = `${username}, you asked: ${question}? <br> The answer is:<b> ${answer}!</b><br><br>`;

  document.getElementById("convert-btn").style.display = "none";
  document.getElementById("ask-again").style.display = "block";

}


function askAnother() {
  document.getElementById("username").value = "";
  document.getElementById("question").value = "";
  document.getElementById("answer").innerHTML = "";
  document.getElementById("ask-again").style.display = "none";
  document.getElementById("convert-btn").style.display = "inline";
}


function showFeeling() {
  document.getElementById("ask-again").style.display = "none";
  document.getElementById("feeling").style.display = "block";
}


function rateFeeling() {
  let rating = document.getElementById("feeling-rating").value;

  if (rating < 6) {
    let quotes = [
      "Believe in yourself! Have faith in your abilities!",
      "Your only limit is the one you set for yourself!",
      "You're braver than you believe, and stronger than you seem, and smarter than you think!",
      "Problems are not stop signs, they are guidelines!",
      "Success usually comes to those who are too busy looking for it."

    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomIndex];

    document.getElementById("container").innerHTML = `<h1>Thank you, Goodbye!</h1><p>${quote}</p>`;
  } 

  else {
    document.getElementById("container").innerHTML = "<h1>Thank you, Goodbye!</h1><p>Keep up the good work!</p>";
  }

}


  /* FYI, user story 1 is applied - asks if user wants to ask another question (Yes / No)
          user story 2 is applied - asking user how is he/she feeling in a range between 1 and 10, if the answer is less than 6 displaying a motivational message. 
          user story is 3 applied more than 7 answer options, all together 10 answers are available. */