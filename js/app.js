const $ = (selector) => document.querySelector(selector);


//Elements 
//date local storage
let dateLocalSt = JSON.parse(localStorage.getItem("operationsOB"));
//*nav
const $btnBurger = $("#burger");
const $modalNav = $("#modal-nav");
const $btnBalance = $("#balance");
const $btnReport = $("#report");
const $btnCategory = $("#category");
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
const $ttl = $("#ttl-");
let ttlAmount = 0;
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
    console.log(nameOp)
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
    for (const operation of dateLocalSt) {
        const {typeOp, amountOp} = operation
        if (typeOp === "new-op-factures") {
            console.log(amountOp);
            ttlAmount += Number(amountOp)
            console.log(ttlAmount);
        }
        else{
            ttlAmount -= Number(amountOp)
        }
    }
}



const addNewOp = () => {
    boxNewOp()
    closeBalance()
}

const addOp = () =>{
    closeBoxNewOp()
    inputsDate()
    //addHtml()
    addLocalStorage()
    //addOperation()
    ttlAmounts()
}
//no funciona inerr 
/************EVENTS*****************/
//Events nav
$btnBurger.addEventListener("click", burgerActive);

//Events BALANCE
$btnNewOp.addEventListener("click", addNewOp );
$btnCancNewOp.addEventListener("click", closeBoxNewOp);
$btnAddNewOp.addEventListener("click", addOp);
