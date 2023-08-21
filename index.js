let form = document.forms.signup
let The_Some = document.querySelectorAll('.The_Some')


form.onsubmit = (event) => {
    event.preventDefault();
    let error = false

    The_Some.forEach(inp => {
        if(inp.value.length === 0){
            error = true
            inp.classList.add('error')
        } else{
            inp.classList.remove('error')
        }
    })
    if(error) {
        alert('You must write all inputs')
    } else {
        submit()
    }
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

let pattern = {
    name: /^[a-z ,.'-]+$/i,
    surname: /^[a-z ,.'-]+$/i,
    password: /^((?=.*[a-z])|(?=.*[A-Z])|(?=.*\\d)|(?=.*(_|[-+_!@#$%^&*.,?]))).{6,12}/,
    phone: /^998[012345789][0-9]{8}$/g,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    aboutYou: /^[a-z ,.'-]+$/i,
    age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/,
    html: /^[a-z ,.'-]+$/i,
    css: /^[a-z ,.'-]+$/i,
    js: /^[a-z ,.'-]+$/i,
    favouriteCar: /^[a-z ,.'-]+$/i,
}

function REJEX(regex, field) {
    if (regex.test(field.value)) {
        field.parentElement.classList.remove('error')
        field.parentElement.classList.add('error')
    } else {
        field.parentElement.classList.remove('error')
        field.parentElement.classList.add('error')
    }
}


The_Some.forEach(inp => {
    inp.onkeyup = () => {
        REJEX(pattern[inp.name], inp)
    }
})

