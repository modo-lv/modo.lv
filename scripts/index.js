Object.prototype.also = function (f) {
    f(this)
    return this
}

window.addEventListener("DOMContentLoaded", () => {
    if (!new URLSearchParams(window.location.search).has("money"))
        return

    let swedbank =
        document.createElement("a").also((a) => {
            a.setAttribute("href", "#")
            a.innerText = "LV80HABA0551005403902"
        })

    document
        .querySelector("h1")
        .insertAdjacentElement("afterend", document.createElement("div").also(div =>
            div.appendChild(swedbank))
        )
        .insertAdjacentElement("afterend", document.createElement("hr"))

    let popup = tippy(swedbank, {
        content: "IBAN → 📋️",
        trigger: "manual",
        onShow(instance) {
            setTimeout(() => {
                instance.hide();
            }, 1500);
        }
    });
    swedbank.addEventListener("click", async (event) => {
        let iban = event.currentTarget.text
        try {
            await navigator.clipboard.writeText(iban)
            popup.setContent(`${iban} → 📋️️`)
            popup.show()
        } catch (error) {
            console.error(error.message)
        }
    })

});
