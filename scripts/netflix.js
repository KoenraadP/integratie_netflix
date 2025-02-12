"use strict";

// alle icons verzamelen in een soort array
// we zoeken letterlijk alle elementen
// in ons html DOCUMENT met de CLASS (.) tab-icon
const tabIcons = document.querySelectorAll(".tab-icon");

// alle tab content items verzamelen
const tabContentItems = document.querySelectorAll(".tab-content-item");

// ClickIcon() function koppelen
// aan alle icons
// functions aanroepen binnen een event
// doe je ZONDER haakjes
tabIcons.forEach(element => {
    element.addEventListener("click", ClickIcon);
});

//#region functions

// function die bij alle tabIcons
// de class tab-border verwijdert
// hierdoor nemen we standaard overal de rode rand weg
function RemoveBorders() {
    tabIcons.forEach(element => {
        element.classList.remove("tab-border");
    });
}

// function die bij alle tabContentItems
// de class show verwijdert
// hierdoor worden alle tabContentItems standaard onzichtbaar
function RemoveShow() {
    tabContentItems.forEach(element => {
        element.classList.remove("show");
    });
}

// function die uitgevoerd wordt
// wanneer er geklikt wordt op een icon
function ClickIcon() {
    RemoveBorders();
    RemoveShow();
    // this = waarop heb je geklikt
    // in dit geval gaat het over de icons
    this.classList.add("tab-border");
    // sla het id van het aangeklikte icon op
    // bijvoorbeeld: tab-1
    const iconId = this.id;
    // ga op zoek naar het content element 
    // dat hoort bij de id van het icon
    // bijvoorbeeld: tab-1-content
    const chosenContent = document.querySelector("#" + iconId + "-content");
    // voeg de show class toe aan chosenContent om het
    // zichtbaar te maken
    chosenContent.classList.add("show");
}

//#endregion
