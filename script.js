// =========================
// Scroll Animation
// =========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    observer.observe(card);

});


// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

};

function backToTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}