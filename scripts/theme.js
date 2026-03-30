(function () {
    const STORAGE_KEY = "ror2-theme";
    const VALID = new Set(["petrichor", "light", "void", "ember"]);

    function normalize(id) {
        return VALID.has(id) ? id : "petrichor";
    }

    function applyTheme(id) {
        const theme = normalize(id);
        document.documentElement.dataset.theme = theme;
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (_) {}
        const sel = document.getElementById("theme-select");
        if (sel && sel.value !== theme) sel.value = theme;
    }

    function init() {
        let saved = "petrichor";
        try {
            saved = normalize(localStorage.getItem(STORAGE_KEY));
        } catch (_) {}
        document.documentElement.dataset.theme = saved;

        const sel = document.getElementById("theme-select");
        if (sel) {
            sel.value = saved;
            sel.addEventListener("change", () => applyTheme(sel.value));
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
