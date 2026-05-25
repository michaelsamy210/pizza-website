// 1. تجميع كل الـ Scroll Effects في مكان واحد سريّع ونظيف
window.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;

    // تأثير الـ Navbar عند النزول
    let navbar = document.querySelector(".navbar");
    if (navbar) {
        if (scrollPos > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    // إظهار وإخفاء زرار الصعود لأعلى (لو موجود في الصفحة)
    let topBtn = document.getElementById("topBtn");
    if (topBtn) {
        if (scrollPos > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    // تحديد اللينك النشط في القائمة بناءً على السكشن (Scroll Spy)
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".nav-link");
    let currentScroll = scrollPos + 100;

    sections.forEach(section => {
        if (currentScroll >= section.offsetTop && currentScroll < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === "#" + section.id) {
                    link.classList.add("active");
                }
            });
        }
    });

    // تشغيل أنيميشن الظهور الفريد (Fade-up) عند السكرول
    let animatedElements = document.querySelectorAll(".fade-up");
    animatedElements.forEach(el => {
        let position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

// 2. زرار الصعود لأعلى (Scroll to top) - حماية ضد الـ Error لو مش في كل الصفحات
let topBtn = document.getElementById("topBtn");
if (topBtn) {
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// 3. إخفاء الـ Loader بأمان أول ما الصفحة تحمل بالكامل
window.addEventListener("load", function () {
    let loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});