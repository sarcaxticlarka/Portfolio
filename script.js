const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});


function init(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()

 


function movingtext(){
    var tl = gsap.timeline({ repeat: -1 });
tl.to(".welcome h1", 30, { backgroundPosition: "-960px 0" });
}

movingtext()






var tl = gsap.timeline()

// ({ repeat: -1 });
// tl.to(".welcome h1", 30, { backgroundPosition: "-960px 0" });


tl.from(".me h1", {
    y: 120,
    duration: 0.6,
    delay: 0.5,
    opacity: 0,
    stagger: 0.3
})



// tl.from(".page2 .do h1",{
//     transform: "translateX(-100%)",

//     scrollTrigger:{
//         trigger: ".page2",
//         scroller: ".main",
//         start:"top 0",
//         end:"top -50%",
//         markers: true,
//         scrub:3,
//         pin:true
//     }

// })


tl.to(".page2 .do h1", {
    xPercent: -100, // Move the element 100% to the left (off-screen)
    fontWeight: 500,
    color: "#de4e7e",
    scrollTrigger: {
        scroller: ".main",
        trigger: ".page2", // Element to trigger the animation
        // scroller: ".main",
        start: "top -1%", // Start the animation when the top of ".page2" is at the middle of the viewport
        end: "bottom top", // End the animation when the top of ".page2" meets the top of the viewport
        scrub: 3, // Smoothly animate the position of the element
        pin: true, // Pin the element in place while the animation occurs

    }
});


// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Call the imageAnimation function after DOM is loaded
    imageAnimation();
});

function imageAnimation() {
    var elemC = document.querySelector(".elem-container");
    var fixed_Image = document.querySelector(".fixed-image");

    elemC.addEventListener("mouseenter", function () {
        fixed_Image.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function () {
        fixed_Image.style.display = "none";
    });

    var elems = document.querySelectorAll(".elem");

    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image");
            fixed_Image.style.backgroundImage = `url("${image}")`;
        });
    });
}

function cursor(){
// -------------Cursor-------------
// Set At Top 0 Left 0
gsap.set(".cursorA", { xPercent: -50, yPercent: -50 });
gsap.set(".cursorB", { xPercent: -50, yPercent: -50 });
gsap.set(".cursorC", { xPercent: -50, yPercent: -50 });

// Create Var(CA) Of Cursor Div(.cursorA)
var CA = document.querySelector(".cursorA");
var CB = document.querySelector(".cursorB");
var CC = document.querySelector(".cursorC");

// Mousemove Fun()
window.addEventListener("mousemove", (e) => {
	gsap.to(CA, 0.5, { x: e.clientX, y: e.clientY });
	gsap.to(CB, 1.3, { x: e.clientX, y: e.clientY });
	gsap.to(CC, 2.2, { x: e.clientX, y: e.clientY });
	gsap.to(CA, { delay: 0.6, opacity: 1 });
	gsap.to(CB, { delay: 2, opacity: 1 });
	gsap.to(CC, { delay: 3, opacity: 1 });
});
// -------------/Cursor-------------

// -------------JQueryDivHover Animation On Cursor-------------
$(document).ready(function () {
	// -------------cursorA-------------
	$("#divA, h1").hover(
		function () {
			// Mouse In
			$(".cursorA").animate({
				width: "40px",
				height: "40px"
			});
		},
		function () {
			// Mouse Out
			$(".cursorA").animate({
				width: "13px",
				height: "13px"
			});
		}
	);
	// -------------cursorB-------------
	$("#divA, p").hover(
		function () {
			// Mouse In
			$(".cursorB").animate({
				width: "70px",
				height: "70px"
			});
		},
		function () {
			// Mouse Out
			$(".cursorB").animate({
				width: "31px",
				height: "31px"
			});
		}
	);
	// -------------cursorC-------------
	$("#divA, p").hover(
		function () {
			// Mouse In
			$(".cursorC").animate({
				width: "22px",
				height: "22px"
			});
		},
		function () {
			// Mouse Out
			$(".cursorC").animate({
				width: "70px",
				height: "70px"
			});
		}
	);
});
// -------------/JQueryDivHover Animation On Cursor-------------

// -------------JQueryDivHover CSS-------------
$(document).ready(function () {
	// -------------cursorA-------------
	$("p").hover(
		function () {
			// Mouse In
			$(".cursorA").css({
				background: "none"
			});
		},
		function () {
			// Mouse Out
			$(".cursorA").css({
				background: "white"
			});
		}
	);
	// -------------cursorB-------------
	$("#divA, p").hover(
		function () {
			// Mouse In
			$(".cursorB").css({
				background: "none"
			});
		},
		function () {
			// Mouse Out
			$(".cursorB").css({
				background: "violet"
			});
		}
	);
	// -------------cursorC-------------
	$("#divA, p").hover(
		function () {
			// Mouse In
			$(".cursorC").css({
				background: "White"
			});
		},
		function () {
			// Mouse Out
			$(".cursorC").css({
				background: "none"
			});
		}
	);
});
}

cursor()
 