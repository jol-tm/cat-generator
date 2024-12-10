function getImg() {
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(Response => Response.json())
    .then(displayData);
}

function displayData(result){
    const jsConfetti = new JSConfetti();
    const bckg = document.body;
    const box = document.querySelector("#box");
    const img = document.querySelector("#catImg");
    const btn = document.querySelector("#changeBtn");
    const loader = document.querySelector("#loader");

    img.setAttribute("src", result[0].url)

    btn.addEventListener("click", change);
    
    img.onload = () => { 
        img.classList.add("fade");
        img.style.display = "block";
        btn.style.opacity = 1;
        loader.style.opacity = 0;
        jsConfetti.addConfetti({
            emojis: ['😺','😹','😻','🎊','❤️'],
            emojiSize: 50,
         })
    };

    box.style.backgroundColor = randColor();
    btn.style.backgroundColor = randColor();
    bckg.style.backgroundColor = randColor();
}

function change() {
    const box = document.querySelector("#box");
    const loader = document.querySelector("#loader");
    
    loader.style.opacity = 1;
    box.innerHTML = `<img id="loader" src="cat.png" alt=""><img id="catImg" src=""><button id="changeBtn" class="gen">Generate Cat &#x1F63A;</button>`;
    
    document.querySelector("#changeBtn").style.opacity = 0;
    getImg();
}

function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

change();