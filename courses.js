const courses = [
{
title: "HTML & CSS",
lessons: ["HTML", "Forms", "Flexbox", "Grid"]
},
{
title: "JavaScript Basics",
lessons: ["Variables", "Functions", "DOM", "Events"]
},
{
title: "React Fundamentals",
lessons: ["Components", "Props", "State", "Hooks"]
},
{
title: "SQL Database",
lessons: ["Queries", "Joins", "Indexes", "Procedures"]
},
{
title: "Python",
lessons: ["Syntax", "Functions", "Modules", "OOP"]
},
{
title: "C# Programming",
lessons: ["Basics", "OOP", "LINQ", "ASP.NET"]
},
{
title: "Angular",
lessons: ["Components", "Services", "Routing", "Forms"]
},

];

//  GET SAVED DATA
let completed = JSON.parse(localStorage.getItem("completedCourses")) || [];

// CARD VIEW
const container = document.getElementById("courseContainer");

if(container){

courses.forEach(course => {

let card = document.createElement("div");
card.className = "courseCard";

//  lessons list
let lessonList = "<ol>";
course.lessons.forEach(l => {
lessonList += `<li>${l}</li>`;
});
lessonList += "</ol>";

//  button
let btn = document.createElement("button");
btn.className = "btn mt-2";

//  CHECK COMPLETED
if(completed.includes(course.title)){
btn.textContent = "Completed";
btn.disabled = true;
btn.classList.add("btn-secondary"); 
}else{
btn.textContent = "Complete";
btn.classList.add("btn-success"); 
}

//  CLICK FUNCTION
btn.onclick = function(){

let completed = JSON.parse(localStorage.getItem("completedCourses")) || [];

if(!completed.includes(course.title)){
completed.push(course.title);
localStorage.setItem("completedCourses", JSON.stringify(completed));
}

// UI update
btn.textContent = "Completed";
btn.disabled = true;
btn.classList.remove("btn-success");
btn.classList.add("btn-secondary"); 

};

card.innerHTML = `
<h5>${course.title}</h5>
${lessonList}
`;

card.appendChild(btn);

container.appendChild(card);

});

}