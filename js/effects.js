$(document).ready(function() {
    let tutDropdown = $("#tutDropdown");
    let tutButton = $("#tutButton");
    closeDropdown(tutDropdown);

    tutButton.hover(function() {
        tutDropdown.show();
    });
    tutButton.mouseleave(function() {
        tutDropdown.hide();
    });
    
});

function closeDropdown(dd) {
    dd.hide();
}
function showDropdown(dd) {
    dd.show();
}