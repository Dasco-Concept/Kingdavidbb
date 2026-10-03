const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
/* ============================= */
/* SCROLL REVEAL */
/* ============================= */

const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
/* ============================= */
/* TYPING EFFECT */
/* ============================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Web Designer",
    "Web Developer",
    "Creative Designer",
    "Tech Enthusiast",
    "Graphic Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();
/* ============================= */
/* ANIMATED SKILL BARS */
/* ============================= */

const skillBars = document.querySelectorAll(".skill-bar div");

const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                skillObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5
    }
);

skillBars.forEach((bar) => {
    skillObserver.observe(bar);
});
/* ============================= */
/* DARK / LIGHT MODE */
/* ============================= */

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeBtn.textContent = "🌙";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "🌙";
            localStorage.setItem("theme", "light");
        } else {
            themeBtn.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        }

    });
}
/* ============================= */
/* MOUSE GLOW */
/* ============================= */

const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
});
const profileImage = document.querySelector(".profile-circle img");

if (profileImage) {
    profileImage.addEventListener("click", () => {
        profileImage.classList.toggle("color-active");
    });
}
/* ============================= */
/* SCROLL PROGRESS */
/* ============================= */

const scrollProgress = document.getElementById("scroll-progress");

if (scrollProgress) {

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrollPercentage =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width =
            scrollPercentage + "%";
    });
}
/* ============================= */
/* ANIMATED COUNTERS */
/* ============================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let current = 0;

                const updateCounter = () => {

                    const increment = Math.max(
                        1,
                        Math.ceil(target / 50)
                    );

                    current += increment;

                    if (current >= target) {
                        counter.textContent = target;
                    } else {
                        counter.textContent = current;
                        requestAnimationFrame(updateCounter);
                    }
                };

                updateCounter();

                observer.unobserve(counter);
            }

        });

    },
    {
        threshold: 0.5
    }
);

counters.forEach((counter) => {
    counterObserver.observe(counter);
});
/* ============================= */
/* ACTIVE NAVIGATION */
/* ============================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    const linkPage =
        link.getAttribute("href").split("/").pop();

    if (linkPage === currentPage) {
        link.classList.add("active");
    }

});
/* ============================= */
/* BACK TO TOP */
/* ============================= */

const backToTop = document.getElementById("back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
/* ============================= */
/* LOADING SCREEN */
/* ============================= */

const hideLoader = () => {
    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {
        loader.classList.add("hide");
    }, 700);
};

if (document.readyState === "complete") {
    hideLoader();
} else {
    window.addEventListener("load", hideLoader, { once: true });
}
/* =========================
   SMOOTH CURSOR TRAIL
========================= */

const cursorTrail = document.createElement("div");
cursorTrail.className = "cursor-trail";
document.body.appendChild(cursorTrail);

let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function animateCursorTrail() {
    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;

    cursorTrail.style.left = trailX + "px";
    cursorTrail.style.top = trailY + "px";

    requestAnimationFrame(animateCursorTrail);
}

animateCursorTrail();

/* Enlarge trail over clickable elements */

document.querySelectorAll("a, button").forEach((element) => {

    element.addEventListener("mouseenter", () => {
        cursorTrail.classList.add("cursor-hover");
    });

    element.addEventListener("mouseleave", () => {
        cursorTrail.classList.remove("cursor-hover");
    });

});
/* =========================
   3D PROJECT TILT EFFECT
========================= */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 768) return;

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;

        card.classList.add("tilt-active");

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;
    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("tilt-active");

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });

});
/* =========================
   PROJECT PREVIEW MODAL
========================= */

const projectModal = document.getElementById("project-modal");
const modalClose = document.getElementById("modal-close");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription =
    document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");

const previewProjects =
    document.querySelectorAll(".preview-project");

const previewButtons =
    document.querySelectorAll(".preview-btn");

function openProjectModal(card) {

    const title = card.dataset.title;
    const description = card.dataset.description;
    const image = card.dataset.image;
    const link = card.dataset.link;

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;
    modalImage.alt = title;
    modalLink.href = link;

    projectModal.classList.add("active");

    document.body.style.overflow = "hidden";
}

/* Preview buttons */

previewProjects.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".project-card");

        openProjectModal(card);

    });

});

/* Image overlay buttons */

previewButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        event.preventDefault();

        const card = button.closest(".project-card");

        openProjectModal(card);

    });

});

/* Close */

function closeProjectModal() {

    projectModal.classList.remove("active");

    document.body.style.overflow = "";

}

modalClose.addEventListener("click", closeProjectModal);

/* Close when clicking outside */

projectModal.addEventListener("click", (event) => {

    if (event.target === projectModal) {
        closeProjectModal();
    }

});

