'use strict';

function languageSwitch(newLang) {
	if (newLang !== "lv")
		newLang = "en";

	// console.info(`Switching language to ${newLang}...`);

	// Update objects
	$(`*[lang]`).addClass("hidden");
	$(`*[lang=${newLang}`).removeClass("hidden");
	$(`.language-switch li`).removeClass("current");
	$(`.language-switch a[data-lang=${newLang}]`).parent().addClass("current");

	return newLang;
}

function openMoney() {
	$(".money-table").addClass("open").removeClass("closed");

	window.location.hash = "money";
}

function sea() {
	alert("modo" + String.fromCharCode(64) + "modo.lv")
}

$(() => {
	let storage = Storages.localStorage;
	let newLang = storage.get("lang");
	languageSwitch(newLang);

	$(".language-switch a").click((e) => {
		// Save new language
		let newLang = languageSwitch($(e.target).data("lang"));
		let storage = Storages.localStorage;
		storage.set("lang", newLang);
	});

	let money = $(".money-table .cell");

	money.click(openMoney);
	if (window.location.hash === "#money" || window.location.search == "?money")
		money.click();
});