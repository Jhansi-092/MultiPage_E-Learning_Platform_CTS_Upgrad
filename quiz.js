
const questions = [

{ q:"Which keyword creates variable in JS?", options:["var","loop","int","char"], answer:"var" },

{ q:"Which tag creates link in HTML?", options:["a","p","div","span"], answer:"a" },

{ q:"CSS stands for?", options:["Cascading Style Sheets","Creative Style","Computer Style","Color Style"], answer:"Cascading Style Sheets" },

{ q:"Which is JS library?", options:["jQuery","HTML","CSS","SQL"], answer:"jQuery" },

{ q:"Which Bootstrap class is for button?", options:["btn","button","click","form"], answer:"btn" },

{ q:"Which is Python keyword?", options:["def","function","var","let"], answer:"def" },

{ q:"Which symbol is used for id selector in CSS?", options:["#",".","*","@"], answer:"#"}, 

{ q:"Which method selects element in JS?", options:["getElementById","select","find","fetch"], answer:"getElementById"},

{ q:"Which is database language?", options:["SQL","HTML","CSS","JS"], answer:"SQL"},

{ q:"Which is C# framework?", options:[".NET","React","Bootstrap","Node"], answer:".NET"}

];


//  LOAD QUIZ
function loadQuiz(){

let container = document.getElementById("quizArea");
container.innerHTML = "";

questions.forEach((item,index)=>{

let block = `
<div class="card p-3 mb-3 shadow-sm">

<p><strong>${index+1}. ${item.q}</strong></p>

${item.options.map(opt =>

`<div class="form-check">
<input class="form-check-input"
type="radio"
name="q${index}"
value="${opt}">

<label class="form-check-label">
${opt}
</label>
</div>`

).join("")}

</div>
`;

container.innerHTML += block;

});

}

//  LOAD ON START
document.addEventListener("DOMContentLoaded", loadQuiz);


//  SUBMIT QUIZ
function submitQuiz(){

let score = 0;

questions.forEach((q,i)=>{

let ans = document.querySelector(`input[name=q${i}]:checked`);

if(ans && ans.value === q.answer){
score++;
}

});

//  PERCENTAGE
let percentage = Math.round((score / questions.length) * 100);

//  RESULT LOGIC
let message = "";
let colorClass = "";

if(score <= 3){
message = "❌ Need Improvement";
colorClass = "bg-danger text-white";
}
else if(score >= 7){
message = "✅ Excellent Performance";
colorClass = "bg-success text-white";
}
else{
message = "🙂 Average Performance ";
colorClass = "bg-warning";
}

//  SAVE
localStorage.setItem("quizScore", score);

//  RESULT UI
document.getElementById("resultBox").innerHTML = `
<div class="card p-3 shadow-sm text-center ${colorClass}">
<h4>Your Score: ${score} / ${questions.length}</h4>
<h5>${percentage}%</h5>
<p>${message}</p>
</div>
`;

//  AUTO SCROLL
document.getElementById("resultBox").scrollIntoView({
behavior: "smooth"
});

}