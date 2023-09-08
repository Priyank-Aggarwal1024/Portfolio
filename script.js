let check = document.querySelector("#check");
let portfolio = document.querySelector(".portfolio")
let li = document.querySelectorAll(".sidebar_list li")
let sidebar = document.querySelectorAll(".sidebar")

let html = document.querySelector("#html")
let css = document.querySelector("#css")
let js = document.querySelector("#js")
let cpp = document.querySelector("#cpp")
console.log(html.value , css.value , js.value , cpp.value)
let html_span = document.querySelector("#html-value")
let css_span = document.querySelector("#css-value")
let js_span = document.querySelector("#js-value")
let cpp_span = document.querySelector("#cpp-value")

html_span.innerHTML = `${html.value}%`;
css_span.innerHTML = `${css.value}%`;
js_span.innerHTML = `${js.value}%`;
cpp_span.innerHTML = `${cpp.value}%`;


let problem_solving = document.querySelector("#problem-solving")
let communication = document.querySelector("#communication")
let teamwork = document.querySelector("#teamwork")
let leadership = document.querySelector("#leadership")
console.log(html.value , css.value , js.value , cpp.value)
let problem_solving_span = document.querySelector("#problem-solving-value")
let communication_span = document.querySelector("#communication-value")
let teamwork_span = document.querySelector("#teamwork-value")
let leadership_span = document.querySelector("#leadership-value")

problem_solving_span.innerHTML = `${problem_solving.value}%`;
communication_span.innerHTML = `${communication.value}%`;
teamwork_span.innerHTML = `${teamwork.value}%`;
leadership_span.innerHTML = `${leadership.value}%`;



let aboutBtn = document.querySelectorAll(".about-btn")

let skills = document.querySelector(".skills")
let experience = document.querySelector(".experience")
let education = document.querySelector(".education")
check.addEventListener('change',function (){
        portfolio.classList.toggle("hidden");
})
for(let i=0;i<li.length;i++){
    li[i].addEventListener('click',function (){
        check.checked = false;
})
}


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
