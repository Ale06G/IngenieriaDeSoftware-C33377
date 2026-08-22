const wrapper = document.querySelector(".sliderWrapper");

const sliderLeftButton = document.querySelector(".slider-button-left");
const sliderRightButton = document.querySelector(".slider-button-right");

const didYouKnowButton = document.querySelector("#did-you-know-button");
const modalContainer = document.querySelector(".modal-container");
const modalCloseButton = document.querySelector(".modal-close-button");

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

const showHideButton = document.querySelector("#show-hide-button");
const additionalInfo = document.querySelector(".additional-info");

let position = 0;

sliderLeftButton.addEventListener("click", () => {
    wrapper.style.transform=`translateX(${position==0 ? position=0 : position+=350}px)`
    console.log(position);
})

sliderRightButton.addEventListener("click", () => {
    wrapper.style.transform=`translateX(${position==-1050 ? position-=0 : position-=350}px)`
    console.log(position);
})

didYouKnowButton.addEventListener("click", () => {
    modalContainer.style.display= "block";
    document.body.classList.add("no-scroll")
})

modalCloseButton.addEventListener("click", () => {
    modalContainer.style.display= "none";
    document.body.classList.remove("no-scroll")
})

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    })
})

showHideButton.addEventListener("click", () => {
    additionalInfo.classList.toggle("active");
    if(additionalInfo.classList.contains("active")) {
        showHideButton.textContent = "Ocultar consejos para principiantes";
        additionalInfo.style.maxHeight = additionalInfo.scrollHeight + "px";
    } else {
        showHideButton.textContent = "Mostrar consejos para principiantes";
        additionalInfo.style.maxHeight = 0;
    }
})