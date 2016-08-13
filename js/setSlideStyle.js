//

$(document).ready(function () {
    var widthConst = 275;
    var initialHeightSidebar = $("#sidebar").height();

    function resize() {
        var content = $("#content");
        var main = $("#main");
        var sidebar = $("#sidebar");

        if (
            (content.width() - main.width() < widthConst
            && main.width() > widthConst)
            || (content.width() - main.width() > widthConst)
        ) {
            main.css("maxWidth", (content.width() - widthConst) + "px");
        }

        if (main.width() < widthConst) {
            sidebar.css("height", initialHeightSidebar + "px");
        } else sidebar.css("height", main.innerHeight() + "px");

    };

    resize();
    window.onresize = resize;
});


