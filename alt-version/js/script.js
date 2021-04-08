/* 
a volte a seguito di un refresh non viene aggiornato correttamente il 
valore della width delle immagini  
LINEA 22
*/



const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = $(".carousel-slide img");

/* debug logs */
console.log(carouselSlide);
console.log(carouselImages);

const prevBtn = $("#prev-button");
const nextBtn = $("#next-button");

var counter = 1;


const size = $("#first-clone").width();
console.log(size);

//per iniziare dalla prima immagine e non dal clone
carouselSlide.style.transform = 'translateX('+ (-size * counter) +'px)';

//funzione che scorre verso le immagini successive 
nextBtn.click(function(){
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter ++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
//funzione che scorre le immagini prcedenti
prevBtn.click(function(){
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// quando una transition finisce : 
carouselSlide.addEventListener("transitionend", function(){
    //se l'id dell immagine è last clone allora...
    if (carouselImages[counter].id === "last-clone") {
        //elimina la transition per non scorrere tutte le immagini
        carouselSlide.style.transition = "none";
        //posiziona il counter sulla penultima immagine
        counter = carouselImages.length -2;
        //e scorre
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    //se l'id dell immagine è first clone allora...
    else if (carouselImages[counter].id === "first-clone") {
        // elimina la transition per non scorrere come un matto
        carouselSlide.style.transition = "none";
        //posiziona il counter sulla prima immagine  
        counter = 1;
        //e scorre
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});