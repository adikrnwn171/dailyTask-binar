// while loops = salah satu cara untuk kita melakukan iteration
// while (condition)
// kondisinya tuh print angka 1-100
let number = 1
while(number <= 100){

    console.log(number)
    number ++
}

// kondisi : print 1-100 tapi angka perkalian 5
number = 1
while (number <= 100) {
  if (number % 5 === 0) {
    console.log(number)
  }
  number ++
}

// for loops
// for (variable;condition;update)
// i++ === i + 1, i-- === i - 1
for (let i = 0; i <= 100 ; i++) {
    // print tiap angka kelipatan 3, ini kelipatan
    if(i % 3 === 0){
        console.log("ini kelipatan 3")
    }  else{
         console.log(i)
    }    
}


const person = [
    
        {
          "_id": "640b3d4c381dc963eb2d019b",
          "isActive": true,
          "age": 22,
          "eyeColor": "blue",
          "name": "Clarissa David",
          "gender": "female",
          "address": "311 Virginia Place, Websterville, New York, 9008",
          "favoriteFruit": "banana"
        },
        {
          "_id": "640b3d4cfc489eeeefc17d44",
          "isActive": false,
          "age": 28,
          "eyeColor": "brown",
          "name": "Wilkerson Marks",
          "gender": "male",
          "address": "441 Wakeman Place, Hilltop, Oregon, 9251",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4c51bafed8251c4912",
          "isActive": false,
          "age": 34,
          "eyeColor": "green",
          "name": "Sandy Mcneil",
          "gender": "female",
          "address": "298 Schaefer Street, Glenville, California, 7779",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4c451ae3115b8deb37",
          "isActive": false,
          "age": 27,
          "eyeColor": "brown",
          "name": "Blake Tanner",
          "gender": "male",
          "address": "804 Bayard Street, Clara, South Carolina, 3999",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4c0986d175e3166366",
          "isActive": false,
          "age": 40,
          "eyeColor": "brown",
          "name": "Isabelle Finch",
          "gender": "female",
          "address": "519 Bogart Street, Topanga, Illinois, 2245",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4cbebe435795070b25",
          "isActive": true,
          "age": 33,
          "eyeColor": "green",
          "name": "Lois Ratliff",
          "gender": "female",
          "address": "679 Miami Court, Fivepointville, New Mexico, 3860",
          "favoriteFruit": "apple"
        },
        {
          "_id": "640b3d4c51f9db49eca3358c",
          "isActive": true,
          "age": 31,
          "eyeColor": "blue",
          "name": "Stephanie Frederick",
          "gender": "female",
          "address": "788 Hale Avenue, Trona, North Carolina, 3558",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4c7ca985ffe93e2154",
          "isActive": true,
          "age": 27,
          "eyeColor": "green",
          "name": "Hilary Patterson",
          "gender": "female",
          "address": "811 Sedgwick Street, Greensburg, Ohio, 2375",
          "favoriteFruit": "apple"
        },
        {
          "_id": "640b3d4ca5738c34cfd14c61",
          "isActive": false,
          "age": 37,
          "eyeColor": "green",
          "name": "Selena Noel",
          "gender": "female",
          "address": "782 Rapelye Street, Bentley, Georgia, 9021",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4c284fa3894e2692b6",
          "isActive": true,
          "age": 28,
          "eyeColor": "blue",
          "name": "Stevenson Jefferson",
          "gender": "male",
          "address": "269 Landis Court, Cucumber, Nebraska, 9042",
          "favoriteFruit": "banana"
        },
        {
          "_id": "640b3d4c00d835a928f200c1",
          "isActive": true,
          "age": 37,
          "eyeColor": "green",
          "name": "Bates Arnold",
          "gender": "male",
          "address": "910 Cook Street, Barrelville, Minnesota, 7204",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4c6b3f8e2f969e9fee",
          "isActive": true,
          "age": 31,
          "eyeColor": "brown",
          "name": "Gross Castaneda",
          "gender": "male",
          "address": "355 Aitken Place, Freelandville, Marshall Islands, 190",
          "favoriteFruit": "banana"
        },
        {
          "_id": "640b3d4cf334b8df92d8982a",
          "isActive": false,
          "age": 35,
          "eyeColor": "blue",
          "name": "Young Scott",
          "gender": "female",
          "address": "809 Cass Place, Elrama, North Dakota, 3896",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "640b3d4c3490a09e00bde81b",
          "isActive": false,
          "age": 22,
          "eyeColor": "blue",
          "name": "Paul Harper",
          "gender": "male",
          "address": "664 Maujer Street, Fairforest, Connecticut, 6476",
          "favoriteFruit": "apple"
        },
        {
          "_id": "640b3d4c94b400856bf9cd63",
          "isActive": true,
          "age": 31,
          "eyeColor": "brown",
          "name": "Hurley Mckenzie",
          "gender": "male",
          "address": "389 Utica Avenue, Hatteras, Michigan, 6339",
          "favoriteFruit": "apple"
        },
        {
          "_id": "640b3d4c90dd92a46d7e9fea",
          "isActive": false,
          "age": 30,
          "eyeColor": "green",
          "name": "Fletcher Nguyen",
          "gender": "male",
          "address": "115 Bevy Court, Richford, Palau, 3694",
          "favoriteFruit": "apple"
        },
        {
          "_id": "640b3d4c6b42ae9934c0dd2d",
          "isActive": false,
          "age": 33,
          "eyeColor": "green",
          "name": "Rosario Owen",
          "gender": "male",
          "address": "560 Java Street, Blanford, Oklahoma, 4270",
          "favoriteFruit": "apple"
        }
]

