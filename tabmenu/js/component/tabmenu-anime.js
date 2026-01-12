export const initializeTabMenuAnime = () => {
    const buttons = document.querySelectorAll(".js-tab-button--anime");
    const texts = document.querySelectorAll(".js-tab-text--anime");
    const content = document.querySelector(".js-tab-content--anime");
    const tabActiveClass = "is-active";
    const tabAnimationClass = "is-animated";

    if (buttons.length === 0 || texts.length === 0 || !content) return;

    buttons[0].classList.add(tabActiveClass);
    content.textContent = texts[0].textContent;

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            if (button.classList.contains(tabActiveClass)) return;

            buttons.forEach((button) => button.classList.remove(tabActiveClass));
            button.classList.add(tabActiveClass);

            content.classList.remove(tabAnimationClass);
            content.offsetHeight;

            texts[i].classList.add(tabAnimationClass);

            content.textContent = texts[i].textContent;
            content.classList.add(tabAnimationClass);
        });
    });
};
