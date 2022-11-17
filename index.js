let DOMSelectors = {
    container: document.getElementById("container")
}

let inputArray = [];
let nameArray = [];
let cardNum = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    for (let [name, value] of data) {
        document.getElementById(name).value = "";
        inputArray.push(value);
        nameArray.push(name);
      }

      cardNum++;
      printCard();
    });