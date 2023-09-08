let check = document.querySelector("#check");
let portfolio = document.querySelector(".portfolio")
console.dir(check);
console.dir(portfolio);

let aboutBtn = document.querySelectorAll(".about-btn")
console.dir(aboutBtn)

let skills = document.querySelector(".skills")
let experience = document.querySelector(".experience")
let education = document.querySelector(".education")
check.addEventListener('change',function (){
    console.log(check.checked);
        portfolio.classList.toggle("hidden");
    
})

aboutBtn[0].addEventListener('click',function(i){
        skills.style.display = 'block';
        experience.style.display = 'none';
        education.style.display = 'none';
})
aboutBtn[1].addEventListener('click',function(i){
        skills.style.display = 'none';
        experience.style.display = 'block';
        education.style.display = 'none';
})
aboutBtn[2].addEventListener('click',function(i){
        skills.style.display = 'none';
        experience.style.display = 'none';
        education.style.display = 'block';
})
