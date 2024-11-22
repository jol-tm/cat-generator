const jsConfetti = new JSConfetti();


function getImg() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(Response => Response.json())
        .then(displayData);
}

function displayData(result){
    const box = document.querySelector("#box");

    box.innerHTML = `<img id="anim" src="${result[0].url}"><button id="gen">Generate Cat &#x1F63A;</button>`;

    const gen = document.querySelector("#gen");

    gen.addEventListener("click", getImg);

    box.style.backgroundColor = randColor();
    gen.style.backgroundColor = randColor();

    jsConfetti.addConfetti({
        emojis: ['😺','😹','😻','🎊','❤️'],
        emojiSize: 50,
     })
}

function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

getImg();