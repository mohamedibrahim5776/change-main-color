let icon = document.querySelector('nav i')
let nav = document.querySelector('nav')
let [...colors] = document.querySelectorAll('.spans span')
let tomato = colors[0]
let sky = colors[1]
let blueViolet = colors[2]
let green = colors[3]
let colorCurrant = window.localStorage.getItem('activeColor')
let [...option] = document.querySelectorAll('.option')
let content = document.querySelector('.container')

// to know which main color
window.onclick = function activeColor () {
    return window.getComputedStyle(document.documentElement).getPropertyValue('--main-color')
}
// to change main color in local storage
document.onclick = function () {
    window.localStorage.setItem('activeColor', window.onclick());
}
// to get main color in local storage and set it as main color 
window.onload = function () {
    x = window.localStorage.getItem('activeColor', window.onclick());
    document.documentElement.style.setProperty('--main-color', x );
}
// to open nav bar
icon.addEventListener('click', function () {
    nav.classList.toggle('show')
    this.classList.toggle('anime')
})
// on click the color set it as main color and add class active

function activeOption(arr) {
    arr.map((el, ind, arr) => {
        if (el.style.backgroundColor == colorCurrant.trim()) {
            el.classList.add('active')
        }
        el.addEventListener('click', function () {
            console.log(el.classList.contains('option'))
            if (el.classList.contains('option')) {
                function change () {
                    content.style.backgroundImage = `url(../img/${Math.ceil(Math.random() * 9)}.jpg)`
                    if (option[1].classList.contains('active')== true) {
                        clearInterval(changeImg)
                    }
                }
                let changeImg = setInterval( change ,3000)
            }
            if (el.classList.contains('optionColor')) {
                document.documentElement.style.setProperty('--main-color', el.style.backgroundColor);
            }
            arr.forEach((el) => {
                el.classList.remove('active')
                arr.forEach((el) => {
                    this.classList.add('active')
                })
            })
        })
    })
}
activeOption(option)
activeOption(colors)





//     arr.forEach((el) => {
//         el.classList.remove('active')
//             arr.forEach((el) => {
//                 this.classList.add('active')
//             })
//     })
// }



