const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var crsr = document.querySelector("#circ")
main.addEventListener("mousemove",function(dets){
    gsap.to(crsr,{
        x: dets.clientX,
        y: dets.clientY,
        duration:.5,
        ease:Expo

    })
})
function firstPageAnimation(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y:"-10",
        opacity:0,
        duration:1.7,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        duration:2,
        ease:Expo.easeInOut,
        stagger:0.2,
        delay:-1
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
        delay:-1
    })
}
document.querySelectorAll(".elem").forEach(function (elem){
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power1,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
    });
   
});
firstPageAnimation();
