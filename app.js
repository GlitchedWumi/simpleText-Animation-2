const text = document.querySelector(".text");
const textContent = text.textContent;
const textSplit = textContent.split("");
text.textContent = "";

for (let i = 0; i < textSplit.length; i++) {
    text.innerHTML += "<span>" + textSplit[i] + "</span>";
}

let char = 0;
let interval = setInterval(tickTok, 70);

function tickTok() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if (char === textSplit.length){
    complete();
    return;
    }
}

function complete(){
    clearInterval(interval);
    interval = null;
}