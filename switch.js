// object
let student = {
    name: "wira",
    gender: "male",
    rank: 1
}

// arrray of object
let students = [
    {
        name: "Wira",
        gender: "male"
    },
    {
        name: "Helmy",
        gender: "male"
    },
    {
        name: "Oryza",
        gender: "female"
    },
    {
        name: "Riza",
        gender: "female"
    }
]

// switch statement
// print nama2 student yang gendernya cewe
// student = objek nya, rank nya = key dari objek
switch (student.rank) {
    case 1:
        console.log("Dia mendapatkan medali emas")
        break;
    case 2:
        console.log("Dia menda;atkan medali perak")
        break;
    case 3:
        console.log("Dia mendapatkan medali perunggu")
    default:
        console.log("Dia tidak dapat medali apa2")
        break;
}