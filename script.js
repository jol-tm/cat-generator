function getImg() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(Response => Response.json())
    .then(displayData);
}

function displayData(result){
    const jsConfetti = new JSConfetti();
    const box = document.querySelector("#box");
    const bckg = document.body;

    box.style.gap = 0;
    box.innerHTML = `<img id="catImg" src="${result[0].url}"><button class="gen pulse">Generate Cat &#x1F63A;</button>`;
    
    // Só existem depois de serem criadas na box acima
    const gen = document.querySelector(".gen");
    const img = document.querySelector("#catImg");

    gen.addEventListener("click", getImg);
    img.onload = () => { 
        gen.classList.remove("pulse");
        img.classList.add("fade");
        img.style.display = "block";
        box.style.gap = "1rem";
        jsConfetti.addConfetti({
            emojis: ['😺','😹','😻','🎊','❤️'],
            emojiSize: 50,
         })
    };

    box.style.backgroundColor = randColor();
    gen.style.backgroundColor = randColor();
    bckg.style.backgroundColor = randColor();
    

}

function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

getImg();