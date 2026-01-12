export const initializeTabMenu = () => {
    const buttons = document.querySelectorAll(".js-tab-button");
    const texts = document.querySelectorAll(".js-tab-text");
    const content = document.querySelector(".js-tab-content");
    const tabActiveClass = "is-active";

    if (buttons.length === 0 || texts.length === 0 || !content) return;

    buttons[0].classList.add(tabActiveClass);
    content.textContent = texts[0].textContent;

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            buttons.forEach((button) => button.classList.remove(tabActiveClass));

            button.classList.add(tabActiveClass);

            content.textContent = texts[i].textContent;
        });
    });
};
