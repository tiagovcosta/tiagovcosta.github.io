/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50, white: true, bitwise: true */
/*global $, window, document*/

// On document ready, initialize noUiSlider.
$(function()
{
    'use strict';
    
    $('#slider_ssr').noUiSlider({
        start: [ 450 ],
        connect: "upper",
        range: {
            'min': 0,
            'max': 900
        }
    });
    
    $("#slider_ssr").on(
    {
        slide: function()
        {
            //window.alert($("#slider").val());
             $("#ssr").width($("#slider_ssr").val());
        }
	});
    
    $('#slider_dof').noUiSlider({
        start: [ 450 ],
        connect: "upper",
        range: {
            'min': 0,
            'max': 900
        }
    });
    
    $("#slider_dof").on(
    {
        slide: function()
        {
            //window.alert($("#slider").val());
             $("#dof").width($("#slider_dof").val());
        }
	});

});
