let heading = document.getElementById("title");
heading.style.color = "blue";
heading.style.fontSize = "30px";

let paragraph = document.getElementById("paragraph");
paragraph.style.color = "green";
paragraph.style.fontSize = "18px";

let anotherParagraph = document.getElementById("#another-paragraph");
anotherParagraph.style.color = "red";
anotherParagraph.style.fontSize = "16px";

let students = [
    { name: "John Doe", age: 20, major: "Computer Science" }
];
let studentInfo = document.getElementById("student-info");
let studentList = document.getElementById("student-list");
for (let student of students) {
    let listItem = document.createElement("li");
    listItem.textContent = `name: ${student.name}, age: ${student.age}, major: ${student.major}`;
    studentList.appendChild(listItem);
}
function clickMe() {
    document.getElementById("click-button").innerHTML = "This is javascript events!";
     
}

 let button = document.getElementById("myButton");

        button.addEventListener("click", function() {
            alert("Button clicked!");
        });