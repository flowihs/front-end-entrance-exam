const saveTimers = {};
const fadeTimers = {};

document.querySelectorAll('[contenteditable="true"]').forEach((element, index) => {
    const storageKey = "editable_" + index;
    const savedText = localStorage.getItem(storageKey);
    if (savedText !== null) {
        element.innerText = savedText;
    }

    const resetBackground = () => {
        element.style.backgroundColor = "";
        element.style.color = "";
        element.style.outline = "";
        element.style.borderRadius = "";
    };


    element.addEventListener("focus", () => {
        element.style.backgroundColor = "rgba(0, 0, 21, 0.3)";
        element.style.color = "white";
        element.style.outline = "none";
        element.style.borderRadius = "4px";

        if (fadeTimers[storageKey]) {
            clearTimeout(fadeTimers[storageKey]);
        }
    });

    element.addEventListener("input", () => {
        element.style.backgroundColor = "rgba(6, 6, 98, 0.3)";
        element.style.color = "white";
        element.style.outline = "none";
        element.style.borderRadius = "4px";

        if (saveTimers[storageKey]) {
            clearTimeout(saveTimers[storageKey]);
        }

        if (fadeTimers[storageKey]) {
            clearTimeout(fadeTimers[storageKey]);
        }

        saveTimers[storageKey] = setTimeout(() => {
            const text = element.innerText;
            localStorage.setItem(storageKey, text);
        }, 1000);

        fadeTimers[storageKey] = setTimeout(() => {
            resetBackground();
        }, 1000);
    });

    element.addEventListener("blur", () => {
        resetBackground();
        if (fadeTimers[storageKey]) {
            clearTimeout(fadeTimers[storageKey]);
        }
    });
});


