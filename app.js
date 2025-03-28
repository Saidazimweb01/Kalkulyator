// let elForm = document.querySelector("form")
// let elList = document.querySelector("ul")
// let elInp = document.querySelector("input")

// elForm.addEventListener("submit", function (evt) {
//     evt.preventDefault()

//     let elItem = document.createElement("li")

//     elItem.innerHTML = elInp.value
//     elList.appendChild(elItem)
//     elInp.value = ""

// })


let elInpOne = document.querySelector(".one")
let elInpTwo = document.querySelector(".two")
let elSelect = document.querySelector("select")
let elBtn = document.querySelector("button")
let elList = document.querySelector("ul")


elBtn.addEventListener("click", function (evt) {
    evt.preventDefault()

    let elItem = document.createElement("li")



    let num1 = +elInpOne.value
    let num2 = +elInpTwo.value

    if (isNaN(num1) || isNaN(num2)) {
        elItem.setAttribute('class', 'red-text')
        elItem.textContent = "Iltimos harf kiritmang!";
        elList.appendChild(elItem);
        return;
    }


    switch (+elSelect.value) {
        case 1:
            elItem.innerHTML = `${num1} + ${num2} = ${num1 + num2}`;
            break;
        case 2:
            elItem.innerHTML = `${num1} - ${num2} = ${num1 - num2}`;
            break;
        case 3:
            elItem.innerHTML = `${num1} / ${num2} = ${num1 / num2}`;
            break;
        case 4:
            elItem.innerHTML = `${num1} * ${num2} = ${num1 * num2}`;
            break;

    }

    elInpOne.value = ""
    elInpTwo.value = ""
    elItem.setAttribute('class', 'atributestyle')
    elList.appendChild(elItem)
})