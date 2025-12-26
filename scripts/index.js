let element = document.getElementById("swedbank")

let popup = tippy(element, {
    content: "IBAN → 📋️",
    trigger: "manual",
    onShow(instance) {
        setTimeout(() => {
            instance.hide();
        }, 1500);
    }
});

element.addEventListener("click", async (e) => {
    let iban = e.currentTarget.text
    try {
        await navigator.clipboard.writeText(iban)
        popup.setContent(`${iban} → 📋️️`)
        popup.show()
    } catch (error) {
        console.error(error.message)
    }
})