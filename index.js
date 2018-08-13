$( document ).ready(function() {
    console.log( "ready!" );
    $(".nav-detail-1").siblings().addClass( "hidden-class" );
    $(".nav-detail-1").siblings().removeClass( "display-block-class" );

    $(".nav-detail-1").removeClass( "hidden-class" );
    $(".nav-detail-1").addClass( "display-block-class" );
});