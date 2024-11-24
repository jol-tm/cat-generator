const jsConfetti = new JSConfetti();

function getImg() {
    fetch("https://api.thecatapi.com/v1/images/search")
        .then(Response => Response.json())
        .then(displayData);
}

function displayData(result){
    const box = document.querySelector("#box");
    
    box.innerHTML = `<img id="catImg" src="${result[0].url}"><button class="gen pulse">Generate Cat &#x1F63A;</button>`;
    
    // Só existem depois de serem criadas na box acima
    const gen = document.querySelector(".gen");
    const img = document.querySelector("#catImg");

    gen.addEventListener("click", getImg);
    img.onload = () => { 
        img.classList.add("fade");
        gen.classList.remove("pulse");
            
    };

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