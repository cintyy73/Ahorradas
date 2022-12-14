const $ = (selector) => document.querySelector(selector);

//Elements 

//*nav
const $btnBurger = $("#burger");
const $modalNav = $("#modal-nav");
const $btnBalance = $("#balance");
const $btnReport = $("#report");
const $btnCategory = $("#category");
const $btnNewOp = $("#btn-new-op");
const $btnAddNewOp = $("#btn-add-new-op");
const $btnCancNewOp = $("#btn-canc-new-op");
const $boxNewOp = $("#box-new-op");
const $balance = $("#cont-balance");
/************FUNCTIONS*****************/
//Functions NAV

const burgerActive = ()=>{
    $btnBurger.classList.toggle("is-active");
    $modalNav.classList.toggle("is-active");

}
//Functions BALANCE
const closeBalance = () => {
    $balance.classList.add("is-hidden");
}

const openBalance = () => {
    $balance.classList.remove("is-hidden");
}

const boxNewOp = () => {
   $boxNewOp.classList.remove("is-hidden");
}

const closeBoxNewOp = () => {
    $boxNewOp.classList.add("is-hidden");
    openBalance()
}

// const addHtml = () => {
    

// }
const addNewOp = () => {
    //addHtml()
    boxNewOp()
   closeBalance()

}


/************EVENTS*****************/
//Events nav
$btnBurger.addEventListener("click", burgerActive);

//Events BALANCE
$btnNewOp.addEventListener("click", addNewOp );
$btnCancNewOp.addEventListener("click", closeBoxNewOp);
$btnAddNewOp.addEventListener("click", closeBoxNewOp);
