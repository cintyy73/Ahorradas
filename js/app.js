const $ = (selector) => document.querySelector(selector);

//Elements 

//*nav
const burger = $("#burger");
const modalNav = $("#modal-nav");
const btnBalance = $("#balance");
const btnReport = $("#report");
const btnCategory = $("#category");
const btnCloseModalNav = $("#close-modal-nav");


/************FUNCTIONS*****************/
//Functions

const burgerActive = ()=>{
    burger.classList.toggle("is-active");
    modalNav.classList.toggle("is-active");

}


/************EVENTS*****************/
//Events nav
burger.addEventListener("click", burgerActive);
console.log(burger);

