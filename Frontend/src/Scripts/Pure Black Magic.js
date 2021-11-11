//Fonte
JSON.stringify(Array.from(document.querySelectorAll(".tr__product")).map((el)=>({
    nome:el.querySelector(".td__name > a > .td__nameWrapper > p").innerText,
    imagem:el.querySelector(".td__name > a > .td__imageWrapper > div > img").src,
    eficiencia:(el.querySelector(".td__spec.td__spec--2").innerText).replace("Efficiency Rating\n",""),
    voltagem:(el.querySelector(".td__spec.td__spec--3").innerText).replace("Wattage\n",""),
    modular:(el.querySelector(".td__spec.td__spec--4").innerText).replace("Modular\n",""),
    preco:(parseInt(((el.querySelector(".td__price").innerText).replace("Add","")).replace("$",""))*5.41).toFixed(2),
})))

//CPU
JSON.stringify(Array.from(document.querySelectorAll(".tr__product")).map((el)=>({
    nome:el.querySelector(".td__name > a > .td__nameWrapper > p").innerText,
    imagem:el.querySelector(".td__name > a > .td__imageWrapper > div > img").src,
    clock:(el.querySelector(".td__spec.td__spec--2").innerText).replace("Performance Core Clock\n",""),
    boost:(el.querySelector(".td__spec.td__spec--3").innerText).replace("Performance Boost Clock\n",""),
    tdp:(el.querySelector(".td__spec.td__spec--4").innerText).replace("TDP\n",""),
    gpu:(el.querySelector(".td__spec.td__spec--5").innerText).replace("Integrated Graphics\n",""),
    preco:(parseInt(((el.querySelector(".td__price").innerText).replace("Add","")).replace("$",""))*5.41).toFixed(2),
})))

//Placa mãe
JSON.stringify(Array.from(document.querySelectorAll(".tr__product")).map((el)=>({
    nome:el.querySelector(".td__name > a > .td__nameWrapper > p").innerText,
    imagem:el.querySelector(".td__name > a > .td__imageWrapper > div > img").src,
    formato:(el.querySelector(".td__spec.td__spec--2").innerText).replace("Form Factor\n",""),
    maxMemoria:(el.querySelector(".td__spec.td__spec--3").innerText).replace("Memory Max\n",""),
    espacosDeMemoria:(el.querySelector(".td__spec.td__spec--4").innerText).replace("Memory Slots\n",""),
    gpu:(el.querySelector(".td__spec.td__spec--5").innerText).replace("Integrated Graphics\n",""),
    soquete:(el.querySelector(".td__spec.td__spec--1").innerText).replace("Socket / CPU\n",""),
    preco:(parseInt(((el.querySelector(".td__price").innerText).replace("Add","")).replace("$",""))*5.41).toFixed(2),
})))

//Placa de vídeo
JSON.stringify(Array.from(document.querySelectorAll(".tr__product")).map((el)=>({
    nome:el.querySelector(".td__name > a > .td__nameWrapper > p").innerText,
    imagem:el.querySelector(".td__name > a > .td__imageWrapper > div > img").src,
    chipset:(el.querySelector(".td__spec.td__spec--1").innerText).replace("Chipset\n",""),
    coreClock:(el.querySelector(".td__spec.td__spec--3").innerText).replace("Core Clock\n",""),
    boostClock:(el.querySelector(".td__spec.td__spec--4").innerText).replace("Boost Clock\n",""),
    memoria:(el.querySelector(".td__spec.td__spec--2").innerText).replace("Memory\n",""),
    preco:(parseInt(((el.querySelector(".td__price").innerText).replace("Add","")).replace("$",""))*5.41).toFixed(2),
})))

//RAM
JSON.stringify(Array.from(document.querySelectorAll(".tr__product")).map((el)=>({
    nome:el.querySelector(".td__name > a > .td__nameWrapper > p").innerText,
    imagem:el.querySelector(".td__name > a > .td__imageWrapper > div > img").src,
    velocidade:(el.querySelector(".td__spec.td__spec--1").innerText).replace("Speed\n",""),
    preco:(parseInt(((el.querySelector(".td__price").innerText).replace("Add","")).replace("$",""))*5.41).toFixed(2),
})))

//Armazenamento
JSON.stringify(Array.from(document.querySelectorAll(".tr__product")).map((el)=>({
    nome:el.querySelector(".td__name > a > .td__nameWrapper > p").innerText,
    imagem:el.querySelector(".td__name > a > .td__imageWrapper > div > img").src,
    capacidade:(el.querySelector(".td__spec.td__spec--1").innerText).replace("Capacity\n",""),
    preco:(parseInt(((el.querySelector(".td__price").innerText).replace("Add","")).replace("$",""))*5.41).toFixed(2),
})))