// $(document).on('click', '.main--drop-down', function (e) {
//     let elements = document.getElementsByClassName("main--drop-down");
//     let isActive = $(this).hasClass("active");

//     if (isActive) {
//         $(this).children(".main--drop-down-info").slideUp();
//         $(this).removeClass("active");
//     } else {
//         for (let i = 0; i < elements.length; i++) {
//             elements[i].classList.remove("active");
//         }

//         $(elements).children(".main--drop-down-info").slideUp();
//         $(this).children(".main--drop-down-info").slideDown();
//         $(this).addClass("active");
//     }
//     e.stopPropagation(); // Prevent the click event from bubbling up to document
// });

// $(document).mouseup(function (e) {
//     let container = $(".main");
//     if (container.has(e.target).length === 0) {
//         let elements = document.getElementsByClassName("main--drop-down");
//         let dropDowns = document.getElementsByClassName("main--drop-down-info");
//         if ($(elements).hasClass("active")) {
//             $(elements).removeClass("active");
//             $(dropDowns).slideUp();
//         }
//     }
// });

$(document).on('click', '.main--drop-down', function (e) {
    console.log('Clicked on drop-down');
    let elements = document.getElementsByClassName("main--drop-down");
    let isActive = $(this).hasClass("active");

    if (isActive) {
        console.log('Closing drop-down');
        $(this).children(".main--drop-down-info").slideUp();
        $(this).removeClass("active");
    } else {
        console.log('Opening drop-down');
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
    console.log('Mouse up on document');
    let container = $(".main");
    if (container.has(e.target).length === 0) {
        console.log('Clicked outside container');
        let elements = document.getElementsByClassName("main--drop-down");
        let dropDowns = document.getElementsByClassName("main--drop-down-info");

        let activeElement = document.querySelector(".main--drop-down.active");
        if (activeElement && !activeElement.contains(e.target)) {
            $(elements).removeClass("active");
            $(dropDowns).slideUp();
        }
    }
});
