let user = {
    name: 'Alek',
    gender: 'male',
    height: 160,
    weight: 45,
    age: 23,
    phsycalActivity: 'normal' // low atau high
}

function bbIdeal(user) {

    // usernya berupa object dari input tiap user
    // console.log(user.height)
    // console.log(user.height !== 'Number')

    let output = 0
    let jk = user.gender.toLowerCase() // hindari casesensitive
    // console.log(user.gender)
    let tb = user.height

    if (jk === 'male') {
        let a = tb - 100
        let b = (tb - 100) * 0.1
        output = a - b
    }
    if (jk === 'female') {
        let c = tb - 100
        let d = (tb - 100) * 0.15
        output = c - d
    }
    return output
}

function bmi(user) {
    // bmi = bb / (tb/100 pangkat 2)
    // ubah user tb

    let output = 0
    let result = 0
    let a = user.weight
    let b = user.height / 100
    let c = b * b

    output = Math.floor(a / c)
    // result = output.toFixed(2) // tapi jadi string
    return output
}
// console.log(bmi(user))

function calorie(user) {
    // rumus BMR persamaan Harris Benedict

    //Cara menghitung BMR Wanita = 447.593 + (9.247 x berat badan [kg]) + (3.098 x tinggi badan [cm]) – (4.33 x umur)

    //Cara menghitung BMR Pria = 88.362 + (13.397 x berat badan [kg]) + (4.799 x tinggi badan [cm]) – (5.677 x umur)

    let a = user.height
    let b = user.weight
    let c = user.age
    let d = user.phsycalActivity

    let output = 0

    if (user.gender === 'female') {
        if (d === 'low') {
            output = (447.593 + (9247 * b) + (3.098 * a) - (4.33 * c)) * 1.375
        } else if (d === 'normal') {
            output = (447.593 + (9.247 * b) + (3.098 * a) - (4.33 * c)) * 1.55
        } else if (d === 'high') {
            output = (447.593 + (9.247 * b) + (3.098 * a) - (4.33 * c)) * 1.725
        }
    } else if (user.gender === 'male') {
        if (d === 'low') {
            output = (88.362 + (13.397 * b) + (4.799 * a) - (.5667 * c)) * 1.375
        } else if (d === 'normal') {
            output = (88.362 + (13.397 * b) + (4.799 * a) - (5.667 * c)) * 1.55
        } else if (d === 'high') {
            output = (88.362 + (13.397 * b) + (4.799 * a) - (5.667 * c)) * 1.725
        }
    }
    // Math.floor(output)
    return Math.floor(output)
}

function summary(user) {

    let ideal = bbIdeal(user)
    let hasilBmi = bmi(user)
    let totalCalorie = calorie(user)
    let output = {
        name: '',
        gender: '',
        height: 0,
        weight: 0,
        age: 0,
        phsycalActivity: '',
        ideal: ideal,
        BMI: 0,
        TDEE: 0
    }
    // console.log(ideal, '<<berat badan')
    // console.log(hasilBmi, '<<BMI')
    // console.log(totalCalorie, '<<kalorie per hari')

    /*
    bmi =
    underweigth = <18.5
    healty weight = 18.5 - 24.9
    overweight = 25.0 - 29.9
    obesity = >=30.0
    **/

    if (hasilBmi < 18.5) {
        output = {
            name: user.name,
            gender: user.gender,
            height: user.height,
            weight: user.weight,
            age: user.age,
            phsycalActivity: user.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `Your Body is Underweight`
        }
    } else if (hasilBmi >= 18.5 && hasilBmi <= 24.9) {
        output = {
            name: user.name,
            gender: user.gender,
            height: user.height,
            weight: user.weight,
            age: user.age,
            phsycalActivity: user.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `Your Body is Normal`
        }
    } else if (hasilBmi >= 25.0 && hasilBmi <= 29.9) {
        output = {
            name: user.name,
            gender: user.gender,
            height: user.height,
            weight: user.weight,
            age: user.age,
            phsycalActivity: user.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `Your Body is Overweight`
        }
    } else if (hasilBmi >= 30.0) {
        output = {
            name: user.name,
            gender: user.gender,
            height: user.height,
            weight: user.weight,
            age: user.age,
            phsycalActivity: user.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `You're Obesity`
        }
    }
    return output
}



let output = summary(user)
console.log(output)
// console.log(summary(user))

// document.getElementById('namauser').innerText = output.name
// document.getElementById('gender').innerText = output.gender
// document.getElementById('age').innerText = output.age + ' Years Old'
// document.getElementById('weight').innerText = output.weight + ' Kg'
// document.getElementById('height').innerText = output.height + ' Cm'
// document.getElementById('note').innerText = '"' + output.note + '"'
// document.getElementById('bbideal').innerText = output.ideal + ' Kg'
// document.getElementById('bmiresult').innerText = output.BMI
// document.getElementById('tdee').innerText = output.TDEE + ' Cal/Day'


