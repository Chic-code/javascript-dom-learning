//DOM manipulation
const menuBtn = document.querySelector(".ham-menu");
const navBar = document.querySelector(".nav-items");
const body = document.querySelector('body')
const add = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const value = document.querySelector('.value')

menuBtn.addEventListener("click", function () {
navBar.classList.toggle('toggle-menu')
body.classList.toggle('dark-theme')
});

let count = 0

add.addEventListener('click', function(){
count++
// console.log(count)

value.textContent = count
})

minus.addEventListener('click',function(){
    count--
    
value.textContent = count;
})


console.log(value.textContent)