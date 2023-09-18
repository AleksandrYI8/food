let modal = document.querySelector('.modal')
let button = document.querySelector('.header__right-block')
let close = document.querySelector('.modal__close')

button.onclick =()=>{
    modal.classList.remove("hide")
    modal.classList.add('show')
    modal.classList.add('fade')
}

close.onclick = () =>{
    modal.classList.remove("show")
    modal.classList.add("hide")
    
}





let inps = document.querySelectorAll('input')
let form = document.forms


let patterns = {
    name: /^[a-z ,.'-]+$/i,
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/g,
}


inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(patterns[inp.name].test(inp.value));
        if (patterns[inp.name].test(inp.value)) {
            inp.parentElement.classList.remove('error-field')
        } else {
            inp.parentElement.classList.add('error-field')
        }
    }
})



form.onsubmit = (event) => {
    event.preventDefault();
    let error = false

    inps.forEach(inp => {
        if(inp.classList.contains('error-field') || inp.value.length === 0) {
            error = true
            inp.classList.add('error-field')
        }
    })


    if(error) {
        alert('Error')
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

let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')
let counter = document.querySelector( '#current')
let total = document.querySelector('#total')


let slideIndex = 0
let count = 1
let totality = slides.length
total.textContent = totality
counter.textContent = count




function slideShow(n) {


    if(n > slides.length - 1) {
        slideIndex = 0  
        
    }

    if(n < 0) {
        slideIndex = slides.length - 1
        
    }

    slides.forEach(slide => slide.classList.add('fade','hide'))
    slides[slideIndex].classList.remove('hide')
    
}

slideShow(slideIndex)

next.onclick = () => {
    
    
    slideIndex++
    counter.textContent = count
    slideShow(slideIndex)
    count = slideIndex + 1 
}

prev.onclick = () => {
    
    
    slideIndex--
    counter.textContent = count
    slideShow(slideIndex)
    count = slideIndex + 1
}

console.log(count);


let rasm = document.querySelectorAll(".tabcontent")
let knopki = document.querySelectorAll(".tabheader__item")
let menu = document.querySelectorAll(".tabcontent__descr")


function change(a = 0) {

    rasm.forEach(img2 => {
          img2.classList.add("hide" , "fade")
          rasm[a].classList.remove("hide")
    })

    menu.forEach(mne => {
        mne.classList.add("hide" , "fade")
        menu[a].classList.remove("hide")
    })
}
knopki.forEach((knp, a) =>{
   
    knp.classList.remove('tabheader__item_active')
   
    knp.onclick = () => {
        change(a) 
        knp.classList.remove('tabheader__item_active')

        knp.classList.add('tabheader__item_active')
    }
} )

yunus()