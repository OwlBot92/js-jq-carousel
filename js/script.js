
const rightChevron = $(".right");
const leftChevron = $(".left");

leftChevron.click(function(){
    var currentImg = $(".active");
    var prevImg = currentImg.prev();
    
    if (currentImg.attr("id") == "first-img") {
        currentImg.removeClass("active");
        $("#last-img").addClass("active");
    }
    else{
        currentImg.removeClass("active");
        prevImg.addClass("active");
    }
});

rightChevron.click(function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (currentImg.attr("id") == "last-img") {
        currentImg.removeClass("active");
        $("#first-img").addClass("active");
    }
    else {
        currentImg.removeClass("active");
        nextImg.addClass("active");
    }
});