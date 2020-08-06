$(document).ready(() => {
    $(".burger").addClass("animate__animated animate__rubberBand");
    $(".content h4").addClass("animate__animated animate__heartBeat");
    $(".content p").addClass("animate__animated animate__wobble");
    $(".burger").click(() => {
        if($(".burger").children("i").hasClass("fa-bars")){
            $(".burger").children("i").removeClass("fa-bars");
            $(".burger").children("i").addClass("fa-times");
        }
        else{
            $(".burger").children("i").removeClass("fa-times");
            $(".burger").children("i").addClass("fa-bars");
        }
        $(".nav").toggleClass("nav-active");
        $(".content").toggleClass("content-collapse");
    })
})