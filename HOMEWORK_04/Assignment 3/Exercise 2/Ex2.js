$(document).ready(function(){
    $("#select").change(function(){
        var scalenum=$(this).val();
        $(".square").html('');
        for(let i=0;i<scalenum;i++){
            $(".square").append('<div class="sq"></div>');
        }
    })
})
