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
const $contInnerOp = $("#cont-inner-op");
const $InewOpDescrp = $("#new-op-desc");
const $InewOpCategory = $("#new-op-category-filter");
const $InewOpDate = $("#new-op-date");
const $InewOpAmount = $("#new-op-amount");
const $InewOpType = $("#new-op-type-filter");
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



/*const addHtml = () => {

    $contInnerOp.innerHTML=`
    <div class=" is-flex">
        <div id="description" class="column">
            <p class="subtitle">Fecha</p>
            <p>${}</p>
        </div>
        <div class="container column">
            <p class="subtitle">Categoría</p>
            <p class="has-text-${} has-background-text-${}">${}</p>
        </div>
        <div class="container column">
            <p class="subtitle">Fecha</p>
            <p>${}</p>
        </div>
        <div class="container column">
            <p class="subtitle has-text-${}">Monto</p>
            <p>${}</p>
        </div>
        <div class="container column">
            <p class="subtitle">Acciones</p>
            <div class="is-flex is-right">
                <a class="pr-4">Editar</a>
                <a>Eliminar</a>
            </div>
        </div>
    </div>`
}
*/
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
