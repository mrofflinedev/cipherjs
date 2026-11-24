let students=["Collins","Esther","Mercy"];
console.log("Students: ", students);
console.log("First Student: ", students[0]);
console.log("Last Student: ", students[students.length-1]);

students.push("Stephen"); //Adding a new student to the array
console.log("UpdatedStudents: ",students);

students.pop(); //Removing the last student from the array
console.log("After Removing Last Student: ", students);

students.shift(); //Removing first student from the array
console.log("After Remoing The First Student:" , students);
   
students.unshift("Edward") // Adding a new student at the beggining of the array
console.log("After Adding New Student at Beginning:" , students);
