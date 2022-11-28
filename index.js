let DOMSelectors = {
    container: document.getElementById("container")
}

let inputArray = [];
let titleArray = [];
let cardNum = 0;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    for (let [title, value] of data) {
        document.getElementById(title).value = "";
        inputArray.push(value);
        nameArray.push(title);
      }

      cardNum++;
      printCard();
    });

    function printCard() {
      let card = document.createElement("div");
      card.id = `card-${cardNum}`;
      card.setAttribute("class", "card created");
    
      let name = document.createElement("p");
      name.textContent = inputArray[0];
      name.id = `name-${cardNum}`;
      name.setAttribute("class", "created name");
    
      let occ = document.createElement("p");
      occ.textContent = inputArray[1];
      occ.id = `occ-${cardNum}`;
      occ.setAttribute("class", "created occ");
    
      let resValue = "";
    
      if (inputArray[2] == "" || !inputArray[2].includes("https://docs.google.com/")) {
      } else {
        let resLink = document.createElement("res");
        resLink.src = inputArray[2];
        resLink.alt = `res${cardNum}`;
        resLink.id = "res";
        resLink.setAttribute("class", "created res");
        resValue = resLink;
      }
    
      DOMSelectors.container.append(card);
      card.append(name, resValue, occ);
      inputArray = [];
      titleArray = [];
    }
    
    
    function reset() {
      document.getElementById("container").innerHTML="";
    }
    
    function undo () {
      document.getElementById(`card-${cardNum}`).remove();
      cardNum -= 1;
      console.log(cardNum);
    }