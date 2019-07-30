"use strict"
const accordionItemEl = document.getElementsByClassName("accordion__item");
const iconEl = document.querySelector(".accordion__icon");

function accordion() {
    for (let item of accordionItemEl) {
        let accHeader = item.firstElementChild;
        accHeader.addEventListener("click", function () {
            let accDetails = this.nextElementSibling;
            if (accDetails.style.maxHeight != 0) {
                accDetails.style.maxHeight = null;
                this.lastElementChild.innerHTML = "+";
            } else {
                accDetails.style.maxHeight = accDetails.scrollHeight + "px";
                this.lastElementChild.innerHTML = "-";
            }
        })
    }
}

accordion();