let addACardsBtn = document.getElementById("add-a-cards");
let clickToFlipCardInfo = document.getElementById("click-to-flip-card-info");
let flipCardInfo = document.getElementById("flip-card-info");

/* Sections */
let sections = document.querySelectorAll(".section");
let viewCardsSection = document.getElementById("view-cards-section");
let addACardSection = document.getElementById("add-a-card-section");
let mainSection = document.getElementById("main");

/* Section Btn */
let viewMainSectionBtn = document.getElementById("main-section-btn");
let viewAllCardsSectionBtn = document.querySelector("#view-cards-section-btn");
let viewAddACardSectionBtn = document.getElementById("add-a-card-section-btn");
let viewEditACardSectionBtn = document.querySelector("#edit-a-card-section-btn");
let viewRemoveACardSectionBtn = document.getElementById("remove-a-card-section-btn");
let sectionBtns = document.querySelectorAll("header ul li button");

let sectionIds =
    [
        {
            sectionBtn: sectionBtns[0],
            sectionName: sections[0].getAttribute("id")
        },
        {
            sectionBtn: sectionBtns[1],
            sectionName: sections[1].getAttribute("id")
        },
        {
            sectionBtn: sectionBtns[2],
            sectionName: sections[2].getAttribute("id")
        }, 
        {
            sectionBtn: sectionBtns[3],
            sectionName: sections[3].getAttribute("id")
        },        
        {
            sectionBtn: sectionBtns[4],
            sectionName: sections[4].getAttribute("id")
        }
    ];

sectionBtns.forEach((section,i) => {
    section.addEventListener("click", () => {
        hideAllSectionsExcept(sectionIds[i].sectionName,i);
    });
});

function hideAllSectionsExcept(sectionName,index){
    sections[index].style.display = "flex";
    for(let i = 0; i < sectionIds.length; i++){
        if (sections[i].getAttribute("id") !== sectionName){
            sections[i].style.display = "none";
        }
    }
}

/* Home & Main Section */
clickToFlipCardInfo.addEventListener("click", showFlipCardInfo);

function showFlipCardInfo() {
    if (flipCardInfo.style.display === "" || flipCardInfo.style.display === "none") {
        flipCardInfo.style.display = "block";
        clickToFlipCardInfo.innerText = "Hide info";

    } else if (flipCardInfo.style.display === "block") {
        flipCardInfo.style.display = "none";
        clickToFlipCardInfo.innerText = "Click card to flip";
    }
}

/* Add A Card Section */
let addACardForm = document.getElementById("add-a-card-form");
let addACardTitle = document.getElementById("add-card-title");
let addACardDefinition = document.getElementById("add-card-definition");
let addCardBtn = document.getElementById("add-card");

/* Get Items From Local Storage */
let flashcardsArray = localStorage.getItem("flashcards") ? JSON.parse(localStorage.getItem("flashcards")) : [];

/* Add A Card Event */
addACardForm.addEventListener("submit", function (event) {
    let newCard = {
        id: Date.now(),
        title: addACardTitle.value,
        definition: addACardDefinition.value
    };

    /* Save to Local Storage */
    flashcardsArray.push(newCard);
    localStorage.setItem("flashcards", JSON.stringify(flashcardsArray));

    /* Clear Add Card */
    addACardTitle.value = "";
    addACardDefinition.value = "";
});

/* View Cards Section */
let viewCardsTable = document.getElementById("view-cards-table");

/* Display Cards */
for (let i = 0; i < flashcardsArray.length; i++) {
    let viewCardsFormat =
        `
    <tr id="${flashcardsArray[i].id}">
        <td>${flashcardsArray[i].title}</td>
        <td>${flashcardsArray[i].definition}</td>
    </tr>
    `;

    viewCardsTable.innerHTML += viewCardsFormat;
}






