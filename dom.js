// $(document).ready(function()({
 


//image should be displayed in the 
//full size image container at the top

//remove the big picture for thumbnail 
$('.thumbnails img').click(function() {
    var thmb = this;
    var src = this.src;
    $('.hero img').fadeOut(400,function(){
        thmb.src = this.src;
        $(this).fadeIn(400)[0].src = src;
    });
});

// $('.thumbs img').click(function() {
//     var thmb = this;
//     var src = this.src;
//     $('.bottlesWrapper img').fadeOut(400,function(){
//         thmb.src = this.src;
//         $(this).fadeIn(400)[0].src = src;
//     });
// });


