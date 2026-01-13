export const initializeHeaderFixed = () => {
    const headerElement = document.querySelector(".js-header");
    const triggerElement = document.querySelector(".js-trigger");
    const headerFixedClass = "is-fixed";

    if (!headerElement || !triggerElement) return;

    const options = {
        root: null,
        rootMargin: "0px 0px 0px 0px", // ヘッダーの高さ分、判定を内側にずらす
        threshold: 1,
    };

    let isFirstExecution = true;

    const showHeader = () => {
        headerElement.animate([{ transform: "translateY(0)" }, { transform: "translateY(80px)" }], {
            duration: 300,
            easing: "ease",
            fill: "forwards",
        });
        headerElement.classList.add(headerFixedClass);
    };

    const hideHeader = () => {
        const closingAnime = headerElement.animate([{ transform: "translateY(80px)" }, { transform: "translateY(0)" }], {
            duration: 300,
            easing: "ease",
            fill: "forwards",
        });

        closingAnime.onfinish = () => {
            headerElement.classList.remove(headerFixedClass);
        };
    };

    const callback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!isFirstExecution) {
                    hideHeader();
                }
            } else {
                showHeader();
            }
        });
        isFirstExecution = false;
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(triggerElement);
};