//p2

let data = output

// let data = {
//     name: "Sakura",
//     gender: "female",
//     height: 160,
//     weight: 68,
//     age: 23,
//     phsycalActivity: "normal",
//     BMI: 26,
//     TDEE: 2282,
//     note: "Your body is Overweight",
//   };

function olahraga(data) {
    //
    //rekomendasi olahraga
    let output = {
      datauser: {
        nama: data.name,
        BMI: data.BMI,
      },
      rekomendasi: [],
    };
    if (data.note === "Your body is Overweight") {
      output.rekomendasi.push("joging", "30 menit");
      output.rekomendasi.push("push up", "20x");
      output.rekomendasi.push("sit up", "20x");
      output.rekomendasi.push("flank", "2 menit");
    } else if (data.note === "Your body is UnderWeight") {
      output.rekomendasi.push("push up", "10x");
      output.rekomendasi.push("sit up", "10x");
    } else {
      output.rekomendasi.push("joging", "15 menit");
      output.rekomendasi.push("push up", "10x");
      output.rekomendasi.push("sit up", "10x");
    }
    return output;
  }
  // overwigth anjuran olahraga pushup 30kali
  // jogging 5km/day
  
  //console.log(olahraga(data));
  
  function diet(data) {
    let output = {
      datauser: {
        nama: data.name,
        BMI: data.BMI,
      },
      rekomendasi: [],
    };
    if (data.note === "Your body is Overweight") {
      output.rekomendasi.push("karbohidrat", "300gram");
      output.rekomendasi.push("lemak", "100gram");
      // output.rekomendasi.push([]);
      // output.rekomendasi.push([]);
    } else if (data.note === "Your body is UnderWeight") {
      output.rekomendasi.push("karbohidrat", "500gram");
      output.rekomendasi.push("lemak", "300gram");
    } else {
      output.rekomendasi.push("makan", "3x");
      output.rekomendasi.push("minum", "2liter");
    }
    return output;
  }
 // console.log(diet(data));


 //p3 
let userList = olahraga(data)

console.log(userList)

// let userList = {
//     datauser: {
//     nama:   'edgar',
//     mbi: 'overweight'
//     },
//     aktivitas: ["joging", "30 menit","push up", "20x","shit up", "20x","flank", "2 menit"]
// }

function extractActivity (list) {
    //console.log(list.aktivitas)
    let arr = []
    let aktiv = list.rekomendasi
    for(var i = 0; i < aktiv.length; i++){
        if(i%2 == 0){
            arr.push(aktiv[i])
            //console.log(aktiv[i])
        }
    }
    return arr
}

function extractTask (list){
    let arr = []
    let aktiv = list.rekomendasi
    for(var i = 0; i < aktiv.length; i++){
        if(i%2 !== 0){
            arr.push(aktiv[i])
            //console.log(aktiv[i])
        }
    }
    return arr
}

//console.log(extractActivity(userList))

let activities = extractActivity(userList)
let tasks = extractTask(userList)


const userNama = document.getElementById('nama')
const userMBI = document.getElementById('bmi')
const userActivity = document.getElementById('aktivitas')
const userExercie = document.getElementById('exercise')

userNama.innerHTML = userList.datauser.nama
userMBI.innerHTML = userList.datauser.BMI


for(var i = 0; i < activities.length; i++){
    userActivity.innerHTML += activities[i]
    userActivity.innerHTML += '<br>'
}



function timer (id) {
    var timeleft = 10;
    var Timer = setInterval(function(){
        if(timeleft <= 0){
            clearInterval(Timer);
            document.getElementById(id).innerHTML = "Finished";
        } else {
            document.getElementById(id).innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
        }, 1000);
        
}

document.getElementById("clickMe").onclick = function () {  
    let id = "target"
    timer(id);
    
};


function addRow(tableID, number) {
    // Get a reference to the table
    let tableRef = document.getElementById(tableID);
    //console.log(tableRef.length)
  
    // Insert a row at the end of the table
    for(var i = 0; i < number; i++){
    let newRow = tableRef.insertRow(-1);
    // "target1"
    //console.log(document.getElementById("target").id)
  
    // Insert a cell in the row at index 0
   
    let newCell = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);
    let newCell3 = newRow.insertCell(2);
    newCell3.id = i
    //console.log(newCell[0])
  
    // Append a text node to the cell
    //console.log(activities[i])
    console.log(tasks[i])
 
    let newText = document.createTextNode(activities[i]);
    newCell.appendChild(newText);
    let newText2 = document.createTextNode(tasks[i])
    newCell2.appendChild(newText2);
    let newText3 = document.createTextNode(newCell3.id)
    newCell3.appendChild(newText3);
    
 
    timer(newCell3.id)
    }
   
  }

  // Call addRow() with the table's ID
  let numOfAct = activities.length
  addRow('exercTable',numOfAct)




