// // Hello world
// console.log("Hello world!!")


// Các hàm có sẵn - built-in

// /*
// Alert
// - Dùng để hiển thị ra màn hình một thông báo
// - syntax:

// alert($value)
// */

// alert("Hello world!")

// /*
// Prompt
// - Dùng để hiển thị 1 hộp thoại và cho phép có 1 input để nhập text

// - syntax:
// prompt($message)

// */

// console.log( prompt("What is your name?") )


// // Biến (Variables) trong JS
// //  syntax: var tenBien = $giaTri

// var myName = "Khôi"
// console.log(myName)


// Kiểu dữ liệu trong JS

// String
var nameOfTri = "Tri"
var nameOfHoang = "Hoang"
var nameOfHuy = "Huy"

console.log(nameOfHoang, nameOfHuy, nameOfTri)

// Number
var ageOfKhoi = 27
console.log("Khoi: ", ageOfKhoi)

// Boolean  - True | False
var doYouMarryMe = true
console.log(doYouMarryMe)

// Array 
var students = ["Tri", "Hoang", "Huy"] // 0 , 1 ,2 
console.log("students: ", students)


var triInArray = students[0]
console.log("triInArray: ", triInArray)

// Object  
var khoi = {
  myName: "Khoi",
  myAge: 27,
  children: false
}

console.log(khoi)

var khoiChildren = khoi.children;
console.log("khoiChildren: ", khoiChildren)