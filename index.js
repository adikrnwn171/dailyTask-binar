const levelCharacter = 10

// kalau level lebih dari 10, maka boleh lanjut babak selanjutnya
if(levelCharacter > 15) {
    console.log("lanjut babak selanjutnya")
} else {
    console.log("latihan lagi di babak ini")
}



let student = {
    name: "adi",
    gender: "male"
}

// else if statement
// apakan student itu male
if(student.gender === "male") {
    console.log("ya dia male")
} else if(student.gender === "female") {
    console.log("dia female")
} else {
    console.log("tidak diketahui")
}