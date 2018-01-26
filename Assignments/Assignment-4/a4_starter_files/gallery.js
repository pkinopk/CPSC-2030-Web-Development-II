$(function(){

    //Fill Image Gallery with 10 random pictures
    for (var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * 16);
        var temp = '<img src="images/photo' + randomNumber + '.jpg">';
        $("#image-gallery").append(temp);
    }

});