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
    phone: /^\+998([- ])?(90|91|93|94|95|98|99|33|97|71)([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/i,
    name: /^[a-z ,.'-]+$/i
    
}


inps.forEach(inp => {
    inp.onkeyup = () => {
        console.log(patterns[inp.name].test(inp.value));
        if (patterns[inp.name].test(inp.value)) {
            inp.classList.remove('error-field')
        } else {
            inp.classList.add('error-field')
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








let rasm = document.querySelectorAll(".tabcontent")
let knopki = document.querySelectorAll(".tabheader__item")
let menu = document.querySelectorAll(".tabcontent__descr")


function yunus(a = 0) {

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

    
    
    knp.onclick = () => {
        yunus(a) 

        knopki.forEach(i => {
            i.classList.remove("tabheader__item_active")
        
        })
        
        knp.classList.add('tabheader__item_active')
        

        
    }
} )

yunus()










let wale = document.querySelectorAll('#gender .calculating__choose-item')

let prevve = 0

wale.forEach((btn, index) => {
    

    btn.onclick = () =>{
        wale[prevve].classList.remove('calculating__choose-item_active')
        btn.classList.add('calculating__choose-item_active')

        prevve = index
    }

})

let walee = document.querySelectorAll('#activity .calculating__choose-item')

let prevvee = 0

walee.forEach((btn, index) => {
    



    btn.onclick = () =>{
        walee[prevvee].classList.remove('calculating__choose-item_active')
        btn.classList.add('calculating__choose-item_active')

        prevvee = index
    }

})

let seconds = document.querySelector('#seconds') 
let sec_num  = parseInt(seconds.textContent)
let sec = sec_num

let minutes = document.querySelector('#minutes')
let min_num  = parseInt(minutes.textContent)
let min = min_num

let hours = document.querySelector('#hours')
let hour_num  = parseInt(hours.textContent)
let hour = hour_num

let days = document.querySelector('#days')
let day_num  = parseInt(days.textContent)
let day = day_num


setInterval(() =>{
sec --- 1
seconds.textContent = sec 
minutes.textContent = min
hours.textContent = hour
days.textContent = day


if(seconds.textContent === "0"){
    sec = 60
    min --- 1
}else if(minutes.textContent === "0"){
    min = 60
    hour --- 1
}else if(hours.textContent === "0"){
    hour = 24
    day --- 1 
    

}else if(days.textContent === "-1"){
day = 0
min = 0
sec = 0
hour = 0
}
}, 1000)


let modall = document.querySelector('.modal')
let buttonn = document.querySelector('.offer__action')
let closee = document.querySelector('.modal__close')

buttonn.onclick = ()=>{
    modall.classList.remove("hide")
    modall.classList.add('show')
    modall.classList.add('fade')
}

closee.onclick = () =>{
    modall.classList.remove("show")
    modall.classList.add("hide")
    
}