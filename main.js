student_Array=[];
function submit(){
name1=document.getElementById("student1").value;
name2=document.getElementById("student2").value;
name3=document.getElementById("student3").value;
name4=document.getElementById("student4").value;
student_Array.push(name1);
student_Array.push(name2);
student_Array.push(name3);
student_Array.push(name4);
console.log(student_Array);
document.getElementById("display").innerHTML=student_Array;
document.getElementById("button1").style.display="none";
document.getElementById("button2").style.display="inline-block";
}
function sort(){
student_Array.sort();
console.log (student_Array);
document.getElementById("display").innerHTML=student_Array;
}