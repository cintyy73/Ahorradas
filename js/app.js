const $ = (selector) => document.querySelector(selector);

//Elements 
//date local storage
let dateLocalSt = JSON.parse(localStorage.getItem("operationsOB"));
//*nav
const $btnBurger = $("#burger");
const $modalNav = $("#modal-nav");
let $btnBalance = "";  
let $btnReport="";   
let $btnCategory=""; 
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
let ttlGain = 0;
let ttlFact = 0;
let ttlAmount = 0;
let ttlF = 0;
let ttlG =0;
// sections view
const $viewBalance = $("#cont-balance");
const $viewCategory = $("#cont-category");
const $viewReport = $("#cont-report");

/**hasta aca */
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
//Functions NAV

const burgerActive = ()=>{
    $btnBurger.classList.toggle("is-active");
    $modalNav.classList.toggle("is-active");

}

//vistas 
const viewsReport = () =>{
    $btnBalance.classList.add("is-hidden");
    $btnReport.classList.remove("is-hidden");
    $btnCategory.classList.add("is-hidden");
}
$btnBalance= $("#balance");
$btnReport= $("#report");
$btnCategory= $("#category");

const viewsCategory = () =>{
    $btnBalance.classList.add("is-hidden");
    $btnReport.classList.add("is-hidden");
    $btnCategory.classList.remove("is-hidden");
}

const viewsBalance = () =>{
    $btnBalance.classList.remove("is-hidden");
    $btnReport.classList.add("is-hidden");
    $btnCategory.classList.add("is-hidden");
}
//cambiar id en los anchor de header y ver si funciona las vistas

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

//Functions CATEGORY

const inputsDate = (e) =>{
    nameOp  = $InewOpDescrip.value 
    amountOp = $InewOpAmount.value
    typeOp = $InewOpType.value
    categOp= $InewOpCategory.value
    dateOp = $InewOpDate.value
}

// const colorType = () =>{
//     if(typeOp===Ganancia){
//         colorAmount = "danger" 
//     }
//     else{
//         colorAmount="primary"
//     } 
//     console.log(colorAmount)
// }

const addLocalStorage = () =>{
    const   inputsValues = {...operation};
    inputsValues.nameOp = nameOp;  
    inputsValues.amountOp = amountOp;     
    inputsValues.typeOp = typeOp;
    inputsValues.categOp = categOp;
    inputsValues.dateOp = dateOp;
    operations.push(inputsValues);
    localStorage.setItem("operationsOB", JSON.stringify(operations));
}
/*const addHtml = () => {

    $contInnerOp.innerHTML = `
    <div class=" is-flex">
        <div id="description" class="column">
            <p class="subtitle">Nombre</p>
            
        </div>
        <div id="category" class="container column">
            <p class="subtitle">Categoría</p>
        </div>
        <div id="date" class="container column">
            <p class="subtitle">Fecha</p>
           
        </div>
        <div id="amount" class="container column">
            <p class="subtitle has-text-">Monto</p>
        </div>
            
    </div>`
        }
//elements new
let $$categoryOpp = $("#category");
let $$nameOpp = $("#description");
let $$dateOpp = $("#date");
let $$amountOpp = $("#amount");

const addOperation = () =>{
    $contInnerOp.innerHTML += ` 
    <div id="btn-x/a" class="container column">
        <p class="subtitle">Acciones</p>
        <div class="is-flex is-right">
            <a class="pr-4">Editar</a>
            <a>Eliminar</a>
        </div>
    </div>`
    $$categoryOpp += `<p>${nameOp}</p>`
    $$nameOpp += `<p>${nameOp}</p>`
    $$dateOpp += ` <p>${dateOp}</p>`
    $$amountOpp += `<p>${amountOp}</p>`
}*/
// const boxBalanceV = (operations) => {
//     const {typeOp, amountOp} = operations;
//     if(typeOp==="new-op-factures"){
//         total=
//     }
 
//en proceso?? 
// }




const ttlAmounts = () =>{
    for (const operation of operations) {
        const {typeOp, amountOp} = operation
        typeOp === "new-op-factures" ? ttlF = ttlFact + Number(amountOp) : ttlG = ttlGain + Number(amountOp);
    //ver porq suma en ganancias y gasto 
      
        // if (typeOp === "new-op-factures") {
        //     ttlF = ttlFact + Number(amountOp)
        // }
        // else{
        //     ttlG = ttlGain + Number(amountOp)
        // }

    }
    ttlGain = ttlG;
    ttlFact = ttlF;
    ttlAmount = ttlGain - ttlFact
}
//ver porq suma toods los numeros todoas las vueltsa 

const ttlViewBalance = () => {
    $ttlFact.innerHTML = ttlFact;
    $ttlGain.innerHTML = ttlGain;
    $ttl.innerHTML = ttlAmount;
}




const addNewOp = () => {
    boxNewOp()
    closeBalance()
}

const addOp = () =>{
    closeBoxNewOp()
    inputsDate()
    addLocalStorage()
    ttlAmounts()
    ttlViewBalance()
}

// const openApp = () =>{
//     ttlViewBalance()
//     ttlAmounts()
// }
// openApp()

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
