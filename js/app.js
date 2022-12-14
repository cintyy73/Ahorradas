const $ = (selector) => document.querySelector(selector);

//Elementos 
//datos local storage
let dateLocalSt = JSON.parse(localStorage.getItem("operationsOB"));
//*nav
const $btnBurger = $("#burger");
const $modalNav = $("#modal-nav");
// let $btnBalance;  
// let $btnReport;   
// let $btnCategory; 
//balance
const $btnNewOp = $("#btn-new-op");
const $btnAddNewOp = $("#btn-add-new-op");
const $btnCancNewOp = $("#btn-canc-new-op");
const $boxNewOp = $("#box-new-op");
const $balance = $("#cont-balance");
const $contInnerOp = $("#cont-inner-op");
const $InewOpDescrip = $("#new-op-desc");
const $InewOpCategory = $("#new-op-category-filter");
const $InewOpDate = $("#new-op-date");
const $InewOpAmount = $("#new-op-amount");
const $InewOpType = $("#new-op-type-filter");
const $ttlGain = $("#ttl-gain");
const $ttlFact = $("#ttl-factures");
const $ttl = $("#ttl");
//vista de operaciones 
const $modalListBlc = $("#modal-list-op")
const $btnBlc =("#cont-btn")
const $descrpBlc = $("#descrip-blc")
const $categBlc = $("#categ-blc")
const $dateBlc = $("#date-blc")
const $amountBlc = $("#amount-blc")

// seccion 
const $viewBalance = $("#cont-balance");
const $viewCategory = $("#cont-category");
const $viewReport = $("#cont-report");

//variables datos 
let ttlGain = 0;
let ttlFact = 0;
let ttlAmount = 0;
let ttlF = [];
let ttlG =[];

let operations = dateLocalSt || [];
let operation = {
    nameOp : "",
    amountOp : 0,
    typeOp : "",
    categOp : "",
    dateOp : "",
    colorAmount: "",
};



/************FUNCTIONS*****************/
//Funciones NAV
// menu 
const burgerActive = ()=>{
    $btnBurger.classList.toggle("is-active");
    $modalNav.classList.toggle("is-active");
}

//vistas 
const $btnBalance= $("#balance");
const $btnReport= $("#report");
const $btnCategory= $("#category");

//activa vistas y/o oculta segun btn
const viewsReport = () =>{
    $viewBalance.classList.add("is-hidden");
    $viewReport.classList.remove("is-hidden");
    $viewCategory.classList.add("is-hidden");
}

const viewsCategory = () =>{
    $viewBalance.classList.add("is-hidden");
    $viewReport.classList.add("is-hidden");
    $viewCategory.classList.remove("is-hidden");
}

const viewsBalance = () =>{
    $viewBalance.classList.remove("is-hidden");
    $viewReport.classList.add("is-hidden");
    $viewCategory.classList.add("is-hidden");
}

//Functions BALANCE

//oculta o muestra vistas segun btn nueva operacion
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

//Funciones CATEGORIA

// doy valor a las variables segun los inputs
const inputsDate = (e) =>{
    nameOp  = $InewOpDescrip.value 
    amountOp = $InewOpAmount.value
    typeOp = $InewOpType.value
    categOp= $InewOpCategory.value
    dateOp = $InewOpDate.value
}

const addLocalStorage = () =>{
    const   inputsValues = {...operation};
    inputsValues.nameOp = nameOp;  
    inputsValues.amountOp = Number(amountOp);     
    inputsValues.typeOp = typeOp;
    inputsValues.categOp = categOp;
    inputsValues.dateOp = dateOp;
    operations.push(inputsValues);
    localStorage.setItem("operationsOB", JSON.stringify(operations));
}

const addHtmlBlc = () => {
    for (const operation of operations) {
        console.log(operation);
        $modalListBlc.classList.remove("is-hidden");
        $contInnerOp.classList.add("is-hidden");
        $descrpBlc.innerHTML += `<li>${operation.nameOp}<li>`
        $categBlc.innerHTML += `<li>${operation.categOp}<li>`
        $dateBlc.innerHTML += `<li>${operation.dateOp}<li>`
        $amountBlc.innerHTML += `<li>${operation.amountOp}<li>`
        $btnBlc.innerHTML + `
        <button class="button is-small is-ghost">Editar</button>
        <button class="button is-small is-ghost">Eliminar</button>`
    }
}

//filtra las operaciones segun parametro de tipo de op. gasto/ganancia
const typeFilter = (type) => {
    return operations.filter(operation=>operation.typeOp === type)
}
//doy valor a los arrays de gastos y ganacias
    ttlF = typeFilter("new-op-factures")
    ttlG = typeFilter("new-op-gain")

 
//sumo montos de ganancias
const mountGain = (ttlG) =>{
    for (const operation of ttlG) {
        const {amountOp} = operation
        ttlGain += amountOp
        ttlAmount = ttlGain-ttlFact;
    }
}
//sumo montos de gastos
const mountFact = (ttlF) =>{
    for (const operation of ttlF) {
        const {amountOp} = operation
        ttlFact += amountOp
        ttlAmount = ttlGain-ttlFact;
    }
}
/*****************REVISAR LAS SUMAS DE GASTOS*****//// */


//muestra valores de gastos y ganancias en aside de balance
const ttlViewBalance = () => {
    $ttlFact.innerHTML = ttlFact;
    $ttlGain.innerHTML = ttlGain;
    $ttl.innerHTML = ttlAmount;
}

// FILTROS


//ejecuto funciones necesarias para abrir modal btn nueva operacion

const addNewOp = () => {
    boxNewOp()
    closeBalance()
}

//ejecuto funciones necesarias a??adir operacion

const addOp = () =>{
    closeBoxNewOp()
    inputsDate()
    addLocalStorage()
    mountFact(ttlF)
    mountGain(ttlG)
    ttlViewBalance()
    addHtmlBlc()
}

//ejecuto funciones necesarias para mostrar totales al abrir la pagina
const openApp = () =>{
    ttlViewBalance()

}
openApp()

/************EVENTS*****************/
//Events nav
$btnBurger.addEventListener("click", burgerActive);
$btnReport.addEventListener("click", viewsReport);
$btnCategory.addEventListener("click",viewsCategory );
$btnBalance.addEventListener("click", viewsBalance);
//Events BALANCE
$btnNewOp.addEventListener("click", addNewOp );
$btnCancNewOp.addEventListener("click", closeBoxNewOp);
$btnAddNewOp.addEventListener("click", addOp);