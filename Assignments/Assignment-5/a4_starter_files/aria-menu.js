$(function () {

	$("a[id*='menu-button']").on("click", function (e) {
		e.preventDefault();
		$(this).parent().find("ul").toggle();
	});

	$("a[id*='menu-button']").on("keydown", function (e) {
		e.preventDefault();
		if (e.which == 32 || e.which == 40 || e.which == 13) {
			$(this).parent().find("ul").toggle();
			$(this).parent().find("li:first-child > a").focus();

		}
	});

	var posititon = 1;
	$("[id*='-menu']").on("keydown", function (e) {

		if (posititon == 5 && e.which == 40) { // LAST MENU ITEM
			posititon = 0;
		}
		if (posititon == 1 && e.which == 38) { // FIRST MENU ITEM
			posititon = 6;
		}
		if (e.which == 40) { // ARROW DOWN
			posititon++;
			e.preventDefault();
			$(this).find("li:nth-child(" + posititon + ") > a").focus();
		}
		if (e.which == 38) { // ARROW UP
			posititon--;
			e.preventDefault();
			$(this).find("li:nth-child(" + posititon + ") > a").focus();
		}
		if (e.which == 27) { // ESC
			$(this).toggle();
			posititon = 1;
		}

	});
});