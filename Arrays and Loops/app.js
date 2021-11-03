//----Chapter # Arrays And Loop


// -----Ques#1
var arrOfarys = [[],[],[]];


// -----Ques#2
document.write("<h1>Matrix:</h1>")
var arrOfarys =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write(arrOfarys[0].join("")+"<br>")
document.write(arrOfarys[1].join("")+"<br>")
document.write(arrOfarys[2].join("")+"<br>")


// -----Ques#3
document.write("<h1>Counting 1-10:</h1>")
for(var i = 1; i<=10; i++ ){
    document.write(i+"<br>")
}


// -----Ques#4
document.write("<h1>Table:</h1>")
var tableNumber = parseInt(prompt("Enter Table Number"));
var tableLength = parseInt(prompt("Enter Table Length"));
for(var i = 1; i<=tableLength; i++){
    document.write(tableNumber+" "+"X"+" "+i+" "+"="+tableNumber*i+"<br>")
}


// -----Ques#5
document.write("<h1>Fruits:</h1>")
var fruitsArr = ["apple","banana","mango","orange","strawberry"];
document.write(fruitsArr[0])
document.write(fruitsArr[1])
document.write(fruitsArr[2])
document.write(fruitsArr[3])
document.write(fruitsArr[4])
for(var i = 0; i<=4; i++){
    document.write("Element At Index"+i+" "+"is"+" "+fruitsArr[i]+"<br>")
}


// -----Ques#6
document.write("<h1>Counting Series:</h1>")
// part-a
document.write("<h3>Counting:</h3>")
for(var i = 1; i<=15; i++){
    document.write(i+",")
}
// part-b
document.write("<h3>Reverse Counting:</h3>")
for(var i = 10; i>=1; i-- ){
    document.write(i+",")
}
// part-c
document.write("<h3>Even Numbers:</h3>")
for(var i = 0; i<=10; i++ ){
    document.write(i*2+",")
}
// part-d
document.write("<h3>Odd Numbers:</h3>")
for(var i = 1; i<=19; i++ ){
    document.write(i++ +",")
}
// part-e
document.write("<h3>Series Numbers:</h3>")
for(var i = 1; i<=10; i++ ){
    document.write(i*2+"k"+" ")
}


// -----Ques#7
document.write("<h1>HM Bakery:</h1>")
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var takeOrder = prompt("Welcome To HM Bakery.What do you want to buy from our bakery");
var order = true
for (var i = 0; i < bakeryItems.length; i++) {
    if (takeOrder === bakeryItems[i]) {
        document.write(takeOrder + " is <strong>Available</strong> at index " + i + " is " + bakeryItems[i] + "<br>");
        order = false
    }

}
if (order === true) {
    document.write("We are Sorry " + takeOrder + " is <strong>Not Available</strong> in our bakkery" + "<br>");
}

// -----Ques#8
document.write("<h1>Max Number:</h1>")
var number = [24,53,78,91,12];
document.write("Array items is:"+" "+number+"<br>")
document.write("The largest number is:"+" "+Math.max(...number))


// -----Ques#9
document.write("<h1>Min Number:</h1>")
var number2 = [24, 53, 78, 91, 12];
document.write("Array items is:"+" "+number2+"<br>")
document.write("The largest number is:"+" "+Math.min(...number2))


// -----Ques#10
document.write("<h1>5 to 100:</h1>")
for(var i=1; i<=20;i++){
    document.write(5*i+","+" ")
}

