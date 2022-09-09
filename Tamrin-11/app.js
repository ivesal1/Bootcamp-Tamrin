// const enroll = confirm ('آیا میخواهید ثبت نام کنید')
// if (enroll == true) {
//     let firstName = prompt('نام خودرا وارد کنید')
//     if (firstName == '') {
//         alert('نام اجباری است')
//         firstName = prompt('نام خود را وارد کنید')
//     }
//     const age = +prompt (`${firstName} عزیز سن خود را وارد کنید`)
//     if (age < 18 && age > null ) {
//         alert('سن شما قانونی نیست')
//     }else if( age == '' ){
//         alert('سن اجباری است')
//         prompt(`سن خود را وارد کنید`)
//     }else{
//         const password = prompt (`${firstName} عزیز لطفا رمز عبور خود را وارد کنید`)
//         if (password = '') {
//             alert('رمز عبور اجباری است')
//             prompt('رمز عبور خود را وراد کنید')
//         }else if(password.length < 8 && password.length > null){
//             alert('رمز عبور شما کمتر از حد مجاز است')
//             prompt('رمز عبور خود را وراد کنید')
//         }else{
//             alert (`نام شما ${firstName} رمز عبور شما ${password}`)
//         }
//     }
// }
const greeting = (firstName , lastName) => {
    let message = `Hello ${firstName} ${lastName}`
    return message
}
const resault = greeting('Mahdi' , 'Jafari')
console.log(resault);

const prom = new Promise ((rej , res)=>{
    rej('success')
    res('error')
})
prom.then(
    function suc(success){console.log(success);},
    function err(error){console.log(error);}
)
const remath = (a,b) => {
    let zarb = a * b
    let minus = a - b
    return{
        zarb,
        minus
    }
}
console.log(remath(3,9));