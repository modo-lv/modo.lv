Object.prototype.also = function (f) {
    f(this)
    return this
}

window.addEventListener("DOMContentLoaded", () => {
    if (!new URLSearchParams(window.location.search).has("money"))
        return

    let iban = "LV80HABA0551005403902"
    let swedbank =
        document.createElement("a").also((a) => {
            a.setAttribute("href", "#")
            a.innerText = iban
        })

    document
        .querySelector("h1")
        .insertAdjacentElement("afterend", document.createElement("div").also(div =>
            div.appendChild(swedbank))
        )
        .insertAdjacentElement("afterend", document.createElement("hr"))

    let popup = tippy(swedbank, {
        content: `${iban} → 📋️`,
        trigger: "manual",
        onShow(instance) {
            setTimeout(() => {
                instance.hide();
            }, 1500);
        }
    });
    swedbank.addEventListener("click", async (event) => {
        try {
            await navigator.clipboard.writeText(iban)
            popup.show()
        } catch (error) {
            console.error(error.message)
        }
    })

});
