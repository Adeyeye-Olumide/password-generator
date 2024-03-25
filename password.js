let small_letters = ["a","b", "c","d","e", "f","g","h","i","j","k","l",
                "m","m","o","p","q","r","s","t","u","v","w","x","y","z"]
let capital_letters = []

for(let i = 0; i<small_letters.length; i++){
    capital_letters.push(small_letters[i].toUpperCase())
}

console.log(capital_letters)

let numbers = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5]

let symbols = ['!','@','#','$','%','^','&','*','(',')','+','!','@','#','$',
                '%','^','&','*','(',')','+','!','@','#','$']

const Ticked = document.querySelectorAll('.checked')
const num_size = document.querySelector("#length")
const button = document.querySelector(".btn.Generator")
const result = document.querySelector(".result")
const clip = document.querySelector(".btn.clipboard")
console.log(button)

let password = ''

button.addEventListener("click", ()=> {full_code()})

clip.addEventListener("click", ()=>{
    navigator.clipboard.writeText(result.textContent)
    result.textContent = ''
    
    setTimeout(() => {
        alert("Password Copied!") 
    }, 100);
    
})
/////////////////////////////////////////////////////////////////////////////////////
function full_code(){
    let check = []
    let number = ''
    let symbol = ''
    let cap_let = ''
    let small_let = ''
    let library = {
        "numbers":numbers,
        "symbols":symbols,
        "uppercase":capital_letters,
        "lowercase":small_letters
    }

    Ticked.forEach(tick =>{
        if(tick.checked){
            check.push(tick.id)
            for (let i =0; i<(num_size.value); i++){
                if (tick.id === "numbers"){
                        number = number.concat(library[tick.id][Math.floor(Math.random() * num_size.value)])
                    }

                else if (tick.id === "symbols"){
                    symbol = symbol.concat(library[tick.id][Math.floor(Math.random() * num_size.value)])
                    
                }

                else if (tick.id === "uppercase"){
                    cap_let = cap_let.concat(library[tick.id][Math.floor(Math.random() * num_size.value)])
                    
                }
                else{
                    small_let = small_let.concat(library[tick.id][Math.floor(Math.random() * num_size.value)])
                }
            
        
   
        }

        var password = number.slice(0,num_size.value/check.length) + symbol.slice(0, num_size.value/check.length) 
        + cap_let.slice(0, num_size.value/check.length) 
        + small_let.slice(0, num_size.value/check.length)

        check_length(password)



}})

////////////////////////////////////////////////////////////////////////////////////////////////////
function check_length(password){

    let extra = ''

    if (password.length < num_size.value){
        check.forEach(id => {
            extra = extra.concat(library[id][Math.floor(Math.random() *num_size.value)])
        })

        password = password + extra
    }

    password = password.slice(0, num_size.value)
    console.log(password)
    
    display(password)
    }

    
}

// const range = [...Array(parseInt(num_size.value)).keys()]
// console.log(range)
// function randomSort(password){
//     let _password = ''
    
//     let i = parseInt(num_size.value)
    
//     for(i; i!==0; i--) {
//         let x = Math.floor(Math.random() * range.length)
//         _password = _password.concat(password[range[x]])
//         console.log(range[x])
//     }
//     //console.log(_password)




///////////////////////////////////////////////////////////////////////////////////////////////////
function display(Password){
    result.innerHTML = `<span class="result">${Password}</span>`

}




