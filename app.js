// Chap # 14to16

// Question #01
// var std = []

// Question #02
// var std = new Array ();
// console.log(std);

// Question #03
// var std = ["muhammad", "sualeh", "ahmed", "siddiqui"];
// console.log(std);

// Question #04
// var num = [ 1, 2, 3, 4, 5];
// console.log(num);

// Question #05
// var boolean = [ true, false, false, true];
// console.log(boolean);

// Question #06
// var mix = [false, "sualeh" , 1 , "siddiqui", true];
// console.log(mix);

// Question #07
// var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PHD"]
// document.write("<h1>Qualificatios</h1>");
// document.write("<ol><li>" + edu[1] + "</li><li>" + edu[2] + "</li><li>" +
//     edu[3] + "</li><li>" + edu[4] + "</li><li>" + edu[5] + "</li><li>"
//     + edu[6] + "</li><li>" + edu[7] + "</li><li>" + edu[8] + "</li></ol>"
// );

// Question #08
// var std = ["Sualeh", "Mohib", "Rayyan"];
// var scr = [480, 230, 320];
// var tot = 500;
// document.write("Score of " + std[0] + " is " + scr[0] + ". Percentage: " + (scr[0]/tot*100) + "% <br />");
// document.write("Score of " + std[1] + " is " + scr[1] + ". Percentage: " + (scr[1]/tot*100) + "% <br />");
// document.write("Score of " + std[2] + " is " + scr[2] + ". Percentage: " + (scr[2]/tot*100) + "% <br />");

// Question #09
// var colors = ["Red", "Blue", "Green", "Yellow"];
// window.alert(colors);

// Question #09(a)
// var usercolor = window.prompt("which colors you want to add at last?");
// colors.push(usercolor);
// document.write(colors);

// Question #09(b)
// var usercolor = window.prompt("which colors you want to add in begining?");
// colors.unshift(usercolor);
// document.write(colors);

// Question #09(c)
// colors.unshift("Gray", "White");
// document.write(colors);

// Question #09(d)
// colors.shift()
// document.write(colors);

// Question #09(e)
// colors.pop()
// document.write(colors);

// Question #09(f)
// var index = window.prompt("At which index you want to add color?");
// var color = window.prompt("Which color you want to add?");
// colors.splice(index, 0, color)
// document.write(colors);

// Question #09(g)
// var index = window.prompt("At which index you want to delete color?");
// var numColor = window.prompt("How many color you want to delete?");
// colors.splice(index, numColor)
// document.write(colors);

// Question #10
// var score = [320, 230, 420, 180];
// document.write("Score of students: " + score);

// score.sort();
// document.write("<br />Ordered score of students: " + score);

// Question #11
// var city =  [ "Lahore ", " Islamabad "," Karchi ", " Quetta ", " Rawalpindi"]
// var selectCity = city.slice(1,4)
// document.write("Cities: " + city);
// document.write("<br />Selected cities: " + selectCity);

// Question #12
// var array = ["This ", "is ", "my ", "cat"];
// document.write("<h1>Array:</h1>"+array);
// document.write("<h1>String:</h1>" + array.join(" "));

// Question #13
// var device = [];
// // In
// device.unshift("Keyboard");
// device.unshift("Mouse");
// device.unshift("Speaker");
// device.unshift("Printer");
// device.unshift("Moniter");
// document.write("<h2>Devices: </h2>"+device);
// // Out
// document.write("<h3>Out</h3> " + device.pop());
// document.write("<h3>Out</h3> " + device.pop());
// document.write("<h3>Out</h3> " + device.pop());
// document.write("<h3>Out</h3> " + device.pop());
// document.write("<h3>Out</h3> " + device.pop());

// Question #14
// var device = [];
// // In
// device.unshift("Keyboard");
// device.unshift("Mouse");
// device.unshift("Speaker");
// device.unshift("Printer");
// device.unshift("Moniter");
// document.write("<h2>Devices: </h2>"+device);
// // Out
// document.write("<h3>Out</h3> " + device.shift());
// document.write("<h3>Out</h3> " + device.shift());
// document.write("<h3>Out</h3> " + device.shift());
// document.write("<h3>Out</h3> " + device.shift());
// document.write("<h3>Out</h3> " + device.shift());

// Question #15
// var mobile =["Apple", "Samsung", "Motorola", "Nokia", "Vivo", "Realme"]
// document.write("<h2>Mobile Manufacturers</h2>"+
//     "<select><option>"+ mobile[0] +"</option>"+
//     "<option>"+ mobile[1] +"</option>"+
//     "<option>"+ mobile[2] +"</option>"+
//     "<option>"+ mobile[3] +"</option>"+
//     "<option>"+ mobile[4] +"</option>"+
//     "<option>"+ mobile[5] +"</option></select>"
// );
