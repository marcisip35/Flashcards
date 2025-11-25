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

sectionBtns.forEach((section, i) => {
    section.addEventListener("click", () => {
        hideAllSectionsExcept(sectionIds[i].sectionName, i);
    });
});

function hideAllSectionsExcept(sectionName, index) {
    sections[index].style.display = "flex";
    for (let i = 0; i < sectionIds.length; i++) {
        if (sections[i].getAttribute("id") !== sectionName) {
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

/* Save to Local Storage */
function saveToLocalStorage() {
    localStorage.setItem("flashcards", JSON.stringify(flashcardsArray));
}

/* Add A Card Event */
addACardForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let newCard = {
        card_id: Date.now(),
        title: addACardTitle.value,
        definition: addACardDefinition.value
    };

    flashcardsArray.push(newCard);
    saveToLocalStorage();

    /* Clear Add Card */
    addACardTitle.value = "";
    addACardDefinition.value = "";

    //Display cards function
    displayCards();
});

/* View Cards Section */
let viewCardsTable = document.getElementById("view-cards-table");
let cardsTable = document.getElementsByClassName("cards-table");

// Display Cards 
function displayCards() {
    //Cleans the tables for a fresh slate of data
    for (let i = 0; i < cardsTable.length; i++) {
        cardsTable[i].innerHTML =
            `
            <tr id="view-cards-table-title">
                <th>Title</th>
                <th>Definition</th>
            </tr>
        `;

        //Displays all data in a table format for each table
        for (let j = 0; j < flashcardsArray.length; j++) {
            let tableCardsFormat;

            //For view cards section
            if (i === 0) {
                tableCardsFormat =
                    `
                <tr card_id="${flashcardsArray[j].card_id}">
                    <td style="width: 50%;">${flashcardsArray[j].title}</td>
                    <td style="width: 50%;">${flashcardsArray[j].definition}</td>
                </tr>
            `;

                //For edit cards section
            } else if (i === 1) {
                tableCardsFormat =
                    `
                <tr card_id="${flashcardsArray[j].card_id}">
                    <td style="width: 45%;">${flashcardsArray[j].title}</td>
                    <td style="width: 45%;">${flashcardsArray[j].definition}</td>
                    <td style="width: 10%;"><button class="edit-a-card-btn" card_edit_id="${flashcardsArray[j].card_id}">Edit</button></td>
                </tr>
            `;

                //For remove cards section
            } else if (i === 2) {
                tableCardsFormat =
                    `
                <tr card_id="${flashcardsArray[j].card_id}">
                    <td style="width: 45%;">${flashcardsArray[j].title}</td>
                    <td style="width: 45%;">${flashcardsArray[j].definition}</td>
                    <td style="width: 10%;"><button class="delete-a-card-btn" card_delete_id="${flashcardsArray[j].card_id}">Delete</button></td>
                </tr>
            `;

            } else {
                console.log("!!!Displaying table cards error --- Corresponding table not found: ", cardsTable[i]);
            }

            cardsTable[i].innerHTML += tableCardsFormat;
        }
    }
}
displayCards();

/* Remove A Card Section */
let removeAllCards = document.getElementById("remove-all-cards");

// Remove all cards
removeAllCards.addEventListener("click", () => {
    let removeAllConfirm = confirm("Are you sure you want to delete all cards");

    if (removeAllConfirm) {
        localStorage.removeItem("flashcards");
        flashcardsArray = [];
        displayCards();
    }
});

// Remove specific card
const deleteACardBtns = document.querySelectorAll(".delete-a-card-btn");
deleteACardBtns.forEach((btn) => {
    console.log("test");

    btn.addEventListener("click", () => {
        let card_delete_id = btn.getAttribute("card_delete_id");

        for (let i = 0; i < flashcardsArray.length; i++) {
            if (parseInt(card_delete_id) === parseInt(flashcardsArray[i].card_id)) {
                flashcardsArray.splice(i, 1);
                saveToLocalStorage();
                break;
            }
        }
    });
});


// Finds the card you are clicking on
function findCard() {

}