/* Close with Escape */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        projectModal.classList.contains("active")
    ) {
        closeProjectModal();
    }

});
/* =========================
   PROJECT FILTER SYSTEM
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const filterProjects =
    document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        /* Change active button */

        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        /* Filter projects */

        filterProjects.forEach((project) => {

            const categories =
                (project.dataset.category || "").split(/\s+/);

            project.classList.remove("filter-show");

            if (
                filter === "all" ||
                categories.includes(filter)
            ) {

                project.classList.remove("filter-hide");

                setTimeout(() => {
                    project.classList.add("filter-show");
                }, 20);

            } else {

                project.classList.add("filter-hide");

            }

        });

    });

});
/* =========================
   PROJECT LIGHTBOX - FIXED
========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxCounter = document.getElementById("lightbox-counter");

const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

const lightboxTriggers =
    document.querySelectorAll(".lightbox-trigger");

let currentImage = 0;

function showLightboxImage(index) {

    if (lightboxTriggers.length === 0) return;

    currentImage =
        (index + lightboxTriggers.length) %
        lightboxTriggers.length;

    const trigger = lightboxTriggers[currentImage];
    const image = trigger.querySelector("img");

    if (!image) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightboxTitle.textContent = image.alt;

    lightboxCounter.textContent =
        `${currentImage + 1} / ${lightboxTriggers.length}`;
}

function openLightbox(index) {

    showLightboxImage(index);

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.style.overflow = "";
}


/* CLICK PROJECT IMAGE */

lightboxTriggers.forEach((trigger, index) => {

    trigger.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        openLightbox(index);

    });

});


/* PREVIOUS */

lightboxPrev.addEventListener("click", function(event) {

    event.stopPropagation();

    showLightboxImage(currentImage - 1);

});


/* NEXT */

lightboxNext.addEventListener("click", function(event) {

    event.stopPropagation();

    showLightboxImage(currentImage + 1);

});


/* CLOSE */

lightboxClose.addEventListener("click", closeLightbox);


/* CLICK OUTSIDE */

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


/* KEYBOARD */

document.addEventListener("keydown", function(event) {

    if (!lightbox.classList.contains("active")) return;

    if (event.key === "ArrowLeft") {
        showLightboxImage(currentImage - 1);
    }

    if (event.key === "ArrowRight") {
        showLightboxImage(currentImage + 1);
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

});
/* =========================
   SIMPLE LIGHTBOX
========================= */

const simpleLightbox =
    document.getElementById("simple-lightbox");

const simpleImage =
    document.getElementById("simple-lightbox-image");

const simpleClose =
    document.getElementById("simple-lightbox-close");

const simplePrev =
    document.getElementById("simple-lightbox-prev");

const simpleNext =
    document.getElementById("simple-lightbox-next");

const lightboxImages =
    document.querySelectorAll(".open-lightbox");

let simpleCurrent = 0;


function showSimpleImage(index) {

    if (lightboxImages.length === 0) return;

    simpleCurrent =
        (index + lightboxImages.length) %
        lightboxImages.length;

    simpleImage.src =
        lightboxImages[simpleCurrent].src;

    simpleImage.alt =
        lightboxImages[simpleCurrent].alt;
}


function openSimpleLightbox(index) {

    showSimpleImage(index);

    simpleLightbox.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeSimpleLightbox() {

    simpleLightbox.classList.remove("active");

    document.body.style.overflow = "";
}


/* OPEN IMAGE */

lightboxImages.forEach((image, index) => {

    image.addEventListener("click", function(event) {

        event.preventDefault();
        event.stopPropagation();

        openSimpleLightbox(index);

    });

});


/* PREVIOUS */

simplePrev.addEventListener("click", function(event) {

    event.stopPropagation();

    showSimpleImage(simpleCurrent - 1);

});


/* NEXT */

simpleNext.addEventListener("click", function(event) {

    event.stopPropagation();

    showSimpleImage(simpleCurrent + 1);

});


/* CLOSE */

simpleClose.addEventListener(
    "click",
    closeSimpleLightbox
);


/* ESCAPE */

document.addEventListener("keydown", function(event) {

    if (!simpleLightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeSimpleLightbox();
    }

    if (event.key === "ArrowLeft") {
        showSimpleImage(simpleCurrent - 1);
    }

    if (event.key === "ArrowRight") {
        showSimpleImage(simpleCurrent + 1);
    }

});
/* =========================
   PROJECT SEARCH
========================= */

const projectSearch =
    document.getElementById("project-search");

const searchableProjects =
    document.querySelectorAll(".project-card");

if (projectSearch) {

    projectSearch.addEventListener("input", () => {

        const search =
            projectSearch.value.toLowerCase().trim();

        searchableProjects.forEach((project) => {

            const text =
                project.textContent.toLowerCase();

            if (text.includes(search)) {

                project.style.display = "";

            } else {

                project.style.display = "none";

            }

        });

    });

}
/* ==============================
   CIRCULAR SKILL ANIMATION
============================== */

const skillCircles =
    document.querySelectorAll(".circle");

const circleObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const circle = entry.target;
                const percent =
                    Number(circle.dataset.percent);

                const degrees =
                    (percent / 100) * 360;

                circle.style.background =
                    `conic-gradient(
                        #00e5ff ${degrees}deg,
                        #202020 ${degrees}deg
                    )`;

                observer.unobserve(circle);
            }

        });

    },
    {
        threshold: 0.5
    }
);

