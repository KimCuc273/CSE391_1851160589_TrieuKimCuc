$(document).ready(function () {
    $("#nhap").keypress(function () { 
        var x = $("#nhap").val();

        $(".active").text(x);
              
    });
    $("#btnChange").click(function () { 
        var sValue = $("select").val();
        switch(parseInt(sValue)){
            case 1:
                $("p").removeClass();
                $("p").addClass("s1");
                break;
            case 2:
                $("p").removeClass();
                $("p").addClass("s2");
                break;
            case 3:
                $("p").removeClass();
                $("p").addClass("s3");
                break;
            case 4:
                $("p").removeClass();
                $("p").addClass("s4");
                break;
        }
    });

    $("#btnNew").click(function () { 
        $("p").removeClass("active");
        var $newp = $("<p/>")   
                 .addClass("active")  
                 .html("<p></p>");

        $("#story").append($newp);     
        $('#nhap').val('').change()
        
        
    });
});