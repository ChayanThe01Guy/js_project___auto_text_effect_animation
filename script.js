const containerEl = document.querySelector(".container");
const textList = ["Youtuber", "Developer", "Designer"];

let textIndex = 0;
let charIndex = 0;

updateText();
function updateText() {
    charIndex++;
    containerEl.innerHTML = `<h1>I am ${textList[textIndex].slice(0,1) == "I" ? "an" : "a"} ${textList[textIndex].slice(0, charIndex)}</h1>`;
    
    if(charIndex == textList[textIndex].length) {
        textIndex++;
        charIndex = 0;
    }
    if(textIndex == textList.length) {
        textIndex = 0;
    }
    setTimeout(updateText, 400);
}