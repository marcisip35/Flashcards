let viewAllCardsBtn = document.getElementById("view-all-cards");
let addACardsBtn = document.getElementById("add-a-cards");
let editACardBtn = document.getElementById("edit-a-card");
let removeACardBtn = document.getElementById("remove-a-card");
let clickToFlipCardInfo = document.getElementById("click-to-flip-card-info");
let flipCardInfo = document.getElementById("flip-card-info");
let viewCardsBtn = document.getElementById("view-all-cards");
let viewCardsSection = document.getElementById("view-cards");
let main = document.getElementById("main");

let addACardForm = document.getElementById("add-a-card-form");
let addACardTitle = document.getElementById("add-card-title");
let addACardDefinition = document.getElementById("add-card-definition");
let addCardBtn = document.getElementById("add-card");

/* Main */
clickToFlipCardInfo.addEventListener("click", showFlipCardInfo);

function showFlipCardInfo() {
    if (flipCardInfo.style.display === "" || flipCardInfo.style.display === "none") {
        flipCardInfo.style.display = "block";
        clickToFlipCardInfo.innerHTML = "Hide info";

    } else if (flipCardInfo.style.display === "block") {
        flipCardInfo.style.display = "none";
        clickToFlipCardInfo.innerHTML = "Click card to flip";
    }
}

/* View All Cards Section */
viewCardsBtn.addEventListener("click", viewAllCards);

function viewAllCards(){
    main.style.display = 'none';
    viewCardsSection.style.display = 'flex'
}

/* Add A Card Section */
addACardForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let formValues = {
        title: addACardTitle.value,
        definition: addACardDefinition.value
    };

    /* Save to Local Storage */
    localStorage.setItem("flashCardValues", JSON.stringify(formValues));
    console.log(JSON.parse(localStorage.getItem("flashCardValues")));
});


