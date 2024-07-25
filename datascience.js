document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach(faq => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const curriculums = document.querySelectorAll(".curriculum");

    curriculums.forEach(curriculum => {
        curriculum.addEventListener("click", () => {
            curriculum.classList.toggle("active");
        });
    });
});

