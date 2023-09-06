let questionsNumber = document.querySelector('.count .spa'); //1- select the place where have count of questions
let bullets = document.querySelector(".bullets") //2-select the div what contain spans(bullets)
let question = document.querySelector("#quizTitle") //3-quiz area created to put the title in it
let answers = document.querySelector(".answers");//4-answers area created to put the answers in it
let submitButton = document.querySelector('.sumit-button input'); //select sumit button
let resultContainer =document.querySelector('.result');
let quizInfo = document.querySelector('.quiz-info')
 
 

 
let counterQues = 0 ; //counter to get all questions 0 1 2 3 4 
let rightAnswer = 0;  //use 1th in checkanswer fun
let createBullet;
let choosenAnswer;
//*fetch data and all functions call here after fetch data**\\
async function getQuestions() {
    var questions = await fetch("questions.json");
    var finalRespondQuestions = await questions.json();
    //**get the length/number of questions to make bullets**\\
    questionsCount = finalRespondQuestions.length;
 
     createBullets(questionsCount)

    //**3-add data of quetions */
    addQuetionData(finalRespondQuestions[counterQues], questionsCount)


    //**when click */
    submitButton.onclick =()=>{
        //get rightanswer
       let rightAnswer = finalRespondQuestions[counterQues].right_answer;
       counterQues++;
        //**4- */
    checkAnswer(rightAnswer)
        //**5- */
        question.innerHTML='';
        answers.innerHTML='';
    addQuetionData(finalRespondQuestions[counterQues], questionsCount)
 
    // handle-bullets
    handleBullets(rightAnswer,choosenAnswer);
    showResult(questionsCount);
};
}
getQuestions();

function createBullets(number) {
    //**the number refer to count of questions**\\
    //**put the number in span of count**\\
    questionsNumber.innerHTML = number;
    
    for (let i = 0; i < number; i++) {
        //**2-create bullet according to num of questions**\\
        createBullet = document.createElement('span');
        bullets.appendChild(createBullet);  
    }

}


//**3-create (title of questions and radio button) */
//obj contain all index(title with answers)
function addQuetionData(obj, count) {
    if (counterQues<count){
    

    //create title question
    let questionTitle = document.createElement('h3');
    
    let questionText = document.createTextNode(obj['title']);
    questionTitle.appendChild(questionText);
    question.appendChild(questionTitle)

    
    //answers
    for (let i = 1; i <= 4; i++) {
        //create div that contain answers
        let divAnswer = document.createElement('div');
        divAnswer.className = 'answer';
        
        let radioInput = document.createElement('input');
        //add to radio-input (name-type-id-data)
        radioInput.name = ('question');
        radioInput.type = ('radio');
        radioInput.id = (`answer_${i}`);
        radioInput.dataset.answers = obj[`answer_${i}`];
        radioInput.style.margin = "10px";
        // radioInput.style.width='100%';
        
        let label = document.createElement('label');
        label.htmlFor = `answer_${i}`;
        label.style.width='90%';
        //label contain
        let labelText = document.createTextNode(obj[`answer_${i}`]);
        
        label.appendChild(labelText);
        divAnswer.append(radioInput); 
        divAnswer.append(label);
        answers.appendChild(divAnswer);
       
    } 
    }

}



function checkAnswer(rAnswer){ 
    //**get all answers by name of **''\\
    let answers = document.getElementsByName('question')
    choosenAnswer ;
    //**loop for answers */
   for (let i =0 ; i<answers.length;i++){
    if(answers[i].checked){
          //that mean put the data of answer in var             
        choosenAnswer = answers[i].dataset.answers;
    }
   } 
   if(rAnswer == choosenAnswer){
    rightAnswer ++;
    // console.log("right")
    
   }
}

function handleBullets(right,chossen){
    //get all bullets
    let allBullets = document.querySelectorAll(".quiz-area .questions-counter .bullets  span");

    let arrayBullets = Array.from(allBullets);
    arrayBullets.forEach((span,index) => {
        if((counterQues-1) === index){
            if(right == chossen){
                span.className='on';
            }else{
                span.className='onwrong';
            }
           
        }
    })    
}

//count refer to number of questions
function showResult(count){
    let theResult ;
if(counterQues === count){
            question.remove();
            answers.remove();
            submitButton.remove();
            bullets.remove();
            quizInfo.remove();
    
        if(rightAnswer == 0){
            theResult = `<span class='bad'>Repeat Your Quiz</span> , ${rightAnswer} From ${count}`;
        }
        else if (rightAnswer > count / 2 && rightAnswer < count) {
            theResult = `<span class='good'>Good</span> , ${rightAnswer} From ${count}`;
          } else if (rightAnswer === count) {
            theResult = `<span class='perfect'>Perfect</span> , All Answers Is Good`;
          }else if(rightAnswer == 0){
            theResult = `<span class='good' >Perfect</span> , All Answers Is Good`;
          }
           else {
            theResult = `<span class='bad'>You Need More Practice</span>, ${rightAnswer} From ${count}`;
          }
          resultContainer.innerHTML = theResult;
          resultContainer.style.padding = "10px";
          resultContainer.style.backgroundColor = "white";
          resultContainer.style.marginTop = "10px";
     
}
}

 
