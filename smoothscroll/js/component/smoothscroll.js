export const initializeSmoothScroll = () => {
    const links = document.querySelectorAll(".js-link");

    if (!links.length) return;

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const targetId = link.getAttribute("href");
            if (!targetId || !targetId.startsWith("#")) return;

            const target = document.querySelector(targetId);
            if (!target) return;

            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });
};
