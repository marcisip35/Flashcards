let viewAllCards = document.getElementById("view-all-cards");
let addACards = document.getElementById("add-a-cards");
let editACard = document.getElementById("edit-a-card");
let removeACard = document.getElementById("remove-a-card");
let clickToFlipCardInfo = document.getElementById("click-to-flip-card-info");
let flipCardInfo = document.getElementById("flip-card-info");

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

function addCard() {

}