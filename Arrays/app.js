// =====Chapter # Arrays----------


// ----Ques#1
var stdArr = []
console.log(stdArr)

//  ----Ques#2
var stdArr = []
stdArr[0] = "Talha";
stdArr[1] = "Web and Mobile Development";
stdArr[2]= "Sec-A";
console.log(stdArr)


//  ----Ques#3
var stringArr = [""];
console.log(stdArr)


//  ----Ques#4
var numberArr = [];
console.log(numberArr)


//  ----Ques#5
var booleanArr = true/false;
console.log(booleanArr)


//  ----Ques#6
var mixedArr = ["Talha",1, true ];
console.log(mixedArr)


//  ----Ques#7
document.write("<h1>Qualifications:</h1>")
var eduArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
document.write("1)" + " " +eduArr[0] + "<br>")
document.write("2)" + " " +eduArr[1] + "<br>")
document.write("3)" + " " +eduArr[2] + "<br>")
document.write("4)" + " " +eduArr[3] + "<br>")
document.write("5)" + " " +eduArr[4] + "<br>")
document.write("6)" + " " +eduArr[5] + "<br>")
document.write("7)" + " " +eduArr[6] + "<br>")
document.write("8)" + " " +eduArr[7] + "<br>" + "<br>")


//  ----Ques#8
var stdNamearr = ["Micheal", "John", "Tony"];
var stdScrarr = [320 , 230, 480];
var percentageArr =[stdScrarr[0]/500*100, stdScrarr[1]/500*100, stdScrarr[2]/500*100]
document.write("Score of " + " " + stdNamearr[0] + " " + stdScrarr[0] +"." +" " +"Percentage:"+" "+percentageArr[0]+"%"+"<br>")  
document.write("Score of " + " " + stdNamearr[1] + " " + stdScrarr[1] +"." +" " +"Percentage:"+" "+percentageArr[1]+"%"+"<br>")  
document.write("Score of " + " " + stdNamearr[2] + " " + stdScrarr[2] +"." +" " +"Percentage:"+" "+percentageArr[2]+"%"+"<br>"+"<br>")  


//  ----Ques#9
var clrArr = ["violet", "indigo", "blue", "green", "yellow",];
document.write("<h1> Color names </h1>")
document.write(clrArr+"<br>")
// part-a
var clrArr1 = ["violet", "indigo", "blue", "green", "yellow",];
var userClr = prompt("Enter Color name to add in begining");
clrArr1.unshift(userClr)
document.write("<h1> Color Add In Begining </h1>")
document.write(clrArr1+"<br>")
// part b
var clrArr2 = ["violet", "indigo", "blue", "green", "yellow",];
var userClr = prompt("Enter Color name to add in end");
clrArr2.push(userClr)
document.write("<h1> Color Add In End </h1>")
document.write(clrArr2+"<br>")
// part c
clrArr.unshift("yellow","red")
document.write("<h1> Adding two Colors</h1>")
document.write(clrArr+"<br>")
// pard d
clrArr.shift()
document.write("<h1> Delete begining color</h1>")
document.write(clrArr+"<br>")
// part e
clrArr.pop()
document.write("<h1> Delete last color</h1>")
document.write(clrArr+"<br>")
// part f
var indexLocation = prompt("Enter Index location for adding :eg(0-4)");
var clrName = prompt("Enter Color Name");
clrArr.splice(indexLocation, 0 , clrName)
document.write("<h1> After Adding</h1>")
document.write(clrArr)
// part g
var indexLocation2 = prompt("Enter Index location For Deleting Color :eg(0-4)");
var dltClr = prompt("How Many Color Do you Want to Delete?") ;
clrArr.splice(indexLocation2, dltClr)
document.write("<h1> After deleting</h1>")
document.write(clrArr)


//  ----Ques#10
document.write("<h1> Sorting nember</h1>")
var stdScore = [320,230,480,120];
document.write("Score of students:"+" "+stdScore+"<br>")
stdScore.sort()
document.write("Ordered Score of students:"+" "+stdScore+"<br>")


//  ----Ques#11
document.write("<h1>Cities List:</h1>")
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshsawar"];
document.write(cities+"<br>")
var copyCites = cities.slice(2,4);
document.write("<h1>Selected Cities:</h1>")
document.write(copyCites+"<br>"+"<br>")


//  ----Ques#12
document.write("<h1>Arrays:</h1>")
var arr = ["This",  "is ", " my ",  "cat"];
document.write(arr)
document.write("<h1>Strings:</h1>")
var joinArr = arr.join("")
document.write(joinArr)


//  ----Ques#13
document.write("<h1>Devices:</h1>")
var deviceArr = ["Keyboard","Mouse","printer","Monitor"];
document.write(deviceArr)
document.write("Out:"+"<br>"+deviceArr[0]+"<br>")
document.write("Out:"+"<br>"+deviceArr[1]+"<br>")
document.write("Out:"+"<br>"+deviceArr[2]+"<br>")
document.write("Out:"+"<br>"+deviceArr[3]+"<br>")


//  ----Ques#14
document.write("<h1>Devices2:</h1>")
var deviceArr2 = [];
deviceArr2[0] ="Keyborad";
deviceArr2[1] ="mouse";
deviceArr2[2] ="Printer";
deviceArr2[3] ="monitor";
document.write(deviceArr2)
document.write("Out:"+"<br>"+deviceArr2[0]+"<br>")
document.write("Out:"+"<br>"+deviceArr2[1]+"<br>")
document.write("Out:"+"<br>"+deviceArr2[2]+"<br>")
document.write("Out:"+"<br>"+deviceArr2[3]+"<br>")



//  ----Ques#14
document.write("<h1>Mobiles:</h1>")
var mobileCompanies = ["Apple","Samsung"," Motorola", "Nokia", "Sony" , "Haier"];
document.write("<select><option>"+mobileCompanies[0]+"</option>")
document.write("<option>"+mobileCompanies[1]+"</option>")
document.write("<option>"+mobileCompanies[2]+"</option>")
document.write("<option>"+mobileCompanies[3]+"</option>")
document.write("<option>"+mobileCompanies[4]+"</option>")
document.write("<option>"+mobileCompanies[5]+"</option>"+"</select>")
