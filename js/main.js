$(document).on('click', '.main--drop-down', function (e) {
    let elemets = document.getElementsByClassName(
        "main--drop-down"
    );
    let isActive = $(this).hasClass("active");

    if (isActive) {
        $(this).children(".main--drop-down-info").slideUp();
        $(this).removeClass("active");
    } else {
        for (let i = 0; i < elemets.length; i++) {
            elemets[i].classList.remove("active");
        }

        $(elemets)
            .children(".main--drop-down-info")
            .slideUp();
        $(this)
            .children(".main--drop-down-info")
            .slideDown();
        $(this).addClass("active");
    }
});

$(document).mouseup(function (e) {
    let container = $(".main");
    if (container.has(e.target).length === 0) {
        let elemets = document.getElementsByClassName(
            "main--drop-down"
        );
        let dropDowns = document.getElementsByClassName(
            "main--drop-down-info"
        );
        if ($(elemets).hasClass("active")) {
            $(elemets).removeClass("active");
            $(dropDowns).slideUp();
        }
    }
});
