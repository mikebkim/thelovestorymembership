// Nav Targets

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 1000);
    return false;
});

// Underline Nav

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

// Close Nav

$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});
