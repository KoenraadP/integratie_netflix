"use strict";

const tabIcons = document.querySelectorAll(".tab-icon");
const tabContentItems = document.querySelectorAll(".tab-content-item");

tabIcons.forEach(element => {
    element.addEventListener("click", ClickIcon)
});

function ClickIcon() {
    RemoveBorders();
    RemoveShow();
    this.classList.add("tab-border");
    const chosenContent = document.querySelector("#" + this.id + "-content");
    chosenContent.classList.add("show");
}

function RemoveBorders() {
    tabIcons.forEach(element => {
        element.classList.remove("tab-border");
    });
}

function RemoveShow() {
    tabContentItems.forEach(element => {
        element.classList.remove("show");
    });
}