export const initializeAccordion = () => {
    const faqItems = document.querySelectorAll(".js-faq-item");

    if (!faqItems) return;

    const options = {
        easing: "ease",
        duration: 300,
    };

    const closingKeyframes = (answer) => [
        { height: answer.offsetHeight + "px", opacity: 1 },
        { height: 0, opacity: 0 },
    ];

    const openingKeyframes = (answer) => [
        { height: 0, opacity: 0 },
        { height: answer.offsetHeight + "px", opacity: 1 },
    ];

    faqItems.forEach((faqItem) => {
        const question = faqItem.querySelector(".js-faq-question");
        const answer = faqItem.querySelector(".js-faq-answer");

        if (!question || !answer) return;

        question.addEventListener("click", (e) => {
            e.preventDefault();

            if (faqItem.getAttribute("open") !== null) {
                faqItem.classList.remove("is-open");
                const closingAnime = answer.animate(closingKeyframes(answer), options);
                closingAnime.onfinish = () => {
                    faqItem.removeAttribute("open");
                };
            } else {
                faqItem.setAttribute("open", "true");
                faqItem.classList.add("is-open");
                answer.animate(openingKeyframes(answer), options);
            }
        });
    });
};
