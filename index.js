let quesAns = [{
    quest: "Question 1) One who can speak two languages?",
    ans: "bilingual"
  }, {
    quest: "Question 2) Word with the same meaning?",
    ans: "synonym"
  },
  {
    quest: "Question 3) One who talk in sleep?",
    ans: "somniloquy"
  },
  {
    quest: "Question 4) Life history written by oneself?",
    ans: "autobiography"
  },
  {
    quest: "Question 5) The person who collects coins?",
    ans: "numismatist"
  },
  {
    quest: "Question 6) The person who collects stamps?",
    ans: "philatelist"
  },
  ]
  let readInput = require("readline-sync");
  let input, score=0;
  function quizGame(q) {
    for(let i=0; i<q.length; i++){
      input = (readInput.question(q[i].quest));
      if(input===q[i].ans){
        console.log("Correct Answer!!!");
        ++score;
      }
      else{
        --score;
        console.log("Wrong Answer!!!")
      }
    }
    console.log("Your final score:"+score);
  }
  let contestant = readInput.question("What is your name? ")
  console.log("Hello "+contestant);
  console.log("Welcome to the quiz game. Please answer the questions in all small letters")
  quizGame(quesAns);