/* =========================================================
   ELEGANT TECH PORTFOLIO
   Syeda Fizza Saeed
   OIBSIP - Level 1 Task 2
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* Close mobile menu after selecting a section */

navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


/* ================= HEADER ON SCROLL ================= */

const header = document.querySelector(".header");

function updateHeader() {
    if (window.scrollY > 40) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    const scrollPosition = window.scrollY + 180;

    sections.forEach((section) => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navItems.forEach((item) => {
                item.classList.remove("active");

                if (item.getAttribute("href") === `#${sectionId}`) {
                    item.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", updateActiveNav);

updateActiveNav();


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* ================= FOOTER YEAR ================= */

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();