skillCircles.forEach((circle) => {
    circleObserver.observe(circle);
});
/* ==============================
   FUTURISTIC PARTICLES
============================== */

const canvas = document.getElementById("particles-canvas");

if (canvas) {

    const ctx = canvas.getContext("2d");

    let particles = [];
    let mouse = {
        x: null,
        y: null
    };

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    document.addEventListener("mousemove", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    const particleCount =
        window.innerWidth < 768 ? 45 : 90;

    for (let i = 0; i < particleCount; i++) {

        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5
        });

    }

    function animateParticles() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach((particle, index) => {

    particle.x += particle.speedX;
    particle.y += particle.speedY;

    if (particle.x < 0)
        particle.x = canvas.width;

    if (particle.x > canvas.width)
        particle.x = 0;

    if (particle.y < 0)
        particle.y = canvas.height;

    if (particle.y > canvas.height)
        particle.y = 0;

    ctx.beginPath();

    ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
        "rgba(0, 229, 255, 0.45)";

    ctx.fill();

    for (let j = index + 1; j < particles.length; j++) {

        const other = particles[j];

        const dx = particle.x - other.x;
        const dy = particle.y - other.y;

        const distance = Math.sqrt(
            dx * dx + dy * dy
        );

        if (distance < 120) {

            ctx.beginPath();

            ctx.moveTo(
                particle.x,
                particle.y
            );

            ctx.lineTo(
                other.x,
                other.y
            );

            ctx.strokeStyle =
                `rgba(0, 229, 255, ${
                    0.12 - distance / 1200
                })`;

            ctx.lineWidth = 0.5;

            ctx.stroke();
        }
    }
});
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}
/* ==============================
   MAGNETIC BUTTON EFFECT
============================== */

const magneticElements =
    document.querySelectorAll(".magnetic");

magneticElements.forEach((element) => {

    element.addEventListener("mousemove", (event) => {

        if (window.innerWidth <= 768) return;

        const rect =
            element.getBoundingClientRect();

        const x =
            event.clientX -
            (rect.left + rect.width / 2);

        const y =
            event.clientY -
            (rect.top + rect.height / 2);

        element.style.transform =
            `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    element.addEventListener("mouseleave", () => {

        element.style.transform =
            "translate(0, 0)";
    });

});
/* ==============================
   CUSTOM TEXT CURSOR
============================== */

const customCursor =
    document.querySelector(".custom-cursor");

const cursorText =
    document.getElementById("cursor-text");

if (customCursor) {

    document.addEventListener("mousemove", (event) => {

        customCursor.style.left =
            event.clientX + "px";

        customCursor.style.top =
            event.clientY + "px";
    });

    const cursorTargets =
        document.querySelectorAll(
            "a, button, .project-card, .service-card"
        );

    cursorTargets.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            customCursor.classList.add(
                "cursor-active"
            );

            if (element.classList.contains("project-card")) {
                cursorText.textContent = "VIEW";
            } else if (
                element.classList.contains("service-card")
            ) {
                cursorText.textContent = "SERVICE";
            } else {
                cursorText.textContent = "CLICK";
            }
        });

        element.addEventListener("mouseleave", () => {

            customCursor.classList.remove(
                "cursor-active"
            );

            cursorText.textContent = "";
        });
    });
}
/* ==============================
   CONTACT FORM FEEDBACK
============================== */

const contactForm =
    document.getElementById("contact-form");

const formStatus =
    document.getElementById("form-status");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formStatus.textContent =
            "Message ready to be sent.";

        contactForm.classList.add("form-sent");

        setTimeout(() => {
            contactForm.reset();
            contactForm.classList.remove("form-sent");
        }, 1500);
    });
}
/* ==============================
   SCROLLING HEADER
============================== */

const header = document.querySelector("header");

if (header) {

    function updateHeader() {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();
}