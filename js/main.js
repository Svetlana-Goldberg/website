$(document).on('click', '.main--drop-down', function (e) {
    let elements = document.getElementsByClassName("main--drop-down");
    let isActive = $(this).hasClass("active");

    if (isActive) {
        $(this).children(".main--drop-down-info").slideUp();
        $(this).removeClass("active");
    } else {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("active");
        }

        $(elements).children(".main--drop-down-info").slideUp();
        $(this).children(".main--drop-down-info").slideDown();
        $(this).addClass("active");
    }
    e.stopPropagation(); // Prevent the click event from bubbling up to document
});

$(document).mouseup(function (e) {
    let container = $(".main");
    if (container.has(e.target).length === 0) {
        let elements = document.getElementsByClassName("main--drop-down");
        let dropDowns = document.getElementsByClassName("main--drop-down-info");
        if ($(elements).hasClass("active")) {
            $(elements).removeClass("active");
            $(dropDowns).slideUp();
        }
    }
});
