const $ = (selector) => document.querySelector(selector);

//Elements 

//*nav
const burger = $("#burger");
const balance = $("#balance");
const report = $("#report");
const category = $("#category");


//Functions

const burgerActive = ()=>{
    burger.classList.toggle("is-active");
    balance.innerHTML="Balance";
    report.innerText="Report";
    category.innerText="Category";
}

//Events
burger.addEventListener("click", burgerActive);
console.log(burger);
