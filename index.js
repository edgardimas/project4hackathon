const mainMenu = document.querySelector('.links')
    const openMenu = document.querySelector('.open')
    const closeMenu = document.querySelector('.close')

    openMenu.addEventListener('click', show)
    closeMenu.addEventListener('click', close)

    function show(){
        mainMenu.style.display = 'flex'
        mainMenu.style.right = '0'
    }
    function close(){
        mainMenu.style.right = '-60%'
    }
    

const login = document.querySelector('.daftar');

login.addEventListener('submit', (e)=> {
   e.preventDefault();
   let user = {
       nama:login.nama.value,
       umur:login.umur.value,
       tinggi:login.tinggi.value,
       berat:login.berat.value,
       gender:login.gender.value,
       physicalActivity:login.physicalActivity.value
   }
   console.log(user)
   
})


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


// console.log(bbIdeal(user))

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
            name: user.name,
            gender: user.gender,
            height: user.height,
            weight: user.weight,
            age: user.age,
            phsycalActivity: user.phsycalActivity,
            ideal: ideal,
            BMI: hasilBmi,
            TDEE: totalCalorie,
            note: `Your body is UnderWeight`
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
            note: `Your body is Normal`
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
            note: `Your body is Overweight`
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

// console.log(summary(user))