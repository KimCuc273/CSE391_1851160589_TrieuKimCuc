$(document).ready(function(){
    $(".circle").hover(function(){
        $(".square").css("background-color","white");
        }, function(){
            $(".square").css("background-color","burlywood");
    });
    
    //có thể dùng:
    // $(".circle").mouseenter(function(){
    //     $(".square").css("background-color", "white");
    //     }),  
    // $(".circle").mouseleave(function(){
    //         $(".square").css("background-color", "burlywood");
    //     });
    
});