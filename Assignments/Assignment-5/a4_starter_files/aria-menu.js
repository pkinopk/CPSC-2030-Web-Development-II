$(function () {
    $("#menu-button1").on("click", function () {
        $("#main-menu").toggle();
    })

    $("#menu-button2").on("click", function (event) {
        event.preventDefault();  
        $("#secondary-menu").toggle();
    })
    

    // PREVENT DEFAULT BEHAVIOUR FOR SPACEBAR
    $(document).keypress(function (e) { 
        e.preventDefault();                            
        if (e.which == 32) {
            // $("#main-menu").toggle();
        }
    }); 
});
