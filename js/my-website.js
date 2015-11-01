var hideText = "Hide Menu";
var showText = "Show Menu";

//Check the initial page load, if it is already shown/hidden
var sidebarWidth = $("#sidebar-wrapper").width();
if(sidebarWidth > 0){
    setToggleButtonText(hideText);
}
else{
    setToggleButtonText(showText);
}
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    var btnText = $(this).html();
    if(btnText === hideText){
        btnText = showText;
    }
    else{
        btnText = hideText;
    }
    $(this).html(btnText);
});

function setToggleButtonText(btnText){
    $("#menu-toggle").html(btnText);
}