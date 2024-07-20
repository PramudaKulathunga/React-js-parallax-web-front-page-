const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");
const hamburger_menu = document.querySelectorAll(".hamburger");
const container = document.querySelector(".container");

//parallaxing
let xValue = 0,
    yValue = 0,
    rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotationspeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.5;

        el.style.transform = `
        translateX(calc(-50% + ${-xValue * speedx}px)) 
        rotateY(${rotateDegree * rotationspeed * 2}deg) translateY(calc(-50% + ${yValue * speedy}px)) 
        perspective(2300px) translateZ(${zValue * speedz}px)`;
    });
}

update(0);

parallax_el.forEach((el) => {
    el.style.transition = "0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99)"
});


//Animation part
const screenHeight = 720; // Define the screen height
const pxToPercentY = (value) => (value / screenHeight) * 100 + '%';// Convert pixel values to percentages

const tl = gsap.timeline();

tl.fromTo(".bg-img", { top: pxToPercentY(500) }, { top: pxToPercentY(380), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".smokeR-img", { top: pxToPercentY(800) }, { top: pxToPercentY(390), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".smokeL-img", { top: pxToPercentY(800) }, { top: pxToPercentY(350), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".smokeR-img", { opacity: 0 }, { opacity: 1, duration: 3.5 }, "1")
    .fromTo(".smokeL-img", { opacity: 0 }, { opacity: 1, duration: 3.5 }, "1")
    .fromTo(".ultra-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(200), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".arcee-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(250), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".arceeeye-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(175), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".ironhide-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(585), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".ship-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(705), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".ratchet-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(575), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".optimus-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(545), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".bumble-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(245), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".jetfire-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(595), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".ship2-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(605), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".jazz-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(580), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".rock-img", { top: pxToPercentY(1500) }, { top: pxToPercentY(680), duration: 3.5, ease: "power3.out" }, "1")
    .fromTo(".transformers-img", { top: pxToPercentY(-300) }, { top: pxToPercentY(335), duration: 5, ease: "power3.out" }, "2")
    .fromTo(".transformers-img", { opacity: 0 }, { opacity: 1, duration: 5 }, "2")
    .fromTo(".firestar1-img", { top: pxToPercentY(-500) }, { top: pxToPercentY(335), duration: 5, ease: "power3.out" }, "2")
    .fromTo(".firestar1-img", { opacity: 0.5 }, { opacity: 1, duration: 5 }, "2")
    .fromTo(".firestar2-img", { top: pxToPercentY(-100) }, { top: pxToPercentY(335), duration: 5, ease: "power3.out" }, "2")
    .fromTo(".firestar2-img", { opacity: 0.5 }, { opacity: 1, duration: 5 }, "2")
    .fromTo(".hide", { opacity: 0 }, { opacity: 1, duration: 5 }, "3")
    .fromTo(".hide2", { opacity: 0 }, { opacity: 0.15, duration: 5 }, "3");

window.addEventListener("mousemove", (e) => {

    if (tl.isActive()) return;

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e.clientX);

});

//menu bar
hamburger_menu.forEach(menu => {
    menu.addEventListener("click", () => {
        container.classList.toggle("active");
    });
});
