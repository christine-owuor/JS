var questions =[
    {
    	question: "How many bones does a human body have?",
    	answer: 206
    },

    {
    	question:"How old is Madowo?",
    	answer: 35
    },

    {
    	question:"How many counties does kenya have?",
    	answer:47
    },
]

var score =0;
for(index=0; index <questions.length; index++){
	var question= questions[index];
	var answer=prompt(questions.question);
}

 if(answer ==question.answer){
 	score ++;
      }


 	

 	document.write(" You  got " + score + " questions correct ");
 	//alert("congragulations, score" + score);
 	//}
 
// console.log(answer);
