$(function () {

    // GET THE NEW IMAGE BASED ON USER'S INPUT
    $("form").on('submit', function (event) {
        event.preventDefault();
        $(this).parent().find(".image-container").removeClass("loaded");
        console.log($(this).parent().find(".image-container"));
        var userInput = $(this).find("input").val();
        var url = "https://source.unsplash.com/400x250/?" + userInput;
        $(this).parent().find(".image-container img").attr("src", url);
    });

    // ADD LOADED CLASS AFTER LOADING THE IMAGE
    $(".image-container img").on("load",function(){
        $(this).parent().addClass("loaded");
    });

    // ADD IMAGE TO GALLERY
    $('.add').on("click", function () {
        var image = $(this).closest(".image-generator").find(".image-container img")["0"].outerHTML;
        $("#image-gallery").find("img").first().before($(image));
    });

});