// nomor 1
console.log("----- Nomor 1 -----")
console.log("Person yang suka buah apple dan warna matanya biru :")
for (let i = 0; i < person.length; i++) {
    if(person[i].favoriteFruit=== "apple" && person[i].eyeColor==="blue"){
        console.log(person[i].name)
    } 
}

// nomor 2
console.log("----- Nomor 2 -----")

let arr =[]
for (let j = 0; j < person.length; j++) {
    if(person[j].age > 30){
        arr.push(person[j].name)
    }
}
console.log("Person yang age-nya diatas 30 tahun berjumlah "+ arr.length + " yaitu : " + arr)

// nomor 3
console.log("----- Nomor 3 -----")
console.log("Person yang isActive = true and gender = female :")
for (let a = 0; a < person.length; a++) {
    if (person[a].isActive === true && person[a].gender==="female") {
        console.log(person[a].name)        
    }    
}

// nomor 4
console.log("----- Nomor 4 -----")
console.log("Person dengan age diatas 30 atau dibawah 25 dan eyeColor = blue :")
for (let b = 0; b < person.length; b++) {
    if ((person[b].age > 30 || person[b].age < 25) && person[b].eyeColor==="blue")  {
        console.log(person[b].name)
    }    
}

// nomor 5
console.log("----- Nomor 5 -----")
console.log("Person yang mengandung huruf W di name-nya :")
for (let h = 0; h < person.length; h++) {
    var convert = (person[h].name).split('')
    for (let k = 0; k < convert.length; k++) {
      if (convert[k] === "w" || convert[k] === "W") {
        console.log(person[h].name)
      }
    }
}

// nomor 6
console.log("----- Nomor 6 -----")
console.log("Person dengan isActive = false dan gender = male dan age > 25 :")
for (let c = 0; c < person.length; c++) {
    if (person[c].isActive === false && person[c].gender === "male" && person[c].age > 25) {
      console.log(person[c].name)
    }
}

// nomor 7
console.log("----- Nomor 7 -----")
console.log("Person yang age < 30 atau eyeColor = brown dan favoritFruit = banana :")
for (let d = 0; d < person.length; d++) {
    if ((person[d].age < 30 || person[d].eyeColor === "brown") && person[d].favoriteFruit === "banana") {
      console.log(person[d].name)
    }
}

// nomor 8
console.log("----- Nomor 8 -----")
console.log("Person dengan gender male :")
for (let e = 0; e < person.length; e++) {
    if (person[e].gender === "male") {
      console.log(person[e].name)
    }
}

// nomor 9
console.log("----- Nomor 9 -----")
console.log("Person dengan eyeColor = blue :")
for (let f = 0; f < person.length; f++) {
    if (person[f].eyeColor === "blue") {
      console.log(person[f].name)
    }
}

// nomor 10
console.log("----- Nomor 10 -----")
console.log("Person dengan age > 30 :")
for (let g = 0; g < person.length; g++) {
    if (person[g].age > 30) {
      console.log(person[g].name)
    }
}