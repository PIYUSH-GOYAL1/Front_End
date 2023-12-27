const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation() {
    var t1 = gsap.timeline();
    t1.from("#nav" , {
        y : "-10",
        opacity: 0,
        ease : Expo.easeInOut,
        duration: 1.5
        
    })
    t1.to(".gsap-cover-elem" , {
        y : 0,
        ease : Expo.easeInOut,
        duration: 1.5,
        stagger : 0.2,
        delay: "-1"
    })
    t1.from("#landing-page-footer" , {
        y : 10,
        opacity: 0,
        ease : Expo.easeInOut,
        duration: 1.5
        
    })
}

function circleMouseFollower(){
    window.addEventListener("mousemove" , function(dets){
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`
    })
}

document.querySelectorAll(".elem")
.forEach(function(elem){
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove" , function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(elem.querySelector("img") , {
            opacity : 1,
            ease : Power3,
            top : diff,
            left : dets.clientX,
            rotate : gsap.utils.clamp(-20 , 20 , diffrot*0.7)
        })
    })

    elem.addEventListener("mouseleave" , function(dets){
        
        gsap.to(elem.querySelector("img") , {
            opacity : 0,
            ease : Power3,
            duartion : 0.5
            
        })
    })
})



circleMouseFollower();
firstPageAnimation();

