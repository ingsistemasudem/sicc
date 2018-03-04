/**
 * Created by David on 26/02/2017.
 */

function animation(element, animation){
    element = $(element);
    element.removeClass('invisible');
    element.addClass('animated ' + animation);
    //wait for animation to finish before removing classes
    window.setTimeout( function(){
        element.removeClass('animated ' + animation);
    }, 2000);
}



jQuery(document).ready(function($) {


    /** element pressed for call to action */

    $("#a1").mouseover(function(){
        $("#a1").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a1").removeClass("img-apoyan-pressed");
    })

    $("#a2").mouseover(function(){
        $("#a2").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a2").removeClass("img-apoyan-pressed");
    })

    $("#a3").mouseover(function(){
        $("#a3").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a3").removeClass("img-apoyan-pressed");
    })

    $("#a4").mouseover(function(){
        $("#a4").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a4").removeClass("img-apoyan-pressed");
    })

    $("#a5").mouseover(function(){
        $("#a5").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a5").removeClass("img-apoyan-pressed");
    })

    $("#a6").mouseover(function(){
        $("#a6").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a6").removeClass("img-apoyan-pressed");
    })

    $("#a7").mouseover(function(){
        $("#a7").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a7").removeClass("img-apoyan-pressed");
    })

    $("#a8").mouseover(function(){
        $("#a8").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a8").removeClass("img-apoyan-pressed");
    })

    $("#a9").mouseover(function(){
        $("#a9").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a9").removeClass("img-apoyan-pressed");
    })

    $("#a10").mouseover(function(){
        $("#a10").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a10").removeClass("img-apoyan-pressed");
    })

    $("#a11").mouseover(function(){
        $("#a11").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a11").removeClass("img-apoyan-pressed");
    })

    $("#a12").mouseover(function(){
        $("#a12").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a12").removeClass("img-apoyan-pressed");
    })

    $("#a13").mouseover(function(){
        $("#a13").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a13").removeClass("img-apoyan-pressed");
    })

    $("#a14").mouseover(function(){
        $("#a14").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a14").removeClass("img-apoyan-pressed");
    })

    $("#a15").mouseover(function(){
        $("#a15").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a15").removeClass("img-apoyan-pressed");
    })

    $("#a16").mouseover(function(){
        $("#a16").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a16").removeClass("img-apoyan-pressed");
    })

    $("#a17").mouseover(function(){
        $("#a17").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a17").removeClass("img-apoyan-pressed");
    })

    $("#a18").mouseover(function(){
        $("#a18").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a18").removeClass("img-apoyan-pressed");
    })

    $("#a19").mouseover(function(){
        $("#a19").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a19").removeClass("img-apoyan-pressed");
    })

    $("#a20").mouseover(function(){
        $("#a20").addClass("img-apoyan-pressed");
    }).mouseout(function(){
        $("#a20").removeClass("img-apoyan-pressed");
    })
}); 