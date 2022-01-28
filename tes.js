// let height = 173
// let weight = 85
// let bmi = 0

// cari berat badan ideal
// PRIA ===[tinggi badan (sentimeter) – 100] – [(tinggi badan (sentimeter) – 100) x 10 persen] => rumus broca from halodoc

let user = {
    name: 'Sakura',
    gender: 'male',
    height: 160,
    weight: 45,
    age: 23,
    phsycalActivity: 'normal' // low atau high
}

// let html = document.getElementById("#data")

// let user = {
//     name: document.getElementById("#nama"),
//     gender: document.getElementById("#gender"),
//     height: document.getElementById("#height"),
//     weight: document.getElementById("#weight"),
//     age: document.getElementById("#age"),
//     phsycalActivity: document.getElementById("#aktivitas") // low atau high
// }

function bbIdeal(data) {

    // datanya berupa object dari input tiap user
    // console.log(data.height)
    // console.log(data.height !== 'Number')

    let output = 0
    let jk = data.gender.toLowerCase() // hindari casesensitive
    // console.log(data.gender)
    let tb = data.height

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


// console.log(bbIdeal(user))

function bmi(user) {
    // bmi = bb / (tb/100 pangkat 2)
    // ubah data tb

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

function calorie(data) {
    // rumus BMR persamaan Harris Benedict

    //Cara menghitung BMR Wanita = 447.593 + (9.247 x berat badan [kg]) + (3.098 x tinggi badan [cm]) – (4.33 x umur)

    //Cara menghitung BMR Pria = 88.362 + (13.397 x berat badan [kg]) + (4.799 x tinggi badan [cm]) – (5.677 x umur)

    let a = data.height
    let b = data.weight
    let c = data.age
    let d = data.phsycalActivity

    let output = 0

    if (data.gender === 'female') {
        if (d === 'low') {
            output = (447.593 + (9247 * b) + (3.098 * a) - (4.33 * c)) * 1.375
        } else if (d === 'normal') {
            output = (447.593 + (9.247 * b) + (3.098 * a) - (4.33 * c)) * 1.55
        } else if (d === 'high') {
            output = (447.593 + (9.247 * b) + (3.098 * a) - (4.33 * c)) * 1.725
        }
    } else if (data.gender === 'male') {
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

function summary(data) {

    let ideal = bbIdeal(data)
    let hasilBmi = bmi(data)
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
    console.log(ideal, '<<berat badan')
    console.log(hasilBmi, '<<BMI')
    console.log(totalCalorie, '<<kalorie per hari')

    /*
    bmi =
    underweigth = <18.5
    healty weight = 18.5 - 24.9
    overweight = 25.0 - 29.9
    obesity = >=30.0
    **/

    if (hasilBmi < 18.5) {
        output = {
            name: data.name,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            age: data.age,
            phsycalActivity: data.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `Your body is UnderWeight`
        }
    } else if (hasilBmi >= 18.5 && hasilBmi <= 24.9) {
        output = {
            name: data.name,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            age: data.age,
            phsycalActivity: data.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `Your body is Normal`
        }
    } else if (hasilBmi >= 25.0 && hasilBmi <= 29.9) {
        output = {
            name: data.name,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            age: data.age,
            phsycalActivity: data.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `Your body is Overweight`
        }
    } else if (hasilBmi >= 30.0) {
        output = {
            name: data.name,
            gender: data.gender,
            height: data.height,
            weight: data.weight,
            age: data.age,
            phsycalActivity: data.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `You're Obesity`
        }
    }
    return output
}

console.log(summary(user))



// const form = document.querySelector('.test')
// // const name = document.querySelector('#nama')

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     console.log(form.nama.value);
//     const userName = form.nama.value;
//     // const userGender = form.gender.value;
//     // const userAge = form.age.value;
//     // const userHeight = form.height.value;
//     // const userWeight = form.weight.value;
//     // const userActivity = form.aktivitas.value


// })
// console.log(userName)


